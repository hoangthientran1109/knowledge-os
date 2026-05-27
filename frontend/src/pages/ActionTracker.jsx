import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import api from '../api';
import { Target, Plus, Check, X, SkipForward, Edit3, Loader2, Calendar, Clock, Save } from 'lucide-react';

export default function ActionTracker() {
  const [items, setItems] = useState({ pending: [], done: [], failed: [], skipped: [] });
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('pending');
  const [adding, setAdding] = useState(false);
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Economics');
  const [deadline, setDeadline] = useState('');
  const [reflection, setReflection] = useState({ resultNote: '', lessonLearned: '' });

  useEffect(() => { load(); }, []);

  async function load() {
    setLoading(true);
    try {
      const [all, pending, done, failed, skipped] = await Promise.all([
        api.actionTracker.list(),
        api.actionTracker.list('pending'),
        api.actionTracker.list('done'),
        api.actionTracker.list('failed'),
        api.actionTracker.list('skipped')
      ]);
      setItems({ pending, done, failed, skipped });
    } catch (e) {
      toast.error('Không tải được action tracker');
    } finally {
      setLoading(false);
    }
  }

  async function handleAdd(e) {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      await api.actionTracker.add({ title, category, deadline: deadline || null });
      setTitle(''); setDeadline(''); setAdding(false);
      load();
      toast.success('Đã thêm action');
    } catch (e) { toast.error(e.message); }
  }

  async function markStatus(id, status) {
    try {
      const data = { status };
      if (['done', 'failed', 'skipped'].includes(status)) {
        data.resultNote = reflection.resultNote;
        data.lessonLearned = reflection.lessonLearned;
      }
      await api.actionTracker.update(id, data);
      setEditId(null);
      setReflection({ resultNote: '', lessonLearned: '' });
      load();
      toast.success(status === 'done' ? 'Hoàn thành!' : status === 'failed' ? 'Đã ghi nhận thất bại' : 'Đã bỏ qua');
    } catch (e) { toast.error(e.message); }
  }

  const cards = [
    { key: 'pending', label: `Đang làm (${items.pending.length})`, icon: Clock, color: 'bg-amber-50 border-amber-200', badge: 'bg-amber-100 text-amber-700' },
    { key: 'done', label: `Đã xong (${items.done.length})`, icon: Check, color: 'bg-green-50 border-green-200', badge: 'bg-green-100 text-green-700' },
    { key: 'failed', label: `Thất bại (${items.failed.length})`, icon: X, color: 'bg-red-50 border-red-200', badge: 'bg-red-100 text-red-700' },
    { key: 'skipped', label: `Đã bỏ qua (${items.skipped.length})`, icon: SkipForward, color: 'bg-gray-50 border-gray-200', badge: 'bg-gray-100 text-gray-600' }
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Action Tracker</h1>
          <p className="text-sm text-gray-500">Theo dõi những gì mày sẽ áp dụng từ bài học</p>
        </div>
        <button onClick={() => { setAdding(!adding); setEditId(null); }} className="btn-primary">
          <Plus size={16} /> Action mới
        </button>
      </div>

      {adding && (
        <form onSubmit={handleAdd} className="card p-4 mb-4 space-y-3">
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Tao sẽ áp dụng gì trong 24h tới?" className="input" autoFocus required />
          <div className="grid grid-cols-2 gap-2">
            <select value={category} onChange={e => setCategory(e.target.value)} className="select">
              <option value="Economics">Economics</option>
              <option value="Invest - Trading">Invest - Trading</option>
              <option value="Marketing">Marketing</option>
              <option value="Health">Health</option>
              <option value="Mindset">Mindset</option>
              <option value="Daily">Daily</option>
            </select>
            <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} className="input" />
          </div>
          <div className="flex gap-2">
            <button type="submit" className="btn-primary flex-1">Thêm</button>
            <button type="button" onClick={() => setAdding(false)} className="btn-secondary">Hủy</button>
          </div>
        </form>
      )}

      <div className="flex gap-2 mb-4 flex-wrap">
        {cards.map(c => (
          <button key={c.key} onClick={() => setTab(c.key)} className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${tab === c.key ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            <c.icon size={14} /> {c.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-20"><Loader2 size={40} className="animate-spin mx-auto text-primary-600" /></div>
      ) : (items[tab] || []).length === 0 ? (
        <div className="text-center py-20">
          <Target size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">{tab === 'pending' ? 'Không có action nào đang chờ!' : 'Trống'}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {(items[tab] || []).map(item => (
            <div key={item.id} className="card p-4">
              {editId === item.id ? (
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <textarea value={reflection.resultNote} onChange={e => setReflection({ ...reflection, resultNote: e.target.value })} placeholder="Kết quả thế nào?" className="textarea min-h-[80px]" />
                  <textarea value={reflection.lessonLearned} onChange={e => setReflection({ ...reflection, lessonLearned: e.target.value })} placeholder="Mày học được gì?" className="textarea min-h-[60px]" />
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => markStatus(item.id, 'done')} className="btn-primary flex-1 text-xs"><Check size={14} /> Done</button>
                    <button onClick={() => markStatus(item.id, 'failed')} className="btn-danger flex-1 text-xs"><X size={14} /> Failed</button>
                    <button onClick={() => markStatus(item.id, 'skipped')} className="btn-secondary flex-1 text-xs"><SkipForward size={14} /> Skip</button>
                    <button onClick={() => setEditId(null)} className="btn-secondary text-xs">Hủy</button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`badge ${cards.find(c => c.key === item.status)?.badge || 'bg-gray-100 text-gray-600'}`}>
                        {item.status === 'done' ? 'Đã xong' : item.status === 'failed' ? 'Thất bại' : item.status === 'skipped' ? 'Bỏ qua' : 'Đang làm'}
                      </span>
                      {item.category && <span className="badge bg-primary-100 text-primary-700">{item.category}</span>}
                      {item.deadline && <span className="badge bg-gray-100 text-gray-500 flex items-center gap-1"><Calendar size={10} /> {new Date(item.deadline).toLocaleDateString('vi-VN')}</span>}
                    </div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">Tạo {new Date(item.createdAt).toLocaleDateString('vi-VN')}</p>
                    {item.resultNote && <p className="text-sm text-gray-600 mt-2 bg-gray-50 rounded p-2">{item.resultNote}</p>}
                    {item.lessonLearned && <p className="text-sm text-primary-700 mt-1 bg-primary-50 rounded p-2">Bài học: {item.lessonLearned}</p>}
                  </div>
                  {item.status === 'pending' && (
                    <button onClick={() => setEditId(item.id)} className="btn-primary text-xs px-2 py-1">
                      <Edit3 size={14} /> Đánh giá
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
