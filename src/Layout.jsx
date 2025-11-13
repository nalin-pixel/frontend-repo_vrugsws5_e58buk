import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 selection:bg-neutral-300/40 selection:text-neutral-900 transition-colors">
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-neutral-900/40 border-b border-neutral-200/60 dark:border-neutral-800/60">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-lg bg-neutral-200 dark:bg-neutral-800 shadow-inner" />
            <span className="text-sm tracking-wide font-medium text-neutral-700 dark:text-neutral-300">Private Duo</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
            <NavLink to="/chat" className={({isActive})=>`hover:text-neutral-900 dark:hover:text-neutral-100 ${isActive?'text-neutral-900 dark:text-neutral-100':''}`}>Chat</NavLink>
            <NavLink to="/upload" className={({isActive})=>`hover:text-neutral-900 dark:hover:text-neutral-100 ${isActive?'text-neutral-900 dark:text-neutral-100':''}`}>Snap Upload</NavLink>
            <NavLink to="/viewer" className={({isActive})=>`hover:text-neutral-900 dark:hover:text-neutral-100 ${isActive?'text-neutral-900 dark:text-neutral-100':''}`}>Viewer</NavLink>
            <NavLink to="/gallery" className={({isActive})=>`hover:text-neutral-900 dark:hover:text-neutral-100 ${isActive?'text-neutral-900 dark:text-neutral-100':''}`}>Memory Gallery</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        {children}
      </main>
    </div>
  )
}
