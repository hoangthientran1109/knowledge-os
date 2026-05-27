const BASE = '/api';

async function req(method, path, body) {
  const opts = { method, headers: { 'Content-Type': 'application/json' } };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`${BASE}${path}`, opts);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Lỗi máy chủ');
  return data;
}

const api = {
  news: {
    list: () => req('GET', '/news'),
    generate: () => req('POST', '/news/generate'),
    save: (id) => req('POST', `/news/save/${id}`),
    delete: (id) => req('DELETE', `/news/${id}`)
  },
  learn: {
    fromLink: (url, category) => req('POST', '/learn/from-link', { url, category }),
    fromText: (text, category, sourceType, sourceUrl) => req('POST', '/learn/from-text', { text, category, sourceType, sourceUrl }),
    flashcards: (content, title) => req('POST', '/learn/flashcards', { content, title })
  },
  ask: {
    post: (question, category) => req('POST', '/ask', { question, category })
  },
  archive: {
    list: (params) => {
      const q = new URLSearchParams();
      Object.entries(params || {}).forEach(([k, v]) => { if (v) q.set(k, v); });
      return req('GET', `/archive?${q.toString()}`);
    },
    get: (id) => req('GET', `/archive/${id}`),
    save: (data) => req('POST', '/archive/save', data),
    update: (id, data) => req('PUT', `/archive/${id}`, data),
    delete: (id) => req('DELETE', `/archive/${id}`)
  },
  review: {
    due: () => req('GET', '/review/due'),
    complete: (id, difficulty) => req('POST', `/review/${id}/complete`, { difficulty })
  },
  settings: {
    get: () => req('GET', '/settings'),
    update: (data) => req('PUT', '/settings', data)
  },
  readingQueue: {
    list: (status) => {
      const q = status ? `?status=${status}` : '';
      return req('GET', `/reading-queue${q}`);
    },
    add: (data) => req('POST', '/reading-queue', data),
    update: (id, data) => req('PUT', `/reading-queue/${id}`, data),
    delete: (id) => req('DELETE', `/reading-queue/${id}`)
  },
  actionTracker: {
    list: (status) => {
      const q = status ? `?status=${status}` : '';
      return req('GET', `/action-tracker${q}`);
    },
    add: (data) => req('POST', '/action-tracker', data),
    update: (id, data) => req('PUT', `/action-tracker/${id}`, data),
    delete: (id) => req('DELETE', `/action-tracker/${id}`)
  },
  dailyReview: {
    list: (date) => {
      const q = date ? `?date=${date}` : '';
      return req('GET', `/daily-review${q}`);
    },
    create: (data) => req('POST', '/daily-review', data),
    delete: (id) => req('DELETE', `/daily-review/${id}`)
  }
};

export default api;
