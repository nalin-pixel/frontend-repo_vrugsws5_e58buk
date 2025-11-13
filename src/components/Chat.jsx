import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const bubbleBase = 'max-w-[70%] rounded-2xl px-4 py-2 text-sm shadow-sm'

function Message({ text, side = 'left', time }) {
  const isRight = side === 'right'
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isRight ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`backdrop-blur border ${bubbleBase} ${
        isRight
          ? 'bg-neutral-900/80 text-neutral-50 border-neutral-800'
          : 'bg-white/70 text-neutral-900 border-neutral-200 dark:bg-neutral-900/50 dark:text-neutral-100 dark:border-neutral-800'
      }`}
        style={{ boxShadow: '0 4px 18px rgba(0,0,0,0.06)' }}
      >
        <p className="leading-relaxed">{text}</p>
        {time && (
          <span className="mt-1 block text-[10px] opacity-60">{time}</span>
        )}
      </div>
    </motion.div>
  )
}

export default function ChatUI() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome to your private space.', side: 'left', time: '10:01' },
    { id: 2, text: "Feels calm and minimal — just us.", side: 'right', time: '10:02' },
  ])
  const [input, setInput] = useState('')
  const listRef = useRef(null)

  const send = () => {
    if (!input.trim()) return
    const next = { id: Date.now(), text: input.trim(), side: messages.length % 2 ? 'left' : 'right', time: 'now' }
    setMessages([...messages, next])
    setInput('')
    setTimeout(() => listRef.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth' }), 0)
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50/50 dark:bg-neutral-950/50" style={{boxShadow:'0 10px 40px rgba(0,0,0,0.06)'}}>
      {/* Glass background */}
      <div className="absolute inset-0 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl" />

      <div className="relative grid grid-rows-[1fr_auto] h-[70vh]">
        <div ref={listRef} className="p-4 space-y-3 overflow-y-auto">
          {messages.map(m => (
            <Message key={m.id} text={m.text} side={m.side} time={m.time} />
          ))}
        </div>

        <div className="p-3 border-t border-neutral-200/60 dark:border-neutral-800/60 bg-white/50 dark:bg-neutral-900/50 backdrop-blur">
          <div className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              onKeyDown={(e)=> e.key==='Enter' && send()}
              placeholder="Write a message…"
              className="flex-1 rounded-lg bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/60 dark:border-neutral-800/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700"
            />
            <button onClick={send} className="rounded-lg px-3 py-2 text-sm bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 transition">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
