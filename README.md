# Knowledge OS - Hệ thống Quản lý Kiến thức Cá nhân

Ứng dụng mini giúp đọc tin tức hàng ngày, tóm tắt bài viết/video, hỏi đáp AI, lưu trữ kiến thức, tìm kiếm bài học cũ và ôn tập theo spaced repetition.

## Công nghệ

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express
- **Database:** SQLite + Prisma
- **AI:** OpenAI-compatible API (hỗ trợ itera102, OpenAI, v.v.)

## Cài đặt

### 1. Yêu cầu

- Node.js 18+
- npm

### 2. Clone & cài đặt dependencies

```bash
cd knowledge-os
npm run install:all
```

### 3. Cấu hình

Copy `.env.example` vào `backend/.env`:

```bash
# backend/.env
AI_API_KEY=sk-your-api-key-here
NEWS_API_KEY=
PORT=3001
DATABASE_URL="file:./dev.db"
```

Điền AI API key thật (OpenAI-compatible).

### 4. Khởi tạo database

```bash
npm run db:push
npm run db:seed
```

### 5. Chạy ứng dụng

```bash
npm run dev
```

Mở trình duyệt: `http://localhost:5173`

Hoặc build production:

```bash
cd frontend && npx vite build
cd ../backend && node server.js
```

Mở: `http://localhost:3001`

## Tính năng

### 1. Tin tức hàng ngày (Daily News)
- Fetch 10 tin từ nguồn RSS quốc tế (Reuters, BBC, NPR, Ars Technica, TechCrunch, WHO, IMF...)
- AI tóm tắt 5 bullet tiếng Việt + Why it matters + Reliability note
- Lưu/Xóa tin
- Cấu hình chủ đề trong Settings

### 2. Học từ link (Learn From Link)
- Hỗ trợ: article URL, YouTube URL, raw text
- Tự động extract transcript YouTube (hỗ trợ youtranscript.com)
- Nếu extract thất bại: cho paste transcript thủ công
- AI output full: luận điểm cốt lõi, ý chính, thuật ngữ, ví dụ thực tế, cách áp dụng, sai lầm, câu hỏi, flashcards

### 3. Hỏi AI (Ask AI)
- Trả lời bằng tiếng Việt với format: khái niệm, diễn giải, ví dụ, kết nối, áp dụng, câu hỏi, gợi ý học tiếp
- Chọn danh mục: Economics, Invest - Trading, Marketing, Health, Mindset, Daily

### 4. Kho lưu trữ (Archive)
- Lưu tất cả kết quả học tập
- Tìm kiếm, filter category/source type/date, sort
- Xem chi tiết, chỉnh sửa, đánh dấu yêu thích
- Knowledge Map cho thấy chủ đề liên quan

### 5. Ôn tập (Review)
- Spaced repetition: Day 1, 3, 7, 30
- Flow: xem câu hỏi → viết câu trả lời → reveal đáp án → rate Easy/Medium/Hard
- Hard: schedule sớm hơn, Easy: schedule muộn hơn

### 6. Cài đặt (Settings)
- AI API key, News API key (optional)
- Chọn chủ đề tin tức ưu tiên
- Danh mục học tập
- Số lượng tin mỗi ngày
- Toggle Chính trị, Sức khỏe, Auto flashcards

## Nguồn RSS mặc định

| Nguồn | Chủ đề |
|-------|--------|
| Reuters | Kinh tế |
| BBC News | Chính trị |
| NPR | Chính trị |
| Ars Technica | Công nghệ |
| TechCrunch | Công nghệ |
| MIT Tech Review | AI |
| WHO | Sức khỏe |
| IMF | Kinh tế |
| Science Daily | AI |
| Hacker News | Công nghệ |
| NIH | Sức khỏe |

## License

MIT
