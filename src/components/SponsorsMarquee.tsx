import React from 'react'

const sponsors = [
  'PixelLabs',
  '8BitCo',
  'NeonWave',
  'ArcadeWorks',
  'TurboPlay',
  'MegaPrize',
  'LANForce',
  'CloudArena'
]

const SponsorsMarquee: React.FC = () => {
  return (
    <section className="w-full py-8 px-6 md:px-12 mb-12 md:mb-20">
      <div className="mx-auto max-w-[1400px] rounded-lg border-2 p-6 bg-transparent">
        <h2 className="text-center text-2xl md:text-3xl mb-4" style={{ color: '#ff6b6b', fontFamily: 'var(--font-secondary)' }}>SPONSORS AND PARTNERS</h2>

        <div className="overflow-hidden relative border-2 rounded-md p-2 bg-black/10">
          <div className="marquee whitespace-nowrap will-change-transform">
            {Array.from({ length: 2 }).map((_, loopIndex) => (
              <div key={loopIndex} className="inline-flex items-center space-x-6 px-4">
                {sponsors.map((s) => (
                  <div key={s + loopIndex} className="flex-none w-56 h-24 md:w-72 md:h-28 rounded-sm bg-white/10 border-2 border-white/10 flex items-center justify-center text-center text-base md:text-lg" style={{ color: '#ffe9e9', fontFamily: 'var(--font-primary)' }}>
                    {s}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SponsorsMarquee
