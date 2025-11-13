import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SnapUpload() {
  const [caption, setCaption] = useState('')
  const [preview, setPreview] = useState(null)
  const [youtube, setYoutube] = useState('')

  const onFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setPreview(reader.result)
    reader.readAsDataURL(file)
  }

  return (
    <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl p-4 min-h-[360px] flex items-center justify-center"
        style={{ boxShadow: '0 14px 50px rgba(0,0,0,0.08)' }}
      >
        {preview ? (
          <img src={preview} alt="preview" className="max-h-[60vh] rounded-xl object-contain" />
        ) : (
          <label className="w-full h-full grid place-items-center cursor-pointer text-neutral-500 dark:text-neutral-400">
            <input type="file" accept="image/*" className="hidden" onChange={onFile} />
            <div className="text-center">
              <div className="text-sm">Drop a photo here or click to upload</div>
            </div>
          </label>
        )}
      </motion.div>

      <div className="space-y-4">
        <div className="rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-3">
          <label className="block text-xs text-neutral-500 mb-1">Caption</label>
          <input value={caption} onChange={(e)=>setCaption(e.target.value)} placeholder="Add a short caption"
            className="w-full rounded-lg bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/60 dark:border-neutral-800/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700" />
        </div>

        <div className="rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-3">
          <label className="block text-xs text-neutral-500 mb-1">YouTube song</label>
          <input value={youtube} onChange={(e)=>setYoutube(e.target.value)} placeholder="Search a song or paste a link"
            className="w-full rounded-lg bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/60 dark:border-neutral-800/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700" />
        </div>

        <button className="w-full rounded-lg px-4 py-2 text-sm font-medium bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 transition">Upload</button>
      </div>
    </div>
  )
}
