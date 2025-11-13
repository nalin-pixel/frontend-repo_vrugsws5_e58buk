import { useState } from 'react'

export default function SnapViewer() {
  const [photo] = useState({
    url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2000&auto=format&fit=crop',
    caption: 'Evening light, quiet city',
    youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  })

  return (
    <div className="relative h-[75vh] overflow-hidden rounded-2xl">
      <img src={photo.url} alt="bg" className="absolute inset-0 w-full h-full object-cover blur-3xl scale-110 opacity-60" />

      <div className="absolute inset-0 bg-white/30 dark:bg-neutral-950/50 backdrop-blur" />

      <div className="relative h-full grid place-items-center p-6">
        <div className="max-w-xl w-full">
          <div className="rounded-2xl overflow-hidden border border-neutral-200/60 dark:border-neutral-800/60 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl" style={{boxShadow:'0 18px 60px rgba(0,0,0,0.12)'}}>
            <img src={photo.url} alt="snap" className="w-full object-cover max-h-[55vh]" />
            <div className="p-4">
              <p className="text-sm text-neutral-700 dark:text-neutral-300">{photo.caption}</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 mx-auto max-w-xl">
          <div className="rounded-full border border-neutral-200/60 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-4 py-2 text-xs text-neutral-600 dark:text-neutral-300 flex items-center justify-between">
            <div className="truncate">YouTube: {photo.youtube}</div>
            <a href={photo.youtube} target="_blank" className="underline opacity-80 hover:opacity-100">Open</a>
          </div>
        </div>
      </div>
    </div>
  )
}
