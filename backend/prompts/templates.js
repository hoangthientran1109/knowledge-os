// Prompt templates cho Knowledge OS

const newsSummaryPrompt = (title, category, source) => `
Bạn là trợ lý phân tích tin tức quốc tế chuyên nghiệp. Đọc bài viết dưới đây và đánh giá + tóm tắt bằng tiếng Việt.

TIÊU ĐỀ GỐC: ${title}
DANH MỤC: ${category}
NGUỒN: ${source}

Bước 1: Đánh giá xem tin này có THỰC SỰ QUAN TRỌNG không (tác động lớn, nhiều người quan tâm, ảnh hưởng đến thị trường/công nghệ/chính sách toàn cầu). 
Nếu tin này là tin vặt, không đáng chú ý, TRẢ VỀ: {"skip": true}

Bước 2: Nếu tin quan trọng, tóm tắt theo format sau (CHỈ trả về JSON):
{
  "skip": false,
  "title": "Tiêu đề tiếng Việt súc tích, thu hút",
  "category": "${category}",
  "sourceName": "${source}",
  "importance": "high|medium",
  "summary": ["Bullet 1 - sự kiện chính", "Bullet 2 - chi tiết quan trọng", "Bullet 3 - con số/dữ liệu", "Bullet 4 - tác động", "Bullet 5 - diễn biến tiếp theo"],
  "whyItMatters": "Tại sao tin này quan trọng với độc giả Việt Nam (1-2 câu)",
  "reliabilityNote": "Đánh giá độ tin cậy (nguồn uy tín / cần kiểm chứng / có bias), 1 câu"
}

Lưu ý:
- CHỈ giữ tin THỰC SỰ quan trọng, đáng đọc. Bỏ qua tin vặt, tin lá cải.
- Mỗi bullet phải có thông tin cụ thể, không chung chung
- whyItMatters phải nêu rõ tác động thực tế
`;

const learnFromContentPrompt = (content, category, sourceType) => `
Bạn là trợ lý học tập chuyên sâu. Hãy phân tích nội dung dưới đây và tạo bài học bằng tiếng Việt.

DANH MỤC: ${category}
LOẠI NGUỒN: ${sourceType}

Định dạng output JSON (CHỈ trả về JSON):
{
  "title": "Tiêu đề bài học",
  "coreThesis": "Luận điểm cốt lõi - đúng 3 câu, mỗi câu cách nhau bởi dấu chấm phẩy (;)",
  "oneThingToRemember": "1 câu duy nhất - điều quan trọng nhất cần nhớ",
  "keyPoints": ["Ý chính 1", "Ý chính 2", ... (10-15 bullet points)],
  "terms": [{"term": "Thuật ngữ", "definition": "Giải thích"}, ...],
  "examples": [{"context": "Ngữ cảnh", "description": "Mô tả ví dụ"}, ...],
  "application": "Cách áp dụng vào thực tế (2-3 câu)",
  "mistakes": "Sai lầm thường gặp khi hiểu nội dung này (2-3 câu)",
  "selfTestQuestions": ["Câu hỏi 1?", "Câu hỏi 2?", "Câu hỏi 3?", "Câu hỏi 4?", "Câu hỏi 5?"],
  "flashcards": [{"question": "Câu hỏi", "answer": "Câu trả lời"}, ... (5-10 cặp)]
}

Nội dung cần phân tích:
${content}
`;

const askAiPrompt = (question, category) => `
Bạn là gia sư AI chuyên sâu, trả lời bằng tiếng Việt.

CÂU HỎI: ${question}
DANH MỤC: ${category}

Định dạng output JSON (CHỈ trả về JSON):
{
  "concept": "Khái niệm - định nghĩa ngắn gọn",
  "explanation": "Diễn giải cụ thể, chi tiết (3-5 câu)",
  "example": "Ví dụ thực tế (1-2 câu)",
  "connections": "Kết nối mở rộng - liên hệ với kiến thức khác (2-3 câu)",
  "application": "Cách áp dụng vào thực tế (2-3 câu)",
  "selfTestQuestions": ["Câu hỏi 1?", "Câu hỏi 2?", "Câu hỏi 3?", "Câu hỏi 4?", "Câu hỏi 5?"],
  "nextTopics": "Gợi ý học tiếp - chủ đề liên quan nên tìm hiểu thêm"
}
`;

const flashcardGenerationPrompt = (content, title) => `
Dựa trên nội dung sau, tạo 5-10 cặp flashcard (hỏi-đáp) bằng tiếng Việt.
CHỈ trả về JSON array:
[
  {"question": "Câu hỏi?", "answer": "Câu trả lời"},
  ...
]

TIÊU ĐỀ: ${title}
NỘI DUNG:
${content}
`;

const knowledgeMapPrompt = (content, title, category, allTitles) => `
Dựa trên nội dung và tiêu đề bài học, hãy đề xuất kiến thức liên quan.

TIÊU ĐỀ: ${title}
DANH MỤC: ${category}
DANH SÁCH BÀI HỌC ĐÃ LƯU: ${allTitles}

NỘI DUNG: ${content}

Định dạng output JSON (CHỈ trả về JSON):
{
  "relatedTopics": ["Chủ đề liên quan 1", "Chủ đề liên quan 2", "Chủ đề liên quan 3"],
  "relatedItemIds": ["id bài học liên quan 1", ...] (chọn từ danh sách bài đã lưu nếu có liên quan),
  "nextTopic": "Gợi ý chủ đề học tiếp theo"
}
`;

const reviewQuestionPrompt = (content, title) => `
Tạo 3 câu hỏi ôn tập bằng tiếng Việt dựa trên nội dung sau.
CHỈ trả về JSON array:
[
  "Câu hỏi ôn tập 1?",
  "Câu hỏi ôn tập 2?",
  "Câu hỏi ôn tập 3?"
]

TIÊU ĐỀ: ${title}
NỘI DUNG: ${content}
`;

module.exports = {
  newsSummaryPrompt,
  learnFromContentPrompt,
  askAiPrompt,
  flashcardGenerationPrompt,
  knowledgeMapPrompt,
  reviewQuestionPrompt
};
