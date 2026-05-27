import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import api from '../api';
import { Save, Key, Settings, Loader2 } from 'lucide-react';

const TOPICS = ['Công nghệ', 'AI', 'Kinh tế', 'Chính trị'];
const CATEGORIES = ['Economics', 'Invest - Trading', 'Marketing', 'Health', 'Mindset'];

export default function SettingsPage() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [aiKey, setAiKey] = useState('');
  const [showKey, setShowKey] = useState(false);

  useEffect(() => { loadSettings(); }, []);

  async function loadSettings() {
    try {
      const data = await api.settings.get();
      setSettings(data);
      setAiKey(data.aiApiKey || (data.aiBaseUrl?.includes('ollama') ? 'ollama' : ''));
    } catch (e) {
      toast.error('Không tải được cài đặt');
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    setSaving(true);
    try {
      const payload = { ...settings };
      delete payload.aiApiKey;
      payload.aiApiKey = aiKey;
      if (typeof payload.preferredTopics === 'string') payload.preferredTopics = JSON.parse(payload.preferredTopics || '[]');
      if (typeof payload.preferredCategories === 'string') payload.preferredCategories = JSON.parse(payload.preferredCategories || '[]');
      payload.aiBaseUrl = settings.aiBaseUrl || '';
      payload.aiModel = settings.aiModel || 'gpt-4o-mini';
      await api.settings.update(payload);
      toast.success('Đã lưu cài đặt');
    } catch (e) {
      toast.error(e.message);
    } finally {
      setSaving(false);
    }
  }

  function toggleTopic(topic) {
    const current = Array.isArray(settings.preferredTopics) ? [...settings.preferredTopics] : [];
    const idx = current.indexOf(topic);
    if (idx >= 0) current.splice(idx, 1);
    else current.push(topic);
    setSettings({ ...settings, preferredTopics: current });
  }

  function toggleCategory(cat) {
    const current = Array.isArray(settings.preferredCategories) ? [...settings.preferredCategories] : [];
    const idx = current.indexOf(cat);
    if (idx >= 0) current.splice(idx, 1);
    else current.push(cat);
    setSettings({ ...settings, preferredCategories: current });
  }

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 size={40} className="animate-spin text-primary-600" />
      </div>
    );
  }

  if (!settings) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Cài đặt</h1>

      <div className="space-y-6">
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-4">
            <Key size={18} className="text-primary-600" />
            <h2 className="font-semibold text-gray-900">API Keys</h2>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">AI Provider</label>
              <select
                value={settings.aiBaseUrl?.includes('ollama') ? 'ollama' : settings.aiBaseUrl ? 'custom' : 'openai'}
                onChange={e => {
                  if (e.target.value === 'ollama') {
                    setSettings({ ...settings, aiBaseUrl: 'http://localhost:11434/v1', aiModel: 'llama3' });
                    setAiKey('ollama');
                  } else if (e.target.value === 'openai') {
                    setSettings({ ...settings, aiBaseUrl: '', aiModel: 'gpt-4o-mini' });
                  } else {
                    setSettings({ ...settings, aiBaseUrl: '' });
                  }
                }}
                className="select mb-2"
              >
                <option value="openai">OpenAI / itera102</option>
                <option value="ollama">Ollama (local)</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                {settings.aiBaseUrl?.includes('ollama') ? 'Ollama Base URL' : 'AI Base URL'}
              </label>
              <input
                value={settings.aiBaseUrl || ''}
                onChange={e => setSettings({ ...settings, aiBaseUrl: e.target.value })}
                placeholder="http://localhost:11434/v1"
                className="input"
              />
              <p className="text-xs text-gray-400 mt-1">
                {settings.aiBaseUrl?.includes('ollama') ? 'Ollama mặc định: http://localhost:11434/v1' : 'Để trống nếu dùng OpenAI'}
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Model</label>
              <input
                value={settings.aiModel || ''}
                onChange={e => setSettings({ ...settings, aiModel: e.target.value })}
                placeholder={settings.aiBaseUrl?.includes('ollama') ? 'llama3, gemma, mistral...' : 'gpt-4o-mini'}
                className="input"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">AI API Key</label>
              <div className="relative">
                <input
                  value={aiKey}
                  onChange={e => setAiKey(e.target.value)}
                  type={showKey ? 'text' : 'password'}
                  placeholder={settings.aiBaseUrl?.includes('ollama') ? 'ollama (key bất kỳ)' : 'sk-...'}
                  className="input pr-16"
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                >
                  {showKey ? 'Ẩn' : 'Hiện'}
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                {settings.aiBaseUrl?.includes('ollama') ? 'Ollama không cần key thật, nhập "ollama" là được' : 'OpenAI-compatible API key'}
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">News API Key (tùy chọn)</label>
              <input
                value={settings.newsApiKey || ''}
                onChange={e => setSettings({ ...settings, newsApiKey: e.target.value })}
                type="password"
                placeholder="Không bắt buộc - RSS sẽ được dùng mặc định"
                className="input"
              />
            </div>
          </div>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-2 mb-4">
            <Settings size={18} className="text-primary-600" />
            <h2 className="font-semibold text-gray-900">Chủ đề tin tức ưu tiên</h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {TOPICS.map(t => {
              const selected = (settings.preferredTopics || []).includes(t);
              return (
                <button
                  key={t}
                  onClick={() => toggleTopic(t)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selected ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.includePolitics}
                onChange={e => setSettings({ ...settings, includePolitics: e.target.checked })}
                className="w-4 h-4 text-primary-600 rounded"
              />
              <span className="text-sm text-gray-700">Bao gồm Chính trị</span>
            </label>
          </div>
        </div>

        <div className="card p-5">
          <h2 className="font-semibold text-gray-900 mb-4">Danh mục học tập</h2>
          <div className="flex flex-wrap gap-2 mb-3">
            {CATEGORIES.map(c => {
              const selected = (settings.preferredCategories || []).includes(c);
              return (
                <button
                  key={c}
                  onClick={() => toggleCategory(c)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selected ? 'bg-accent-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        <div className="card p-5">
          <h2 className="font-semibold text-gray-900 mb-4">Cấu hình khác</h2>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Số lượng tin tức mỗi ngày</label>
              <input
                type="number"
                min="5"
                max="30"
                value={settings.dailyNewsCount}
                onChange={e => setSettings({ ...settings, dailyNewsCount: parseInt(e.target.value) || 10 })}
                className="input w-24"
              />
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.autoFlashcards}
                onChange={e => setSettings({ ...settings, autoFlashcards: e.target.checked })}
                className="w-4 h-4 text-primary-600 rounded"
              />
              <span className="text-sm text-gray-700">Tự động tạo flashcards khi lưu bài học</span>
            </label>
          </div>
        </div>

        <button onClick={handleSave} disabled={saving} className="btn-primary w-full">
          {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
          {saving ? 'Đang lưu...' : 'Lưu cài đặt'}
        </button>
      </div>
    </div>
  );
}
