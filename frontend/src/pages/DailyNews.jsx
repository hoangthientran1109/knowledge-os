import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import api from '../api';
import { Sparkles, Trash2, Bookmark, ExternalLink, Loader2, Calendar, Globe, AlertCircle } from 'lucide-react';

const CAT_COLORS = {
  'Công nghệ': 'bg-blue-100 text-blue-700',
  'AI': 'bg-purple-100 text-purple-700',
  'Kinh tế': 'bg-emerald-100 text-emerald-700',
  'Sức khỏe': 'bg-rose-100 text-rose-700',
  'Chính trị': 'bg-amber-100 text-amber-700'
};

export default function DailyNews() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);

  useEffect(() => { loadItems(); }, []);

  async function loadItems() {
    try {
      const data = await api.news.list();
      setItems(data);
    } catch (e) {
      toast.error('Không tải được tin tức');
    }
  }

  async function generate() {
    setGenerating(true);
    setLoading(true);
    try {
      const result = await api.news.generate();
      toast.success(`Đã tạo ${result.count} tin tức`);
      await loadItems();
    } catch (e) {
      toast.error(e.message);
    } finally {
      setGenerating(false);
      setLoading(false);
    }
  }

  async function saveItem(id) {
    try {
      await api.news.save(id);
      setItems(prev => prev.map(i => i.id === id ? { ...i, saved: true } : i));
      toast.success('Đã lưu tin');
    } catch (e) {
      toast.error(e.message);
    }
  }

  async function deleteItem(id) {
    try {
      await api.news.delete(id);
      setItems(prev => prev.filter(i => i.id !== id));
      toast.success('Đã xóa');
    } catch (e) {
      toast.error(e.message);
    }
  }

  function parseList(str) {
    try { return JSON.parse(str); } catch { return []; }
  }

  if (loading && items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 size={40} className="animate-spin text-primary-600 mb-4" />
        <p className="text-gray-500">Đang tải tin tức...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tin tức hàng ngày</h1>
          <p className="text-sm text-gray-500 mt-1">Tin tức quốc tế được AI tóm tắt bằng tiếng Việt</p>
        </div>
        <button onClick={generate} disabled={generating} className="btn-primary">
          {generating ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
          {generating ? 'Đang tạo...' : 'Tạo tin tức'}
        </button>
      </div>

      {items.length === 0 && !loading && (
        <div className="text-center py-20">
          <Globe size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 mb-4">Chưa có tin tức nào</p>
          <button onClick={generate} className="btn-primary">Tạo tin tức ngay</button>
        </div>
      )}

      <div className="grid gap-4">
        {items.map(item => {
          const summary = parseList(item.summary);
          return (
            <div key={item.id} className="card p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className={`badge ${CAT_COLORS[item.category] || 'bg-gray-100 text-gray-600'}`}>
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Globe size={12} /> {item.sourceName}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar size={12} /> {new Date(item.publishedAt).toLocaleDateString('vi-VN')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>

                  {summary.length > 0 && (
                    <ul className="space-y-1.5 mb-3">
                      {summary.map((s, i) => (
                        <li key={i} className="text-sm text-gray-700 flex gap-2">
                          <span className="text-primary-500 mt-1 shrink-0">&#9679;</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex items-start gap-2 mb-2">
                    <AlertCircle size={14} className="text-amber-500 mt-0.5 shrink-0" />
                    <p className="text-xs text-amber-700">{item.reliabilityNote}</p>
                  </div>

                  {item.whyItMatters && (
                    <p className="text-sm text-gray-600 italic">&#128161; {item.whyItMatters}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                  <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs px-2 py-1">
                    <ExternalLink size={14} /> Gốc
                  </a>
                  {!item.saved && (
                    <button onClick={() => saveItem(item.id)} className="btn-accent text-xs px-2 py-1">
                      <Bookmark size={14} /> Lưu
                    </button>
                  )}
                  <button onClick={() => deleteItem(item.id)} className="btn-danger text-xs px-2 py-1">
                    <Trash2 size={14} /> Xóa
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
