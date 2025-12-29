import React from 'react'

const items = [
  { seed: 'g1', alt: 'Main stage', layout: 'md:col-span-4 md:row-span-2' },
  { seed: 'g2', alt: 'Crowd closeup', layout: 'md:col-span-2 md:row-span-1' },
  { seed: 'g3', alt: 'Winner podium', layout: 'md:col-span-2 md:row-span-1' },
  { seed: 'g4', alt: 'Backstage', layout: 'md:col-span-3 md:row-span-1' },
  { seed: 'g5', alt: 'Cosplay', layout: 'md:col-span-3 md:row-span-1' },
  { seed: 'g6', alt: 'Competitor action', layout: 'md:col-span-2 md:row-span-1' },
  { seed: 'g7', alt: 'Audience', layout: 'md:col-span-2 md:row-span-1' },
  { seed: 'g8', alt: 'Lights', layout: 'md:col-span-2 md:row-span-1' },
]

const GalleryBento: React.FC = () => {
  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl mb-8" style={{ color: '#ff4d4d', fontFamily: 'var(--font-secondary)' }}>
          GALLERY
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4" style={{ gridAutoRows: '160px' }}>
          {items.map((it, idx) => (
            <div key={it.seed} className={`rounded-lg overflow-hidden border-2 ${it.layout}`}>
              <img
                src={`https://picsum.photos/seed/${it.seed}/1200/800`}
                alt={it.alt}
                className="w-full h-full object-cover transform-gpu transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GalleryBento
