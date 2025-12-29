import React from 'react'
import { Button } from '@/components/retroui/Button'
import { Card } from '@/components/retroui/Card'
import useEmblaCarousel from 'embla-carousel-react'

const events = [
  { id: 'e1', title: 'BGMI', meta: "Mobile • Battle Royale", time: 'Apr 3, 10:00', img: 'https://picsum.photos/seed/bgmi/800/450' },
  { id: 'e2', title: 'Free Fire', meta: "Mobile • Battle Royale", time: 'Apr 3, 12:00', img: 'https://picsum.photos/seed/freefire/800/450' },
  { id: 'e3', title: 'Valorant', meta: "PC • 5v5", time: 'Apr 3, 14:00', img: 'https://picsum.photos/seed/valorant/800/450' },
  { id: 'e4', title: 'Fifa', meta: "Console • Football", time: 'Apr 4, 10:00', img: 'https://picsum.photos/seed/fifa/800/450' },
  { id: 'e5', title: 'F1 25', meta: "PC/Console • Racing", time: 'Apr 4, 13:00', img: 'https://picsum.photos/seed/f125/800/450' },
  { id: 'e6', title: 'eFootball', meta: "Console • Football", time: 'Apr 5, 16:00', img: 'https://picsum.photos/seed/efootball/800/450' },
  { id: 'e7', title: 'Clash Royal', meta: "Mobile • Strategy", time: 'Apr 6, 11:00', img: 'https://picsum.photos/seed/clashroyal/800/450' },
  { id: 'e8', title: 'Tekken 8', meta: "Console • Fighting", time: 'Apr 6, 14:00', img: 'https://picsum.photos/seed/tekken8/800/450' },
]

const EventsSection: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-12 py-12">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="text-center text-3xl md:text-4xl mb-6" style={{ color: '#ff6b6b', fontFamily: 'var(--font-secondary)' }}>EVENTS — CAROUSEL / BENTO GRID</h2>

        {/* Mobile: horizontal scroll; Desktop: 3-column grid */}
        {/* Embla carousel on mobile, grid on md+ */}
        <div className="-mx-4 md:mx-0 px-4">
          <div className="md:hidden">
            <EmblaMobile events={events} />
          </div>

          <div className="hidden md:grid md:grid-cols-3 md:gap-6">
            {events.map((ev) => (
              <article key={ev.id} className="rounded-lg border-2 bg-transparent p-0 overflow-hidden card-8bit" style={{ fontFamily: 'var(--font-primary)' }}>
                <img src={ev.img} alt={ev.title} className="w-full h-56 md:h-64 object-cover rounded-t-sm border-b-2 border-black" />
                <Card className="w-full">
                  <Card.Header>
                    <Card.Title style={{ fontFamily: 'var(--font-secondary)', color: '#00ffff' }}>{ev.title}</Card.Title>
                    <Card.Description style={{ color: '#cfefff' }}>{ev.meta} • {ev.time}</Card.Description>
                  </Card.Header>

                  <Card.Content>
                    <div className="mt-2 flex items-center justify-between">
                      <Button size="sm" variant="outline" className="text-sm">Details</Button>
                      <Button size="sm" className="btn-8bit-anim" style={{ backgroundColor: '#00ffff', color: '#000' }}>Join</Button>
                    </div>
                  </Card.Content>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection

function EmblaMobile({ events }: { events: typeof events }) {
  const [emblaRef] = useEmblaCarousel({ axis: 'x', containScroll: 'trimSnaps' })

  return (
    <div className="embla" ref={emblaRef as any}>
      <div className="flex gap-4 pb-4">
        {events.map((ev) => (
          <article key={ev.id} className="flex-none w-72 rounded-lg border-2 bg-transparent p-0 overflow-hidden card-8bit" style={{ fontFamily: 'var(--font-primary)' }}>
            <img src={ev.img} alt={ev.title} className="w-full h-56 object-cover rounded-t-sm border-b-2 border-black" />
            <Card className="w-full">
              <Card.Header>
                <Card.Title style={{ fontFamily: 'var(--font-secondary)', color: '#00ffff' }}>{ev.title}</Card.Title>
                <Card.Description style={{ color: '#cfefff' }}>{ev.meta} • {ev.time}</Card.Description>
              </Card.Header>

              <Card.Content>
                <div className="mt-2 flex items-center justify-between">
                  <Button size="sm" variant="outline" className="text-sm">Details</Button>
                  <Button size="sm" className="btn-8bit-anim" style={{ backgroundColor: '#00ffff', color: '#000' }}>Join</Button>
                </div>
              </Card.Content>
            </Card>
          </article>
        ))}
      </div>
    </div>
  )
}
