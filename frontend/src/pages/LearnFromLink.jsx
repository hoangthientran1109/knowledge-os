import { useState } from 'react';
import toast from 'react-hot-toast';
import api from '../api';
import { Link, FileText, Youtube, Loader2, Copy, Save, Trash2, BookOpen, Lightbulb, AlertTriangle, HelpCircle, CheckCircle, Target, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = ['Economics', 'Invest - Trading', 'Marketing', 'Health', 'Mindset'];

export default function LearnFromLink() {
  const nav = useNavigate();
  const [mode, setMode] = useState('url');
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Economics');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [manualMode, setManualMode] = useState(false);
  const [manualUrl, setManualUrl] = useState('');
  const [manualSourceType, setManualSourceType] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      if (manualMode) {
        const data = await api.learn.fromText(text, category, manualSourceType, manualUrl);
        setResult(data);
      } else if (mode === 'url') {
        const data = await api.learn.fromLink(url, category);
        if (data.needsManualInput) {
          toast(data.message);
          setManualMode(true);
          setManualUrl(url);
          setManualSourceType(url.includes('youtube') || url.includes('youtu.be') ? 'youtube' : 'article');
          setText('');
        } else {
          setResult(data);
        }
      } else {
        const data = await api.learn.fromText(text, category, 'raw_text', '');
        setResult(data);
      }
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    try {
      await api.archive.save(result);
      toast.success('Đã lưu vào Kho lưu trữ!');
      nav('/archive');
    } catch (e) {
      toast.error(e.message);
    }
  }

  function handleCopy() {
    const keys = Object.keys(result).filter(k => typeof result[k] === 'string' && result[k]);
    const text = keys.map(k => `${k}: ${result[k]}`).join('\n');
    navigator.clipboard.writeText(text);
    toast.success('Đã sao chép!');
  }

  function reset() {
    setResult(null);
    setManualMode(false);
    setText('');
    setUrl('');
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 size={40} className="animate-spin text-primary-600 mb-4" />
        <p className="text-gray-500">AI đang phân tích nội dung...</p>
      </div>
    );
  }

  if (result) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{result.title}</h1>
          <div className="flex gap-2 flex-wrap">
            <button onClick={handleSave} className="btn-primary"><Save size={16} /> Lưu</button>
            <button onClick={handleCopy} className="btn-secondary"><Copy size={16} /> Sao chép</button>
            <button onClick={reset} className="btn-danger"><Trash2 size={16} /> Xóa</button>
          </div>
        </div>

        <div className="space-y-4">
          <Section icon={Target} title="Luận điểm cốt lõi" accent="blue">
            <p className="text-gray-700">{result.coreThesis}</p>
          </Section>

          <Section icon={Lightbulb} title="Nếu chỉ nhớ 1 điều" accent="amber">
            <p className="text-gray-700 font-medium">{result.oneThingToRemember}</p>
          </Section>

          <Section icon={BookOpen} title="Ý chính" accent="emerald">
            <ul className="space-y-1.5">
              {Array.isArray(result.keyPoints) && result.keyPoints.map((p, i) => (
                <li key={i} className="text-sm text-gray-700 flex gap-2">
                  <span className="text-emerald-500 font-bold">{i + 1}.</span> {p}
                </li>
              ))}
            </ul>
          </Section>

          {Array.isArray(result.terms) && result.terms.length > 0 && (
            <Section icon={BookOpen} title="Giải thích thuật ngữ" accent="purple">
              <div className="space-y-2">
                {result.terms.map((t, i) => (
                  <div key={i} className="bg-purple-50 rounded-lg p-3">
                    <span className="font-semibold text-purple-800">{t.term}:</span>
                    <span className="text-purple-700 ml-2">{t.definition}</span>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {Array.isArray(result.examples) && result.examples.length > 0 && (
            <Section icon={Layers} title="Ví dụ thực tế" accent="orange">
              <div className="space-y-2">
                {result.examples.map((e, i) => (
                  <div key={i} className="bg-orange-50 rounded-lg p-3">
                    <span className="font-semibold text-orange-800">{e.context}:</span>
                    <span className="text-orange-700 ml-2">{e.description}</span>
                  </div>
                ))}
              </div>
            </Section>
          )}

          <Section icon={CheckCircle} title="Cách áp dụng" accent="green">
            <p className="text-gray-700">{result.application}</p>
          </Section>

          <Section icon={AlertTriangle} title="Sai lầm thường gặp" accent="red">
            <p className="text-gray-700">{result.mistakes}</p>
          </Section>

          <Section icon={HelpCircle} title="Câu hỏi tự kiểm tra" accent="indigo">
            <ul className="space-y-1.5">
              {Array.isArray(result.selfTestQuestions) && result.selfTestQuestions.map((q, i) => (
                <li key={i} className="text-sm text-gray-700 flex gap-2">
                  <span className="text-indigo-500 font-bold">{i + 1}.</span> {q}
                </li>
              ))}
            </ul>
          </Section>

          {Array.isArray(result.flashcards) && result.flashcards.length > 0 && (
            <Section icon={Layers} title="Flashcards" accent="pink">
              <div className="grid gap-3 md:grid-cols-2">
                {result.flashcards.map((f, i) => (
                  <div key={i} className="bg-pink-50 rounded-lg p-3">
                    <p className="font-semibold text-pink-800 text-sm">Q: {f.question}</p>
                    <p className="text-pink-600 text-sm mt-1">A: {f.answer}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {result.knowledgeMap && (
            <Section icon={Target} title="Kiến thức liên quan" accent="teal">
              <div className="space-y-2">
                {result.knowledgeMap.relatedTopics?.map((t, i) => (
                  <span key={i} className="badge bg-teal-100 text-teal-700 mr-2">{t}</span>
                ))}
                {result.knowledgeMap.nextTopic && (
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Gợi ý học tiếp:</strong> {result.knowledgeMap.nextTopic}
                  </p>
                )}
              </div>
            </Section>
          )}

          <div className="flex justify-end gap-2 pt-4 border-t">
            <button onClick={handleSave} className="btn-primary"><Save size={16} /> Lưu vào kho</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Học từ link</h1>

      {manualMode && (
        <div className="card p-4 mb-4 bg-amber-50 border-amber-200">
          <p className="text-sm text-amber-800 mb-2">
            Không lấy được nội dung tự động. Vui lòng paste transcript hoặc nội dung bài viết vào ô bên dưới.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {!manualMode && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Chọn nguồn</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setMode('url')}
                className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${mode === 'url' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <Link size={18} /> Link bài viết
              </button>
              <button
                type="button"
                onClick={() => setMode('text')}
                className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${mode === 'text' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <FileText size={18} /> Text thủ công
              </button>
            </div>
          </div>
        )}

        {(mode === 'url' || manualMode) && !manualMode && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Dán link</label>
            <input
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="https://... (bài viết hoặc YouTube)"
              className="input"
              required
            />
          </div>
        )}

        {(mode === 'text' || manualMode) && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {manualMode ? 'Paste transcript / nội dung thủ công' : 'Dán nội dung'}
            </label>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Paste nội dung bài viết hoặc transcript tại đây..."
              className="textarea min-h-[200px]"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
          <select value={category} onChange={e => setCategory(e.target.value)} className="select">
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <button type="submit" className="btn-primary w-full">
          <SparklesIcon /> Phân tích với AI
        </button>
      </form>
    </div>
  );
}

function SparklesIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z"/><path d="M18 12l.8 2.2L21 15l-2.2.8L18 18l-.8-2.2L15 15l2.2-.8L18 12z"/></svg>;
}

function Section({ icon: Icon, title, accent, children }) {
  const colors = {
    blue: 'border-l-blue-400 bg-blue-50/50',
    amber: 'border-l-amber-400 bg-amber-50/50',
    emerald: 'border-l-emerald-400 bg-emerald-50/50',
    purple: 'border-l-purple-400 bg-purple-50/50',
    orange: 'border-l-orange-400 bg-orange-50/50',
    green: 'border-l-green-400 bg-green-50/50',
    red: 'border-l-red-400 bg-red-50/50',
    indigo: 'border-l-indigo-400 bg-indigo-50/50',
    pink: 'border-l-pink-400 bg-pink-50/50',
    teal: 'border-l-teal-400 bg-teal-50/50'
  };

  return (
    <div className={`border-l-4 ${colors[accent]} rounded-lg p-4`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon size={18} className={`text-${accent}-600`} />
        <h2 className="font-semibold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
}
