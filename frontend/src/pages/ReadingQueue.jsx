import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Plus, Play, Check, Trash2, ExternalLink, Loader2, Clock, Eye, EyeOff } from 'lucide-react';

const CATEGORIES = ['Economics', 'Invest - Trading', 'Marketing', 'Health', 'Mindset', 'Daily'];

export default function ReadingQueue() {
  const nav = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Economics');
  const [newSourceType, setNewSourceType] = useState('article');
  const [newNote, setNewNote] = useState('');
  const [filterStatus, setFilterStatus] = useState('unread');

  useEffect(() => { load(); }, [filterStatus]);

  async function load() {
    setLoading(true);
    try {
      const data = await api.readingQueue.list(filterStatus || undefined);
      setItems(data);
    } catch (e) {
      toast.error('Không tải được danh sách đọc');
    } finally {
      setLoading(false);
    }
  }

  async function handleAdd(e) {
    e.preventDefault();
    if (!newUrl.trim()) return;
    try {
      await api.readingQueue.add({
        title: newTitle || newUrl,
        url: newUrl,
        category: newCategory,
        sourceType: newSourceType,
        note: newNote
      });
      setNewUrl(''); setNewTitle(''); setNewNote('');
      setAdding(false);
      toast.success('Đã thêm vào danh sách đọc');
      load();
    } catch (e) {
      toast.error(e.message);
    }
  }

  async function startLearning(item) {
    try {
      await api.readingQueue.update(item.id, { status: 'in_progress' });
      nav(`/learn?url=${encodeURIComponent(item.url)}&category=${item.category}`);
    } catch (e) {
      toast.error(e.message);
    }
  }

  async function markDone(id) {
    try {
      await api.readingQueue.update(id, { status: 'completed' });
      load();
      toast.success('Đã đánh dấu hoàn thành');
    } catch (e) {
      toast.error(e.message);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Xóa mục này?')) return;
    try {
      await api.readingQueue.delete(id);
      load();
      toast.success('Đã xóa');
    } catch (e) {
      toast.error(e.message);
    }
  }

  const statusColors = {
    unread: 'bg-gray-100 text-gray-600',
    in_progress: 'bg-blue-100 text-blue-700',
    completed: 'bg-green-100 text-green-700'
  };
  const statusLabels = { unread: 'Chưa đọc', in_progress: 'Đang học', completed: 'Đã xong' };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Danh sách đọc</h1>
          <p className="text-sm text-gray-500">{items.length} mục</p>
        </div>
        <button onClick={() => setAdding(!adding)} className="btn-primary">
          <Plus size={16} /> Thêm link
        </button>
      </div>

      {adding && (
        <form onSubmit={handleAdd} className="card p-4 mb-4 space-y-3">
          <input value={newUrl} onChange={e => setNewUrl(e.target.value)} placeholder="Dán link bài viết / YouTube..." className="input" required />
          <input value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="Tiêu đề (tự động lấy từ link nếu để trống)" className="input" />
          <div className="flex gap-2">
            <select value={newCategory} onChange={e => setNewCategory(e.target.value)} className="select flex-1">
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={newSourceType} onChange={e => setNewSourceType(e.target.value)} className="select flex-1">
              <option value="article">Bài viết</option>
              <option value="youtube">YouTube</option>
            </select>
          </div>
          <input value={newNote} onChange={e => setNewNote(e.target.value)} placeholder="Ghi chú (tùy chọn)" className="input" />
          <div className="flex gap-2">
            <button type="submit" className="btn-primary flex-1">Thêm</button>
            <button type="button" onClick={() => setAdding(false)} className="btn-secondary">Hủy</button>
          </div>
        </form>
      )}

      <div className="flex gap-2 mb-4">
        {[
          { key: 'unread', label: 'Chưa đọc' },
          { key: 'in_progress', label: 'Đang học' },
          { key: 'completed', label: 'Đã xong' }
        ].map(t => (
          <button key={t.key} onClick={() => setFilterStatus(t.key)} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${filterStatus === t.key ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {t.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-500"><Loader2 size={24} className="animate-spin mx-auto mb-2" /> Đang tải...</div>
      ) : items.length === 0 ? (
        <div className="text-center py-20">
          <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">Chưa có mục nào</p>
          <button onClick={() => setAdding(true)} className="btn-primary mt-3">Thêm link đầu tiên</button>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map(item => (
            <div key={item.id} className="card p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`badge ${statusColors[item.status]}`}>{statusLabels[item.status]}</span>
                    <span className="badge bg-gray-100 text-gray-500">{item.sourceType === 'youtube' ? 'YouTube' : 'Bài viết'}</span>
                    <span className="badge bg-primary-100 text-primary-700">{item.category}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
                  {item.url && (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary-500 hover:underline flex items-center gap-1 mt-1">
                      <ExternalLink size={12} /> {new URL(item.url).hostname}
                    </a>
                  )}
                  {item.note && <p className="text-xs text-gray-400 mt-1">{item.note}</p>}
                  <p className="text-xs text-gray-400 mt-1">Thêm {new Date(item.addedAt).toLocaleDateString('vi-VN')}</p>
                </div>
                <div className="flex gap-1.5 shrink-0">
                  {item.status === 'unread' && (
                    <button onClick={() => startLearning(item)} className="btn-primary text-xs px-2 py-1">
                      <Play size={14} /> Học
                    </button>
                  )}
                  {item.status === 'in_progress' && (
                    <button onClick={() => markDone(item.id)} className="btn-accent text-xs px-2 py-1">
                      <Check size={14} /> Xong
                    </button>
                  )}
                  <button onClick={() => handleDelete(item.id)} className="btn-danger text-xs px-2 py-1">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
