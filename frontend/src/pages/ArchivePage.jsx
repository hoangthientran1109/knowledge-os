import { useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';
import api from '../api';
import { Search, Filter, Trash2, Eye, RefreshCw, Star, Edit3, ChevronDown, ChevronUp, X } from 'lucide-react';

const CATEGORIES = ['', 'Economics', 'Invest - Trading', 'Marketing', 'Health', 'Mindset'];
const SOURCE_TYPES = ['', 'article', 'youtube', 'raw_text', 'ai_question', 'news'];

export default function ArchivePage() {
  const nav = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [sourceType, setSourceType] = useState(searchParams.get('sourceType') || '');
  const [sort, setSort] = useState('newest');
  const [favorite, setFavorite] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const params = { search, category, sourceType, sort };
      if (favorite) params.favorite = 'true';
      const data = await api.archive.list(params);
      setItems(data);
    } catch (e) {
      toast.error('Không tải được kho lưu trữ');
    } finally {
      setLoading(false);
    }
  }, [search, category, sourceType, sort, favorite]);

  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    const p = {};
    if (search) p.search = search;
    if (category) p.category = category;
    if (sourceType) p.sourceType = sourceType;
    setSearchParams(p, { replace: true });
  }, [search, category, sourceType]);

  async function handleDelete(id) {
    if (!confirm('Xóa mục này?')) return;
    try {
      await api.archive.delete(id);
      setItems(prev => prev.filter(i => i.id !== id));
      toast.success('Đã xóa');
    } catch (e) {
      toast.error(e.message);
    }
  }

  async function toggleFavorite(item) {
    try {
      await api.archive.update(item.id, { favorite: !item.favorite });
      setItems(prev => prev.map(i => i.id === item.id ? { ...i, favorite: !i.favorite } : i));
    } catch (e) {
      toast.error(e.message);
    }
  }

  const SOURCE_LABELS = { article: 'Bài viết', youtube: 'YouTube', raw_text: 'Text', ai_question: 'Hỏi AI', news: 'Tin tức' };
  const CAT_COLORS = {
    Economics: 'bg-emerald-100 text-emerald-700',
    'Invest - Trading': 'bg-blue-100 text-blue-700',
    Marketing: 'bg-purple-100 text-purple-700',
    Health: 'bg-rose-100 text-rose-700',
    Mindset: 'bg-amber-100 text-amber-700'
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kho lưu trữ</h1>
          <p className="text-sm text-gray-500">{items.length} mục đã lưu</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setShowFilters(!showFilters)} className="btn-secondary">
            <Filter size={16} /> {showFilters ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          <button onClick={() => setFavorite(!favorite)} className={favorite ? 'btn-accent' : 'btn-secondary'}>
            <Star size={16} /> {favorite ? 'Yêu thích' : 'Tất cả'}
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="card p-4 mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div>
            <label className="text-xs text-gray-500 block mb-1">Danh mục</label>
            <select value={category} onChange={e => setCategory(e.target.value)} className="select text-sm">
              <option value="">Tất cả</option>
              {CATEGORIES.filter(Boolean).map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Loại nguồn</label>
            <select value={sourceType} onChange={e => setSourceType(e.target.value)} className="select text-sm">
              <option value="">Tất cả</option>
              {SOURCE_TYPES.filter(Boolean).map(s => <option key={s} value={s}>{SOURCE_LABELS[s]}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">Sắp xếp</label>
            <select value={sort} onChange={e => setSort(e.target.value)} className="select text-sm">
              <option value="newest">Mới nhất</option>
              <option value="oldest">Cũ nhất</option>
            </select>
          </div>
          <div className="flex items-end">
            <button onClick={() => { setSearch(''); setCategory(''); setSourceType(''); setFavorite(false); }} className="btn-secondary text-xs w-full">
              <X size={14} /> Xóa bộ lọc
            </button>
          </div>
        </div>
      )}

      <div className="relative mb-4">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="  Tìm kiếm theo tiêu đề, nội dung, tags..."
          className="input"
          style={{ paddingLeft: '2.5rem' }}
        />
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-500">Đang tải...</div>
      ) : items.length === 0 ? (
        <div className="text-center py-20">
          <Archive className="mx-auto text-gray-300 mb-4" size={48} />
          <p className="text-gray-500">Chưa có mục nào trong kho lưu trữ</p>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map(item => (
            <div key={item.id} className="card p-4 hover:border-gray-300">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <button onClick={() => toggleFavorite(item)}>
                      <Star size={14} className={item.favorite ? 'fill-amber-400 text-amber-400' : 'text-gray-300 hover:text-amber-400'} />
                    </button>
                    <span className={`badge ${CAT_COLORS[item.category] || 'bg-gray-100 text-gray-600'}`}>
                      {item.category}
                    </span>
                    <span className="badge bg-gray-100 text-gray-500">{SOURCE_LABELS[item.sourceType] || item.sourceType}</span>
                    {Array.isArray(item.tags) && item.tags.map((t, i) => (
                      <span key={i} className="badge bg-gray-50 text-gray-400 text-xs">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(item.createdAt).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
                <div className="flex gap-1.5 shrink-0">
                  <button onClick={() => nav(`/archive/${item.id}`)} className="btn-secondary text-xs px-2 py-1">
                    <Eye size={14} /> Xem
                  </button>
                  <button onClick={() => nav(`/review?item=${item.id}`)} className="btn-accent text-xs px-2 py-1">
                    <RefreshCw size={14} /> Ôn
                  </button>
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

function Archive(props) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4"/></svg>; }
