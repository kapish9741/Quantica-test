import React from 'react'
import { Card } from '@/components/retroui/Card'
import { Button } from '@/components/retroui/Button'

const tournaments = [
  { id: 'damru25', title: "DAMRU'25", desc: 'Campus clash • 2025', seed: 'damru25' },
  { id: 'rpl', title: 'RPL', desc: 'Regional Pro League', seed: 'rpl-event' },
  { id: 'ganpati', title: 'GANPATI', desc: 'Community invitational', seed: 'ganpati' },
]

const PastTournaments: React.FC = () => {
  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl mb-8" style={{ color: '#ff4d4d', fontFamily: 'var(--font-secondary)' }}>PAST TOURNAMENTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tournaments.map((t) => (
            <article
              key={t.id}
              className="rounded-lg overflow-hidden transform transition-transform duration-500 ease-out hover:scale-105"
              style={{ willChange: 'transform' }}
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/1200/600`}
                  alt={t.title}
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="absolute left-4 top-4 bg-black/50 px-3 py-1 rounded-md">
                  <span className="text-sm font-semibold" style={{ color: '#fff' }}>{t.title}</span>
                </div>
              </div>

              <Card className="bg-transparent border-t-0">
                <Card.Header>
                  <Card.Title style={{ color: '#ffeeee' }}>{t.title}</Card.Title>
                  <Card.Description style={{ color: '#ffdede' }}>{t.desc}</Card.Description>
                </Card.Header>
                <Card.Content>
                  <div className="flex items-center justify-between">
                    <div className="text-sm" style={{ color: '#cfefff' }}>View recap & winners</div>
                    <Button variant="ghost" size="sm" className="text-sm" style={{ color: '#00ffff' }}>Details</Button>
                  </div>
                </Card.Content>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PastTournaments
