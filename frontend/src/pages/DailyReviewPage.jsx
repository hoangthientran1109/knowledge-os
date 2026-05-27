import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import api from '../api';
import { Calendar, BookOpen, Lightbulb, Target, HelpCircle, ArrowRight, Save, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function DailyReviewPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(false);
  const [today, setToday] = useState(new Date().toISOString().split('T')[0]);
  const [form, setForm] = useState({
    learnedToday: '',
    mostImportantIdea: '',
    actionsApplied: '',
    unclearThings: '',
    nextLearningSuggestion: ''
  });

  useEffect(() => { load(); }, []);

  async function load() {
    setLoading(true);
    try {
      const data = await api.dailyReview.list();
      setReviews(data);
      const todayStr = new Date().toISOString().split('T')[0];
      const todayReview = data.find(r => {
        const d = new Date(r.date);
        return d.toISOString().split('T')[0] === todayStr;
      });
      if (todayReview) {
        setForm({
          learnedToday: todayReview.learnedToday || '',
          mostImportantIdea: todayReview.mostImportantIdea || '',
          actionsApplied: todayReview.actionsApplied || '',
          unclearThings: todayReview.unclearThings || '',
          nextLearningSuggestion: todayReview.nextLearningSuggestion || ''
        });
      }
    } catch (e) {
      toast.error('Không tải được daily review');
    } finally {
      setLoading(false);
    }
  }

  async function handleSave(e) {
    e.preventDefault();
    if (!form.learnedToday.trim() && !form.mostImportantIdea.trim()) {
      toast.error('Điền ít nhất 1 mục');
      return;
    }
    setSaving(true);
    try {
      const dateStr = new Date().toISOString().split('T')[0];
      await api.dailyReview.create({ date: dateStr, ...form });
      toast.success('Đã lưu nhật ký hôm nay!');
      setEditing(false);
      load();
    } catch (e) {
      toast.error(e.message);
    } finally {
      setSaving(false);
    }
  }

  const todayStr = new Date().toISOString().split('T')[0];
  const todayReview = reviews.find(r => new Date(r.date).toISOString().split('T')[0] === todayStr);
  const hasToday = !!todayReview;

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Nhật ký học tập</h1>
          <p className="text-sm text-gray-500">Điểm lại những gì mày học được mỗi ngày</p>
        </div>
        {!hasToday && !editing && (
          <button onClick={() => setEditing(true)} className="btn-primary">
            <Save size={16} /> Viết nhật ký hôm nay
          </button>
        )}
        {hasToday && !editing && (
          <button onClick={() => setEditing(true)} className="btn-secondary">
            <Save size={16} /> Sửa nhật ký hôm nay
          </button>
        )}
      </div>

      {editing && (
        <form onSubmit={handleSave} className="card p-5 mb-6 space-y-4">
          <h2 className="font-semibold text-gray-900">Hôm nay mày học được gì?</h2>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <BookOpen size={16} className="text-blue-600" />
              1. Hôm nay mày học được gì?
            </label>
            <textarea value={form.learnedToday} onChange={e => setForm({ ...form, learnedToday: e.target.value })} placeholder="VD: Học về cách ETF hoạt động, hiểu thêm về Dollar-Cost Averaging..." className="textarea min-h-[80px]" />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Lightbulb size={16} className="text-amber-600" />
              2. Ý nào đáng nhớ nhất?
            </label>
            <textarea value={form.mostImportantIdea} onChange={e => setForm({ ...form, mostImportantIdea: e.target.value })} placeholder="1 ý duy nhất đọng lại trong đầu mày hôm nay" className="textarea min-h-[60px]" />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Target size={16} className="text-green-600" />
              3. Mày đã áp dụng gì?
            </label>
            <textarea value={form.actionsApplied} onChange={e => setForm({ ...form, actionsApplied: e.target.value })} placeholder="VD: Đã mở tài khoản chứng khoán, đã check lại danh mục đầu tư..." className="textarea min-h-[60px]" />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <HelpCircle size={16} className="text-red-600" />
              4. Cái gì chưa hiểu?
            </label>
            <textarea value={form.unclearThings} onChange={e => setForm({ ...form, unclearThings: e.target.value })} placeholder="VD: Chưa rõ bid-ask spread ảnh hưởng thế nào đến ETF..." className="textarea min-h-[60px]" />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <ArrowRight size={16} className="text-purple-600" />
              5. Ngày mai nên học tiếp gì?
            </label>
            <textarea value={form.nextLearningSuggestion} onChange={e => setForm({ ...form, nextLearningSuggestion: e.target.value })} placeholder="VD: Tìm hiểu về index fund vs active fund" className="textarea min-h-[60px]" />
          </div>

          <div className="flex gap-2">
            <button type="submit" disabled={saving} className="btn-primary flex-1">
              {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
              {saving ? 'Đang lưu...' : 'Lưu nhật ký'}
            </button>
            <button type="button" onClick={() => setEditing(false)} className="btn-secondary">Hủy</button>
          </div>
        </form>
      )}

      {!editing && (
        <>
          {hasToday && (
            <div className="card p-5 mb-6 space-y-3">
              <h2 className="font-semibold text-gray-900">Nhật ký hôm nay</h2>
              <Section icon={BookOpen} color="blue" title="Học được">{todayReview.learnedToday}</Section>
              <Section icon={Lightbulb} color="amber" title="Ý đáng nhớ nhất">{todayReview.mostImportantIdea}</Section>
              <Section icon={Target} color="green" title="Đã áp dụng">{todayReview.actionsApplied}</Section>
              <Section icon={HelpCircle} color="red" title="Chưa hiểu">{todayReview.unclearThings}</Section>
              <Section icon={ArrowRight} color="purple" title="Ngày mai học tiếp">{todayReview.nextLearningSuggestion}</Section>
            </div>
          )}

          <h3 className="font-semibold text-gray-900 mb-3">Lịch sử nhật ký</h3>

          {loading ? (
            <div className="text-center py-10"><Loader2 size={24} className="animate-spin mx-auto" /></div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-20">
              <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">Chưa có nhật ký nào</p>
            </div>
          ) : (
            <div className="space-y-3">
              {reviews.filter(r => new Date(r.date).toISOString().split('T')[0] !== todayStr).map(r => {
                const d = new Date(r.date).toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                return (
                  <div key={r.id} className="card p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">{d}</h3>
                    <div className="space-y-2 text-sm">
                      {r.learnedToday && <p className="text-gray-600"><span className="font-medium text-blue-600">Học:</span> {r.learnedToday}</p>}
                      {r.mostImportantIdea && <p className="text-amber-700">&ldquo;{r.mostImportantIdea}&rdquo;</p>}
                      {r.unclearThings && <p className="text-red-600">Chưa hiểu: {r.unclearThings}</p>}
                      {r.nextLearningSuggestion && <p className="text-purple-600">Tiếp theo: {r.nextLearningSuggestion}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function Section({ icon: Icon, color, title, children }) {
  const colors = {
    blue: 'border-l-blue-400 bg-blue-50/50',
    amber: 'border-l-amber-400 bg-amber-50/50',
    green: 'border-l-green-400 bg-green-50/50',
    red: 'border-l-red-400 bg-red-50/50',
    purple: 'border-l-purple-400 bg-purple-50/50'
  };
  if (!children) return null;
  return (
    <div className={`border-l-4 ${colors[color]} rounded-r-lg p-3`}>
      <div className="flex items-center gap-1.5 mb-1">
        <Icon size={14} />
        <span className="text-xs font-medium text-gray-500">{title}</span>
      </div>
      <p className="text-sm text-gray-700">{children}</p>
    </div>
  );
}
