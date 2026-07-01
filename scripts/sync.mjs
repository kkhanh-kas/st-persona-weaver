// ============================================================================
// sync.mjs — Đồng bộ với repo gốc rồi dịch lại (một lệnh).
//
//   node scripts/sync.mjs
//
// Các bước:
//   1. git fetch upstream
//   2. Lấy file gốc mới nhất từ upstream/main -> ghi đè vào src/  (KHÔNG merge,
//      nên KHÔNG bao giờ xung đột)
//   3. Chạy build.mjs -> sinh lại index.js/style.css/... tiếng Việt ở thư mục gốc
//
// Sau khi chạy, nếu build báo "còn N dòng có chữ Trung", mở i18n/dict.mjs thêm
// bản dịch cho các chuỗi mới rồi chạy lại `node scripts/build.mjs`.
//
// Yêu cầu: đã thêm remote upstream:
//   git remote add upstream https://github.com/sisisisilviaxie-star/st-persona-weaver.git
// ============================================================================
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');

// Các file gốc cần lấy về từ upstream
const FILES = ['index.js', 'style.css', 'Cozy_Fox.css', 'manifest.json', 'README.md'];
const BRANCH = 'upstream/main';

function run(cmd) {
    console.log(`$ ${cmd}`);
    return execSync(cmd, { cwd: ROOT, stdio: ['ignore', 'pipe', 'inherit'] }).toString();
}

console.log('1) Fetch upstream...');
run('git fetch upstream');

console.log(`\n2) Lấy file gốc từ ${BRANCH} vào src/ ...`);
for (const f of FILES) {
    try {
        const content = execSync(`git show ${BRANCH}:${f}`, { cwd: ROOT }).toString();
        fs.writeFileSync(path.join(SRC, f), content);
        console.log(`   ✓ src/${f}`);
    } catch {
        console.warn(`   ⚠️  Bỏ qua (không có trên ${BRANCH}): ${f}`);
    }
}

console.log('\n3) Build lại (dịch)...\n');
run('node scripts/build.mjs');
