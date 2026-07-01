// ============================================================================
// patches.mjs — Vá THÊM TÍNH NĂNG (không phải dịch) lên index.js sau khi dịch.
//
// Mỗi patch = { name, find, replace }. build.mjs tìm chuỗi `find` (đúng 1 lần)
// rồi thay bằng `replace`. Nếu repo gốc đổi code khiến `find` không còn khớp,
// build.mjs sẽ BÁO tên patch đó để mình chỉnh anchor lại (giống cơ chế báo chữ
// Trung còn sót). Nhờ vậy tính năng vẫn tách khỏi src/ và đồng bộ upstream sạch.
//
// TÍNH NĂNG: dropdown "Ngôn ngữ đầu ra" (Anh / Trung / Việt) cho persona AI sinh
// ra. Ngôn ngữ do một chỉ thị chèn vào cuối prompt điều khiển (không đụng template
// người dùng tự sửa). Mặc định: Tiếng Anh.
// ============================================================================

export const PATCHES = [
    // --- A1) Thêm outputLang mặc định vào uiStateCache (khai báo chính) ---
    {
        name: 'state-default-outputLang',
        find: `let uiStateCache = { templateExpanded: true, theme: 'style.css', generationMode: 'user',`,
        replace: `let uiStateCache = { templateExpanded: true, theme: 'style.css', outputLang: 'en', generationMode: 'user',`,
    },

    // --- A2) Thêm outputLang vào defaultUiState (dùng khi reset) ---
    {
        name: 'state-reset-outputLang',
        find: `const defaultUiState = { templateExpanded: true, theme: 'style.css', generationMode: 'user',`,
        replace: `const defaultUiState = { templateExpanded: true, theme: 'style.css', outputLang: 'en', generationMode: 'user',`,
    },

    // --- B) Prefill trung tính (bỏ seed key tiếng Anh để không lệch khi chọn Trung/Việt) ---
    {
        name: 'neutral-prefill',
        find: 'let prefillContent = "```yaml\\nBasic Info:";',
        replace: 'let prefillContent = "```yaml\\n";',
    },

    // --- C) Chèn chỉ thị ngôn ngữ đầu ra vào cuối prompt (mọi luồng: tạo/tinh chỉnh/suy luận) ---
    {
        name: 'inject-output-lang-directive',
        find: `    const updateDebugView = (messages) => {`,
        replace: `    // [FORK] Chèn chỉ thị ngôn ngữ đầu ra (Anh/Trung/Việt) — điều khiển ngôn ngữ persona
    {
        const _lang = uiStateCache.outputLang || 'en';
        const _names = { en: 'English', zh: 'Simplified Chinese', vi: 'Vietnamese (Tiếng Việt)' };
        const _n = _names[_lang] || _names.en;
        userMessageContent += isTemplateMode
            ? '\\n\\n[OUTPUT LANGUAGE — OVERRIDE ANY EARLIER LANGUAGE INSTRUCTION]: Output ALL YAML schema keys in ' + _n + '. Keep values empty.'
            : '\\n\\n[OUTPUT LANGUAGE — OVERRIDE ANY EARLIER LANGUAGE INSTRUCTION]: Render the ENTIRE YAML in ' + _n + '. Translate every field key into natural ' + _n + ' and write every value in ' + _n + ', keeping the exact same structure and nesting.';
    }

    const updateDebugView = (messages) => {`,
    },

    // --- D) Thêm dropdown "Ngôn ngữ đầu ra" ngay trước ô chọn Theme ---
    {
        name: 'ui-output-lang-select',
        find: `            <!-- Theme Selector -->`,
        replace: `            <!-- [FORK] Output Language Selector -->
            <div class="pw-card-section">
                <div class="pw-row">
                    <label class="pw-section-label">Ngôn ngữ đầu ra</label>
                    <select id="pw-output-lang" class="pw-input" style="flex:1;">
                        <option value="en">Tiếng Anh</option>
                        <option value="zh">Tiếng Trung</option>
                        <option value="vi">Tiếng Việt</option>
                    </select>
                </div>
                <div style="font-size:0.75em; opacity:0.6; margin-top:4px; text-align:left;">Ngôn ngữ persona AI sinh ra (áp dụng cho lần tạo/tinh chỉnh tiếp theo).</div>
            </div>

            <!-- Theme Selector -->`,
    },

    // --- E) Đặt giá trị dropdown theo state mỗi lần render panel ---
    {
        name: 'ui-output-lang-init',
        find: `const savedTheme = uiStateCache.theme || 'style.css';`,
        replace: `$('#pw-output-lang').val(uiStateCache.outputLang || 'en');
const savedTheme = uiStateCache.theme || 'style.css';`,
    },

    // --- F) Handler đổi ngôn ngữ đầu ra (lưu vào uiStateCache) ---
    {
        name: 'ui-output-lang-handler',
        find: `    $(document).on('change.pw', '#pw-preset-select', function() {`,
        replace: `    $(document).on('change.pw', '#pw-output-lang', function () {
        uiStateCache.outputLang = $(this).val();
        saveData();
        toastr.success('Ngôn ngữ đầu ra: ' + ({ en: 'Tiếng Anh', zh: 'Tiếng Trung', vi: 'Tiếng Việt' }[uiStateCache.outputLang] || 'Tiếng Anh'));
    });

    $(document).on('change.pw', '#pw-preset-select', function() {`,
    },
];
