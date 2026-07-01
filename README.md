# 🧙‍♂️ Persona Weaver (User人设生成器)

[中文] | [English](#english) | [Tiếng Việt](#tiếng-việt)

SillyTavern 原生扩展插件。旨在利用 AI 智能生成、深度润色和管理您的 User Persona（用户人设），支持智能对比编辑与世界书自动联动。

## ✨ 核心功能

*   **AI 智能生成**：根据简单的自然语言描述（或内置 YAML 模版），自动生成结构化、高质量的用户人设。
*   **深度润色 & 智能对比**：
    *   对现有设定不满意？输入修改意见，AI 智能重写。
    *   提供 **Diff (差异对比)** 视图，直观展示修改前后的变化，支持选择性保留或直接编辑。
*   **草稿箱系统**：自动或手动保存生成记录到草稿箱，灵感永不丢失，随时一键回填。
*   **世界书联动**：自动检测当前绑定的世界书，将设定作为条目一键写入，实现剧情深度绑定。
*   **独立 API 支持**：支持配置独立的 API（如 OpenAI、DeepSeek 等）进行后台生成，不占用主对话的上下文和模型配置。
*   **移动端适配**：优化的 UI 设计，支持手机端触摸滑动与悬浮操作。

## 📦 安装方法

1.  **前置需求**：建议安装并启用 [TavernHelper (JS-Slash-Runner)](https://github.com/n0vi028/JS-Slash-Runner) 插件以获得最佳的世界书操作体验（非强制，但推荐）。
2.  打开 SillyTavern 的 **Extensions (扩展)** 页面。
3.  点击 **Install Extension**。
4.  在 URL 栏输入本仓库地址：`[https://github.com/sisisisilviaxie-star/st-persona-weaver]`
5.  点击 **Save** 并刷新页面。

## 📖 使用简述

1.  安装后，输入框上方会出现 **魔棒图标** (<i class="fa-solid fa-wand-magic-sparkles"></i>)，点击即可打开面板。
2.  **生成**：在编辑页输入您的要求，点击生成。
3.  **润色**：选中生成结果中的某段文字，点击浮现的“修改”按钮，或直接在下方输入意见进行润色。
4.  **保存**：点击“保存”将结果存入草稿，或点击“覆盖当前人设”直接应用。

---

<a name="english"></a>
## English

**Persona Weaver** is a native extension for SillyTavern that uses AI to help create, refine, and manage User Personas, with automatic World Info synchronization.

### ✨ Features

*   **AI Generation**: Automatically generate detailed, structured User Personas (YAML) based on simple prompts or templates.
*   **Smart Refinement & Diff View**: 
    *   Refine your persona with natural language instructions.
    *   **Smart Contrast**: Visually compare the original vs. refined text side-by-side, allowing you to selectively apply changes or edit directly.
*   **Drafts System**: Auto-save your generation history to the Drafts tab. Never lose an idea again.
*   **World Info Sync**: Automatically detects bound World Info books and allows one-click saving of your persona as an entry.
*   **Independent API**: Supports configuring a separate API (e.g., OpenAI, DeepSeek) for generation tasks, keeping your main chat context free.
*   **Mobile Friendly**: Optimized UI for touch screens and mobile devices.

### 📦 Installation

1.  **Prerequisite**: [TavernHelper (JS-Slash-Runner)](https://github.com/n0vi028/JS-Slash-Runner) is recommended for full World Info features.
2.  Open **Extensions** in SillyTavern.
3.  Click **Install Extension**.
4.  Paste the repo URL: `https://github.com/sisisisilviaxie-star/st-persona-weaver`
5.  Click **Save** and reload.

## 📄 License

MIT License

---

<a name="tiếng-việt"></a>
## Tiếng Việt

**Persona Weaver** là extension gốc cho SillyTavern, dùng AI để tạo, tinh chỉnh và quản lý User Persona, tự động đồng bộ với World Info.

> 🇻🇳 Đây là **bản Việt hóa** (fork): giao diện tiếng Việt, còn template nhân vật và nội dung AI xuất ra bằng tiếng Anh.

### ✨ Tính năng

*   **AI tạo tự động**: Tự sinh User Persona (YAML) chi tiết, có cấu trúc từ mô tả đơn giản hoặc template có sẵn.
*   **Tinh chỉnh & xem Diff**:
    *   Tinh chỉnh persona bằng câu chỉ dẫn tự nhiên.
    *   **So sánh trực quan** bản gốc và bản đã sửa cạnh nhau, chọn giữ từng phần hoặc sửa trực tiếp.
*   **Hệ thống bản ghi**: Tự lưu lịch sử tạo vào tab Bản ghi, không lo mất ý tưởng.
*   **Đồng bộ World Info**: Tự phát hiện World Info đang gắn và lưu persona thành một mục chỉ bằng một cú bấm.
*   **API riêng**: Cấu hình API riêng (OpenAI, DeepSeek...) cho việc tạo, không chiếm ngữ cảnh của cuộc chat chính.
*   **Hợp mobile**: Giao diện tối ưu cho cảm ứng và điện thoại.

### 📦 Cài đặt

1.  **Nên có trước**: cài [TavernHelper (JS-Slash-Runner)](https://github.com/n0vi028/JS-Slash-Runner) để dùng đầy đủ tính năng World Info.
2.  Mở **Extensions** trong SillyTavern → **Install Extension**.
3.  Dán URL của fork này: `https://github.com/kkhanh-kas/st-persona-weaver`
4.  Bấm **Save** và tải lại trang.

### 📖 Hướng dẫn sử dụng chi tiết

#### 1. Mở bảng điều khiển
1. Vào **Persona Management** (biểu tượng hình người), tìm nút **đũa phép** ✨ ở hàng nút điều khiển persona rồi bấm vào.
2. Cách luôn dùng được: mở Console trình duyệt (phím F12), gõ `openPersonaWeaver()` rồi Enter.

#### 2. Năm thẻ chính
1. **Persona:** nơi soạn yêu cầu, xem kết quả, tinh chỉnh và lưu.
2. **Tham khảo:** nguồn tư liệu cho AI (preset, lời chào nhân vật, World Info, hình ảnh, lịch sử chat).
3. **API:** chọn dùng API chính của SillyTavern hay API riêng, và quản lý cấu hình.
4. **Hệ thống:** ngôn ngữ đầu ra, giao diện, sửa Prompt, xem Debug, xuất nhập dữ liệu, cập nhật.
5. **Bản ghi:** lịch sử các lần tạo, tìm lại và nạp lại.

#### 3. Chọn chế độ User hay NPC
Ở đầu thẻ **Persona** có công tắc **Chế độ User** và **Chế độ NPC**:
1. **User:** tạo persona cho chính bạn (nhân vật người dùng).
2. **NPC:** tạo nhân vật phụ cho câu chuyện.

#### 4. Tạo một persona (các bước cơ bản)
1. Vào thẻ **Persona**, chọn chế độ mong muốn.
2. Tùy chọn: bấm **Khối mẫu (bấm để điền)** để chèn khung cấu trúc gợi ý vào ô yêu cầu.
3. Gõ mô tả mong muốn vào ô yêu cầu. Bạn không cần điền hết mọi mục.
4. Bấm **Tạo thiết lập User** (hoặc **Tạo thiết lập NPC**), chờ AI sinh nội dung.
5. Kết quả hiện ở ô bên dưới dưới dạng YAML.

#### 5. Tinh chỉnh kết quả và xem so sánh (Diff)
1. Muốn sửa cả bài: gõ ý kiến vào ô tinh chỉnh rồi bấm **Tinh chỉnh**.
2. Muốn sửa một đoạn: bôi đen đoạn đó trong kết quả, bấm nút nổi **Sửa đoạn này**, nhập ý kiến rồi tinh chỉnh.
3. Sau khi tinh chỉnh, màn **so sánh** hiện ra: bấm **Bản gốc**, **Bản mới**, **Cuối cùng** để xem qua lại; bấm vào đoạn được tô sáng để chọn giữ bản cũ hay bản mới.
4. Bấm **Áp dụng** để chốt, **Tạo lại** để làm lại cùng yêu cầu, hoặc **Bỏ** để hủy.

#### 6. Lưu và áp dụng
Ở hàng nút dưới kết quả:
1. **Lưu vào bản ghi:** cất kết quả vào thẻ Bản ghi để dùng lại sau.
2. **Sao chép nội dung:** copy YAML ra clipboard.
3. **Ghi đè persona hiện tại:** áp thẳng kết quả vào User Persona đang chọn của SillyTavern (chỉ ở chế độ User).
4. **Lưu vào World Info:** ghi kết quả thành một mục trong World Info đang gắn.

#### 7. Dùng và tạo template (mẫu)
1. **Chèn cấu trúc:** bấm **Khối mẫu (bấm để điền)** để đưa khung field vào ô yêu cầu.
2. **Sửa mẫu:** bấm **Sửa mẫu** để mở trình sửa, đổi tên field theo ý, rồi bấm **Lưu mẫu**.
3. **Nhờ AI tạo mẫu mới:** khi đang ở chế độ sửa mẫu, nhập yêu cầu (ví dụ: thêm thuộc tính tu tiên) rồi bấm **Tạo mẫu**, xong nhớ bấm **Lưu mẫu**.

#### 8. Suy luận persona từ lịch sử chat
1. Vào thẻ **Tham khảo**, bật **Cài đặt lịch sử chat**, chọn phạm vi (ví dụ 20 tin gần nhất, hoặc theo tầng).
2. Quay lại thẻ **Persona**, nút tạo đổi thành **Tạo bằng suy luận chat**.
3. Bấm để AI phân tích cuộc trò chuyện rồi dựng persona.

#### 9. Tham khảo hình ảnh và World Info
1. **Hình ảnh:** ở thẻ Tham khảo, mục **Tham khảo hình ảnh**, tải ảnh lên rồi chọn để AI mô tả ngoại hình theo ảnh.
2. **World Info:** chọn World Info liên quan để AI đọc bối cảnh; có thể **Ghim** một World Info để giữ qua nhiều thẻ nhân vật.

#### 10. Chọn ngôn ngữ đầu ra (tính năng riêng của bản Việt hóa)
1. Vào thẻ **Hệ thống**, tìm **Ngôn ngữ đầu ra**.
2. Chọn **Tiếng Anh**, **Tiếng Trung** hoặc **Tiếng Việt**. Mặc định là Tiếng Anh.
3. Lựa chọn áp dụng cho **lần tạo hoặc tinh chỉnh tiếp theo**, quyết định ngôn ngữ persona AI viết ra.

#### 11. Cấu hình API
1. Vào thẻ **API**, ở **Nguồn API** chọn **API chính** (dùng chung với SillyTavern) hoặc **API riêng**.
2. Với API riêng: tạo **Preset cấu hình**, điền URL, Key, chọn model; có **Thời gian chờ (giây)** và **Xuất theo luồng** để tránh lỗi 504.
3. Bấm nút test để kiểm tra kết nối.

#### 12. Sao lưu và khôi phục dữ liệu
Ở thẻ **Hệ thống**, mục **Di trú dữ liệu**: tick chọn nội dung (ảnh, bản ghi, cấu hình API, giao diện) rồi bấm **Xuất** ra file hoặc **Nhập** lại từ file.

#### 13. Mẹo
1. Ô **Xem trước nội dung gửi (Debug)** ở thẻ Hệ thống cho bạn thấy đúng nội dung gửi cho AI, tiện để hiểu và chỉnh Prompt.
2. Bạn có thể tự sửa Prompt ở mục **Xem & sửa Prompt**, bấm **Khôi phục mặc định** nếu muốn về bản gốc.

---

## 🛠️ Ghi chú cho người bảo trì fork (Việt hóa)

Bản dịch dùng cơ chế **từ điển + script** để dễ theo update từ repo gốc:

1. `src/`: bản gốc nguyên vẹn từ repo gốc (nguồn để dịch).
2. `i18n/dict.mjs`: từ điển, gồm `EN` (template và prompt sang tiếng Anh) và `VI` (giao diện sang tiếng Việt).
3. `i18n/patches.mjs`: **vá thêm tính năng** (không phải dịch) áp lên `index.js` sau khi dịch. Nếu upstream đổi code làm anchor không khớp, `build.mjs` sẽ báo tên patch để sửa `find`.
4. `scripts/build.mjs`: sinh lại file đã dịch ở thư mục gốc bằng `node scripts/build.mjs`.
5. `scripts/sync.mjs`: kéo bản mới từ repo gốc rồi build lại bằng `node scripts/sync.mjs`.

**Tính năng thêm của fork:** danh sách chọn **"Ngôn ngữ đầu ra"** (Anh, Trung, Việt) trong thẻ Hệ thống, để chọn ngôn ngữ persona AI sinh ra, mặc định Tiếng Anh. Cách làm: chèn một chỉ thị vào cuối prompt (không đụng template bạn tự chỉnh).

Các file `index.js`, `style.css`, `manifest.json`, `Cozy_Fox.css` ở thư mục gốc là **bản sinh tự động, đừng sửa tay**. Muốn đổi bản dịch thì sửa `i18n/dict.mjs` rồi build lại. Lần đầu cần thêm remote:
```bash
git remote add upstream https://github.com/sisisisilviaxie-star/st-persona-weaver.git
```
