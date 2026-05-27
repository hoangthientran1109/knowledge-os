import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../api';
import { ArrowLeft, Star, Edit3, Trash2, BookOpen, Lightbulb, AlertTriangle, HelpCircle, CheckCircle, Target, Layers, ExternalLink, Loader2 } from 'lucide-react';

export default function ItemDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [editTags, setEditTags] = useState('');

  useEffect(() => { loadItem(); }, [id]);

  async function loadItem() {
    try {
      const data = await api.archive.get(id);
      setItem(data);
      setEditTitle(data.title);
      setEditCategory(data.category);
      setEditTags(Array.isArray(data.tags) ? data.tags.join(', ') : '');
    } catch (e) {
      toast.error('Không tải được chi tiết');
      nav('/archive');
    } finally {
      setLoading(false);
    }
  }

  async function toggleFavorite() {
    try {
      await api.archive.update(id, { favorite: !item.favorite });
      setItem({ ...item, favorite: !item.favorite });
    } catch (e) {
      toast.error(e.message);
    }
  }

  async function handleSaveEdit() {
    try {
      const tags = editTags.split(',').map(t => t.trim()).filter(Boolean);
      await api.archive.update(id, { title: editTitle, category: editCategory, tags });
      setItem({ ...item, title: editTitle, category: editCategory, tags });
      setEditing(false);
      toast.success('Đã cập nhật');
    } catch (e) {
      toast.error(e.message);
    }
  }

  async function handleDelete() {
    if (!confirm('Xóa mục này?')) return;
    try {
      await api.archive.delete(id);
      toast.success('Đã xóa');
      nav('/archive');
    } catch (e) {
      toast.error(e.message);
    }
  }

  const SOURCE_LABELS = { article: 'Bài viết', youtube: 'YouTube', raw_text: 'Text', ai_question: 'Hỏi AI', news: 'Tin tức' };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 size={40} className="animate-spin text-primary-600" />
      </div>
    );
  }

  if (!item) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <button onClick={() => nav('/archive')} className="flex items-center gap-1 text-gray-500 hover:text-gray-700 mb-4 text-sm">
        <ArrowLeft size={16} /> Quay lại kho lưu trữ
      </button>

      {editing ? (
        <div className="card p-4 mb-6 space-y-3">
          <input value={editTitle} onChange={e => setEditTitle(e.target.value)} className="input" placeholder="Tiêu đề" />
          <select value={editCategory} onChange={e => setEditCategory(e.target.value)} className="select">
            <option value="Economics">Economics</option>
            <option value="Invest - Trading">Invest - Trading</option>
            <option value="Marketing">Marketing</option>
            <option value="Health">Health</option>
            <option value="Mindset">Mindset</option>
          </select>
          <input value={editTags} onChange={e => setEditTags(e.target.value)} className="input" placeholder="Tags, cách nhau bởi dấu phẩy" />
          <div className="flex gap-2">
            <button onClick={handleSaveEdit} className="btn-primary">Lưu</button>
            <button onClick={() => setEditing(false)} className="btn-secondary">Hủy</button>
          </div>
        </div>
      ) : (
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <button onClick={toggleFavorite}>
                <Star size={18} className={item.favorite ? 'fill-amber-400 text-amber-400' : 'text-gray-300'} />
              </button>
              <h1 className="text-2xl font-bold text-gray-900">{item.title}</h1>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="badge bg-primary-100 text-primary-700">{item.category}</span>
              <span className="badge bg-gray-100 text-gray-500">{SOURCE_LABELS[item.sourceType] || item.sourceType}</span>
              {new Date(item.createdAt).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setEditing(true)} className="btn-secondary"><Edit3 size={16} /> Sửa</button>
            <button onClick={handleDelete} className="btn-danger"><Trash2 size={16} /> Xóa</button>
          </div>
        </div>
      )}

      {item.sourceUrl && (
        <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-primary-600 hover:underline mb-4">
          <ExternalLink size={14} /> {item.sourceUrl}
        </a>
      )}

      <div className="space-y-4">
        {item.coreThesis && (
          <div className="border-l-4 border-blue-400 bg-blue-50/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target size={18} className="text-blue-600" />
              <h2 className="font-semibold text-gray-900">Luận điểm cốt lõi</h2>
            </div>
            <p className="text-gray-700">{item.coreThesis}</p>
          </div>
        )}

        {item.oneThingToRemember && (
          <div className="border-l-4 border-amber-400 bg-amber-50/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb size={18} className="text-amber-600" />
              <h2 className="font-semibold text-gray-900">Nếu chỉ nhớ 1 điều</h2>
            </div>
            <p className="text-gray-700 font-medium">{item.oneThingToRemember}</p>
          </div>
        )}

        {Array.isArray(item.keyPoints) && item.keyPoints.length > 0 && (
          <div className="border-l-4 border-emerald-400 bg-emerald-50/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen size={18} className="text-emerald-600" />
              <h2 className="font-semibold text-gray-900">Ý chính</h2>
            </div>
            <ul className="space-y-1.5">
              {item.keyPoints.map((p, i) => (
                <li key={i} className="text-sm text-gray-700 flex gap-2">
                  <span className="text-emerald-500 font-bold">{i + 1}.</span> {p}
                </li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(item.examples) && item.examples.length > 0 && (
          <div className="border-l-4 border-orange-400 bg-orange-50/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Layers size={18} className="text-orange-600" />
              <h2 className="font-semibold text-gray-900">Ví dụ thực tế</h2>
            </div>
            <div className="space-y-2">
              {item.examples.map((e, i) => (
                <div key={i} className="bg-orange-100/50 rounded p-2">
                  <strong className="text-orange-800">{e.context}:</strong>
                  <span className="text-orange-700 ml-2">{e.description || e}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {item.application && (
          <div className="border-l-4 border-green-400 bg-green-50/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle size={18} className="text-green-600" />
              <h2 className="font-semibold text-gray-900">Cách áp dụng</h2>
            </div>
            <p className="text-gray-700">{item.application}</p>
          </div>
        )}

        {item.mistakes && (
          <div className="border-l-4 border-red-400 bg-red-50/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={18} className="text-red-600" />
              <h2 className="font-semibold text-gray-900">Sai lầm thường gặp</h2>
            </div>
            <p className="text-gray-700">{item.mistakes}</p>
          </div>
        )}

        {Array.isArray(item.selfTestQuestions) && item.selfTestQuestions.length > 0 && (
          <div className="border-l-4 border-indigo-400 bg-indigo-50/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle size={18} className="text-indigo-600" />
              <h2 className="font-semibold text-gray-900">Câu hỏi tự kiểm tra</h2>
            </div>
            <ul className="space-y-1.5">
              {item.selfTestQuestions.map((q, i) => (
                <li key={i} className="text-sm text-gray-700 flex gap-2">
                  <span className="text-indigo-500 font-bold">{i + 1}.</span> {q}
                </li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(item.flashcards) && item.flashcards.length > 0 && (
          <div className="border-l-4 border-pink-400 bg-pink-50/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Layers size={18} className="text-pink-600" />
              <h2 className="font-semibold text-gray-900">Flashcards ({item.flashcards.length})</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {item.flashcards.map((f, i) => (
                <div key={i} className="bg-white rounded-lg p-3 border border-pink-100">
                  <p className="font-semibold text-pink-800 text-sm">Q: {f.question}</p>
                  <p className="text-pink-600 text-sm mt-1">A: {f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {Array.isArray(item.relatedTopics) && item.relatedTopics.length > 0 && (
          <div className="card p-4">
            <h2 className="font-semibold text-gray-900 mb-2">Bài này liên quan đến:</h2>
            <div className="flex flex-wrap gap-2">
              {item.relatedTopics.map((t, i) => (
                <span key={i} className="badge bg-teal-100 text-teal-700">{t}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
