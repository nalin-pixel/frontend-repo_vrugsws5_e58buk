import { useMemo } from 'react'

const sample = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  url: `https://picsum.photos/seed/${i+10}/800/600`,
  w: i % 3 === 0 ? 'col-span-2' : 'col-span-1',
  h: i % 4 === 0 ? 'row-span-2' : 'row-span-1',
}))

export default function MemoryGallery() {
  const items = useMemo(() => sample, [])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[8rem] gap-3">
      {items.map((it) => (
        <a key={it.id} href="#"
           className={`group relative overflow-hidden rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/40 dark:bg-neutral-900/40 backdrop-blur ${it.w} ${it.h}`}
           style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.06)' }}
        >
          <img src={it.url} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      ))}
    </div>
  )
}
