// ============================================================================
// build.mjs — Sinh ra các file đã dịch (index.js, style.css, ...) tại thư mục
// gốc, dựa trên bản pristine trong src/ + từ điển trong i18n/dict.mjs.
//
// Cách chạy:   node scripts/build.mjs
//
// Nguyên tắc: thay chuỗi theo thứ tự KEY DÀI TRƯỚC (longest-first) để một câu UI
// dài (dịch sang tiếng Việt) luôn được thay trước các token ngắn (field -> English),
// tránh xung đột. Xem README.md phần "Đồng bộ repo gốc".
// ============================================================================
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { EN, VI } from '../i18n/dict.mjs';
import { PATCHES } from '../i18n/patches.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');

const ZH = /[㐀-鿿豈-﫿]/;         // dải Hán tự cơ bản + mở rộng A + tương thích

// --- Gộp từ điển, cảnh báo nếu một key nằm ở cả EN lẫn VI (nguy cơ xung đột) ---
const dict = {};
for (const [k, v] of Object.entries(EN)) dict[k] = v;
for (const [k, v] of Object.entries(VI)) {
    if (k in dict && dict[k] !== v) {
        console.warn(`⚠️  Key trùng ở cả EN và VI (dùng bản VI): "${k}"  EN="${dict[k]}" VI="${v}"`);
    }
    dict[k] = v;
}

// Sắp key theo độ dài giảm dần (dài trước)
const keys = Object.keys(dict).sort((a, b) => b.length - a.length);

function translate(text) {
    let out = text;
    for (const k of keys) {
        if (out.includes(k)) out = out.split(k).join(dict[k]);
    }
    return out;
}

// Áp các patch tính năng (chỉ cho index.js). Trả về danh sách patch không khớp anchor.
function applyPatches(text) {
    let out = text;
    const failed = [];
    for (const p of PATCHES) {
        const idx = out.indexOf(p.find);
        if (idx === -1) { failed.push(p.name); continue; }
        if (out.indexOf(p.find, idx + p.find.length) !== -1) {
            console.warn(`⚠️  Patch "${p.name}": anchor khớp >1 lần, chỉ thay lần đầu.`);
        }
        out = out.slice(0, idx) + p.replace + out.slice(idx + p.find.length);
    }
    return { out, failed };
}

// Các file cần xử lý (đều copy từ src/ ra gốc; file không có chữ Trung thì chỉ là copy).
// README.md KHÔNG nằm ở đây: bản gốc lưu ở src/README.md, còn README.md ở thư mục
// gốc là bản viết tay riêng cho fork (hướng dẫn cài + đồng bộ), không sinh tự động.
const FILES = ['index.js', 'style.css', 'Cozy_Fox.css', 'manifest.json'];

let totalLeftover = 0;
for (const file of FILES) {
    const srcPath = path.join(SRC, file);
    if (!fs.existsSync(srcPath)) {
        console.warn(`⚠️  Bỏ qua (không có trong src/): ${file}`);
        continue;
    }
    const original = fs.readFileSync(srcPath, 'utf8');
    let translated = translate(original);

    // Chỉ index.js mới áp patch tính năng
    if (file === 'index.js') {
        const { out, failed } = applyPatches(translated);
        translated = out;
        if (failed.length) {
            console.error(`\n❌ ${failed.length} patch KHÔNG áp được (anchor đã đổi ở upstream): ${failed.join(', ')}`);
            console.error('   → Mở i18n/patches.mjs chỉnh lại `find` cho khớp code mới.');
        } else {
            console.log(`🔧 ${file}: đã áp ${PATCHES.length}/${PATCHES.length} patch tính năng.`);
        }
    }

    fs.writeFileSync(path.join(ROOT, file), translated);

    // Báo cáo chữ Trung còn sót (chưa có trong từ điển).
    // Bỏ qua dòng comment code (// hoặc *) vì comment không ảnh hưởng người dùng
    // và được cố ý giữ nguyên tiếng Trung.
    const leftover = [];
    translated.split('\n').forEach((line, i) => {
        const t = line.trim();
        const isComment = t.startsWith('//') || t.startsWith('*') || t.startsWith('/*');
        if (!isComment && ZH.test(line)) leftover.push(i + 1);
    });
    if (leftover.length) {
        totalLeftover += leftover.length;
        console.log(`\n📄 ${file}: còn ${leftover.length} dòng có chữ Trung -> dòng: ${leftover.join(', ')}`);
    } else {
        console.log(`✅ ${file}: đã dịch hết (0 chữ Trung còn sót).`);
    }
}

console.log(`\n=== Xong. Tổng số dòng còn chữ Trung: ${totalLeftover} ===`);
if (totalLeftover > 0) {
    console.log('→ Thêm các chuỗi còn thiếu vào i18n/dict.mjs rồi chạy lại: node scripts/build.mjs');
}

// --- Kiểm tra cú pháp index.js (BẮT BUỘC dùng chế độ module qua stdin, vì
// `node --check <file>` cho kết quả PASS SAI với file ESM có chuỗi lỗi) ---
console.log('\n=== Kiểm tra cú pháp index.js ===');
try {
    execSync('node --input-type=module --check', {
        input: fs.readFileSync(path.join(ROOT, 'index.js')),
        stdio: ['pipe', 'ignore', 'inherit'],
    });
    console.log('✅ index.js: cú pháp hợp lệ.');
} catch {
    console.error('❌ index.js: LỖI CÚ PHÁP (xem chi tiết ở trên). Thường do value trong dict.mjs chứa dấu " hoặc \' làm vỡ chuỗi — hãy dùng nháy cong “ ” thay thế.');
    process.exitCode = 1;
}
