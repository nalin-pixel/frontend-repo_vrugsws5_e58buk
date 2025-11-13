import { Routes, Route, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import Layout from './Layout'
import ChatUI from './components/Chat'
import SnapUpload from './components/SnapUpload'
import SnapViewer from './components/SnapViewer'
import MemoryGallery from './components/MemoryGallery'

const Section = ({ title, subtitle, children }) => (
  <section className="space-y-4">
    <div>
      <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">{title}</h2>
      {subtitle && <p className="text-sm text-neutral-500 dark:text-neutral-400">{subtitle}</p>}
    </div>
    {children}
  </section>
)

function Home() {
  return (
    <div className="space-y-12">
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60" style={{boxShadow:'0 20px 80px rgba(0,0,0,0.10)'}}>
        <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_10%_10%,rgba(255,255,255,0.6),transparent)] dark:bg-[radial-gradient(90%_90%_at_10%_10%,rgba(10,10,10,0.6),transparent)] pointer-events-none" />
        <div className="h-[440px]">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="p-8 md:p-12">
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.05}} className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">Private Duo</motion.h1>
            <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.15}} className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-md">A calm, cinematic place for two. Chat, share snaps, and keep memories — built with developer-grade minimalism.</motion.p>
            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.25}} className="mt-6 flex items-center gap-3">
              <NavLink to="/chat" className="rounded-lg px-4 py-2 text-sm bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90">Open Chat</NavLink>
              <NavLink to="/upload" className="rounded-lg px-4 py-2 text-sm border border-neutral-300/60 dark:border-neutral-700/60 hover:bg-neutral-100/60 dark:hover:bg-neutral-900/40">Upload a Snap</NavLink>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Section title="Two‑person Chat" subtitle="Left/right bubbles, soft shadows, glass background">
          <ChatUI />
        </Section>
        <Section title="Snap Upload" subtitle="Large preview, caption, YouTube field, clean button">
          <SnapUpload />
        </Section>
      </div>

      <Section title="Snap Viewer" subtitle="Fullscreen blurred background with a minimal mini‑player">
        <SnapViewer />
      </Section>

      <Section title="Memory Gallery" subtitle="Masonry grid with subtle hover">
        <MemoryGallery />
      </Section>
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatUI />} />
        <Route path="/upload" element={<SnapUpload />} />
        <Route path="/viewer" element={<SnapViewer />} />
        <Route path="/gallery" element={<MemoryGallery />} />
      </Routes>
    </Layout>
  )
}
