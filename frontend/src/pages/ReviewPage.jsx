import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import api from '../api';
import { Loader2, CheckCircle, Clock, Calendar, ChevronDown, ChevronUp, ThumbsUp, ThumbsDown, Minus, Eye, EyeOff } from 'lucide-react';

export default function ReviewPage() {
  const [data, setData] = useState({ due: [], upcoming: [], completed: [] });
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('due');
  const [reviewing, setReviewing] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [revealed, setRevealed] = useState(false);

  useEffect(() => { loadReviews(); }, []);

  async function loadReviews() {
    setLoading(true);
    try {
      const result = await api.review.due();
      setData(result);
    } catch (e) {
      toast.error('Không tải được dữ liệu ôn tập');
    } finally {
      setLoading(false);
    }
  }

  function startReview(item) {
    setReviewing(item);
    setUserAnswer('');
    setRevealed(false);
  }

  async function completeReview(difficulty) {
    try {
      await api.review.complete(reviewing.id, difficulty);
      toast.success('Đã hoàn thành ôn tập!');
      setReviewing(null);
      await loadReviews();
    } catch (e) {
      toast.error(e.message);
    }
  }

  if (reviewing) {
    const ki = reviewing.knowledgeItem;
    return (
      <div className="max-w-2xl mx-auto">
        <button onClick={() => setReviewing(null)} className="text-sm text-gray-500 hover:text-gray-700 mb-4">&larr; Quay lại</button>

        <div className="card p-6 mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Ôn tập: {ki.title}</h2>

          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">Gợi ý: {ki.oneThingToRemember || ki.coreThesis || 'Hãy nhớ lại nội dung đã học'}</p>
            <textarea
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              placeholder="Viết những gì bạn nhớ về chủ đề này..."
              className="textarea min-h-[120px]"
            />
          </div>

          {!revealed ? (
            <button onClick={() => setRevealed(true)} className="btn-primary">
              <Eye size={16} /> Xem đáp án
            </button>
          ) : (
            <div className="space-y-4">
              <div className="bg-emerald-50 rounded-lg p-4">
                <h3 className="font-semibold text-emerald-800 mb-2">Đáp án AI</h3>
                {ki.coreThesis && <p className="text-sm text-gray-700 mb-2"><strong>Luận điểm:</strong> {ki.coreThesis}</p>}
                {ki.application && <p className="text-sm text-gray-700 mb-2"><strong>Cách áp dụng:</strong> {ki.application}</p>}
                {Array.isArray(ki.keyPoints) && ki.keyPoints.length > 0 && (
                  <div className="mt-2">
                    <strong className="text-sm text-gray-800">Ý chính:</strong>
                    <ul className="mt-1 space-y-1">
                      {ki.keyPoints.slice(0, 5).map((p, i) => (
                        <li key={i} className="text-sm text-gray-600">&bull; {p}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-500">Bạn thấy câu hỏi này như thế nào?</p>
              <div className="flex gap-2">
                <button onClick={() => completeReview('hard')} className="btn-danger flex-1">
                  <ThumbsDown size={16} /> Khó
                </button>
                <button onClick={() => completeReview('medium')} className="btn-secondary flex-1">
                  <Minus size={16} /> Vừa
                </button>
                <button onClick={() => completeReview('easy')} className="btn-primary flex-1">
                  <ThumbsUp size={16} /> Dễ
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 size={40} className="animate-spin text-primary-600" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Ôn tập</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { key: 'due', label: `Đến hạn (${data.due.length})`, icon: Clock },
          { key: 'upcoming', label: `Sắp tới (${data.upcoming.length})`, icon: Calendar },
          { key: 'completed', label: `Đã xong (${data.completed.length})`, icon: CheckCircle }
        ].map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              tab === t.key ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <t.icon size={16} /> {t.label}
          </button>
        ))}
      </div>

      {(data[tab] || []).length === 0 ? (
        <div className="text-center py-20">
          <CheckCircle size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">
            {tab === 'due' ? 'Không có bài ôn tập nào đến hạn!' : tab === 'upcoming' ? 'Không có bài sắp tới' : 'Chưa có bài nào hoàn thành'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {(data[tab] || []).map(item => (
            <div key={item.id} className="card p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">{item.knowledgeItem?.title}</h3>
                    {item.round && (
                      <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">
                        Lần {item.round}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    {tab === 'due' && 'Đến hạn: '}
                    {tab === 'upcoming' && 'Sẽ đến hạn: '}
                    {tab === 'completed' && 'Hoàn thành: '}
                    {tab === 'completed'
                      ? new Date(item.completedAt).toLocaleDateString('vi-VN')
                      : new Date(item.dueDate).toLocaleDateString('vi-VN')}
                    {item.difficulty && ` - Độ khó: ${item.difficulty === 'hard' ? 'Khó' : item.difficulty === 'easy' ? 'Dễ' : 'Vừa'}`}
                  </p>
                  {item.knowledgeItem?.oneThingToRemember && (
                    <p className="text-xs text-gray-500 mt-1 truncate">{item.knowledgeItem.oneThingToRemember}</p>
                  )}
                </div>
                {tab === 'due' && (
                  <button onClick={() => startReview(item)} className="btn-primary text-xs px-3 py-1.5">
                    Ôn tập ngay
                  </button>
                )}
                {tab === 'completed' && (
                  <span className={`badge ${
                    item.difficulty === 'hard' ? 'bg-red-100 text-red-600' :
                    item.difficulty === 'easy' ? 'bg-green-100 text-green-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {item.difficulty === 'hard' ? 'Khó' : item.difficulty === 'easy' ? 'Dễ' : 'Vừa'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
