import { useState } from 'react';
import toast from 'react-hot-toast';
import api from '../api';
import { Loader2, Send, Save, BookOpen, Lightbulb, Layers, Target, HelpCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = ['Economics', 'Invest - Trading', 'Marketing', 'Health', 'Mindset', 'Daily'];

export default function AskAI() {
  const nav = useNavigate();
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('Daily');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await api.ask.post(question, category);
      setResult(data);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    try {
      await api.archive.save({
        title: result.question || question,
        category: result.category || category,
        sourceType: 'ai_question',
        sourceUrl: '',
        originalText: question,
        coreThesis: result.explanation || result.concept || '',
        oneThingToRemember: result.concept || '',
        keyPoints: [],
        terms: [],
        examples: [{ context: 'Ví dụ', description: result.example || '' }],
        application: result.application || '',
        mistakes: '',
        selfTestQuestions: result.selfTestQuestions || [],
        flashcards: [],
        fullAiOutput: result,
        knowledgeMap: {
          relatedTopics: result.nextTopics ? [result.nextTopics] : [],
          relatedItemIds: [],
          nextTopic: result.nextTopics || ''
        }
      });
      toast.success('Đã lưu vào Kho lưu trữ!');
      nav('/archive');
    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Hỏi AI</h1>
      <p className="text-sm text-gray-500 mb-6">Đặt câu hỏi và nhận câu trả lời chi tiết bằng tiếng Việt</p>

      <form onSubmit={handleSubmit} className="card p-4 mb-6">
        <textarea
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Nhập câu hỏi của bạn... (VD: ETF là gì? Cách hoạt động của blockchain?)"
          className="textarea min-h-[100px] mb-3"
          required
        />
        <div className="flex items-center gap-3">
          <select value={category} onChange={e => setCategory(e.target.value)} className="select flex-1">
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            {loading ? 'Đang trả lời...' : 'Gửi'}
          </button>
        </div>
      </form>

      {loading && (
        <div className="flex flex-col items-center py-10">
          <Loader2 size={40} className="animate-spin text-primary-600 mb-4" />
          <p className="text-gray-500">AI đang suy nghĩ...</p>
        </div>
      )}

      {result && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h2 className="text-xl font-semibold text-gray-900">{result.question || question}</h2>
            <button onClick={handleSave} className="btn-primary"><Save size={16} /> Lưu vào kho</button>
          </div>

          <div className="border-l-4 border-blue-400 bg-blue-50/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen size={18} className="text-blue-600" />
              <h3 className="font-semibold text-gray-900">Khái niệm</h3>
            </div>
            <p className="text-gray-700">{result.concept}</p>
          </div>

          <div className="border-l-4 border-emerald-400 bg-emerald-50/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen size={18} className="text-emerald-600" />
              <h3 className="font-semibold text-gray-900">Diễn giải chi tiết</h3>
            </div>
            <p className="text-gray-700">{result.explanation}</p>
          </div>

          <div className="border-l-4 border-orange-400 bg-orange-50/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Layers size={18} className="text-orange-600" />
              <h3 className="font-semibold text-gray-900">Ví dụ thực tế</h3>
            </div>
            <p className="text-gray-700">{result.example}</p>
          </div>

          <div className="border-l-4 border-purple-400 bg-purple-50/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target size={18} className="text-purple-600" />
              <h3 className="font-semibold text-gray-900">Kết nối mở rộng</h3>
            </div>
            <p className="text-gray-700">{result.connections}</p>
          </div>

          <div className="border-l-4 border-green-400 bg-green-50/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb size={18} className="text-green-600" />
              <h3 className="font-semibold text-gray-900">Cách áp dụng</h3>
            </div>
            <p className="text-gray-700">{result.application}</p>
          </div>

          <div className="border-l-4 border-indigo-400 bg-indigo-50/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle size={18} className="text-indigo-600" />
              <h3 className="font-semibold text-gray-900">Câu hỏi tự kiểm tra</h3>
            </div>
            <ul className="space-y-1.5">
              {(result.selfTestQuestions || []).map((q, i) => (
                <li key={i} className="text-sm text-gray-700 flex gap-2">
                  <span className="text-indigo-500 font-bold">{i + 1}.</span> {q}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-l-4 border-teal-400 bg-teal-50/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight size={18} className="text-teal-600" />
              <h3 className="font-semibold text-gray-900">Gợi ý học tiếp</h3>
            </div>
            <p className="text-gray-700">{result.nextTopics}</p>
          </div>

          <div className="flex justify-end pt-4 border-t">
            <button onClick={handleSave} className="btn-primary"><Save size={16} /> Lưu vào kho lưu trữ</button>
          </div>
        </div>
      )}
    </div>
  );
}
