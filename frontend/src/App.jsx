import { useState } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Newspaper, Link, MessageCircle, Archive, RefreshCw, Settings, Brain, BookOpen, Target, CalendarDays, Menu, X } from 'lucide-react';
import DailyNews from './pages/DailyNews';
import LearnFromLink from './pages/LearnFromLink';
import AskAI from './pages/AskAI';
import ArchivePage from './pages/ArchivePage';
import ReviewPage from './pages/ReviewPage';
import SettingsPage from './pages/SettingsPage';
import ItemDetail from './pages/ItemDetail';
import ReadingQueue from './pages/ReadingQueue';
import ActionTracker from './pages/ActionTracker';
import DailyReviewPage from './pages/DailyReviewPage';

const mainNav = [
  { to: '/', label: 'Tin tức', icon: Newspaper },
  { to: '/learn', label: 'Học từ link', icon: Link },
  { to: '/ask', label: 'Hỏi AI', icon: MessageCircle },
  { to: '/archive', label: 'Kho lưu trữ', icon: Archive },
  { to: '/review', label: 'Ôn tập', icon: RefreshCw },
];

const toolNav = [
  { to: '/reading-queue', label: 'DS Đọc', icon: BookOpen },
  { to: '/action-tracker', label: 'Action', icon: Target },
  { to: '/daily-review', label: 'Nhật ký', icon: CalendarDays },
];

const allNav = [...mainNav, ...toolNav, { to: '/settings', label: 'Cài đặt', icon: Settings }];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 pb-16 lg:pb-0">
      <Toaster position="top-right" />

      {/* Top navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <NavLink to="/" className="flex items-center gap-2 text-primary-700 font-bold text-lg shrink-0">
              <Brain size={24} /> Knowledge OS
            </NavLink>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              <div className="flex items-center gap-1 border-r border-gray-200 pr-2 mr-2">
                {mainNav.map(({ to, label, icon: Icon }) => (
                  <NavLink key={to} to={to} className={({ isActive }) =>
                    `flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}>
                    <Icon size={15} /><span>{label}</span>
                  </NavLink>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {toolNav.map(({ to, label, icon: Icon }) => (
                  <NavLink key={to} to={to} className={({ isActive }) =>
                    `flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-accent-50 text-accent-700' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}>
                    <Icon size={15} /><span>{label}</span>
                  </NavLink>
                ))}
                <NavLink to="/settings" className={({ isActive }) =>
                  `flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-green-50 text-green-700' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}>
                  <Settings size={15} /><span>Cài đặt</span>
                </NavLink>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-primary-700">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="p-1 hover:bg-gray-100 rounded">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              <p className="text-xs text-gray-400 px-2 py-1 font-medium">HỌC TẬP</p>
              {mainNav.map(({ to, label, icon: Icon }) => (
                <NavLink key={to} to={to} onClick={() => setMobileOpen(false)} className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                  <Icon size={18} /> {label}
                </NavLink>
              ))}
              <p className="text-xs text-gray-400 px-2 py-2 font-medium mt-2">CÔNG CỤ</p>
              {toolNav.map(({ to, label, icon: Icon }) => (
                <NavLink key={to} to={to} onClick={() => setMobileOpen(false)} className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${isActive ? 'bg-accent-50 text-accent-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                  <Icon size={18} /> {label}
                </NavLink>
              ))}
              <NavLink to="/settings" onClick={() => setMobileOpen(false)} className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${isActive ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                <Settings size={18} /> Cài đặt
              </NavLink>
            </div>
          </div>
        </div>
      )}

      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-40">
        <div className="flex items-center justify-around h-14 max-w-lg mx-auto">
          {mainNav.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 py-1 px-2 min-w-0 text-xs font-medium ${isActive ? 'text-primary-600' : 'text-gray-400'}`}>
              <Icon size={20} /> {label}
            </NavLink>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<DailyNews />} />
          <Route path="/learn" element={<LearnFromLink />} />
          <Route path="/ask" element={<AskAI />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/archive/:id" element={<ItemDetail />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/reading-queue" element={<ReadingQueue />} />
          <Route path="/action-tracker" element={<ActionTracker />} />
          <Route path="/daily-review" element={<DailyReviewPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  );
}
