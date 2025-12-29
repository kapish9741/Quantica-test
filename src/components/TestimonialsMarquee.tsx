import React from 'react'
import { Text } from '@/components/retroui/Text'
import { Card } from '@/components/retroui/Card'
import { Avatar } from '@/components/retroui/Avatar'

const testimonials = [
  {
    id: 't1',
    name: 'Leroy Jenkins',
    role: 'Pro Gamer',
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=880&q=80',
    text: 'RetroUI is the coolest-looking UI library out there!',
  },
  {
    id: 't2',
    name: 'Aisha Khan',
    role: 'Tournament Winner',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=880&q=80',
    text: 'Had an amazing time — organization was top-notch.',
  },
  {
    id: 't3',
    name: 'Ravi Patel',
    role: 'Campus Lead',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=880&q=80',
    text: 'Great crowd, smooth setup and awesome vibes!',
  },
  {
    id: 't4',
    name: 'Meera S.',
    role: 'Streamer',
    img: 'https://images.unsplash.com/photo-1545996124-1f2d1d0d0c4b?auto=format&fit=crop&w=880&q=80',
    text: "Best LAN I've attended in years — shoutout to the team!",
  },
]

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <Card className="w-full max-w-[400px] shadow-none hover:shadow-md" style={{ backgroundColor: 'rgba(0,0,0,0.32)' }}>
      <Card.Content className="text-white">
        <Text className="text-lg">“{t.text}”</Text>

        <div className="flex items-center space-x-3 mt-6">
          <Avatar className="h-10 w-10">
            <Avatar.Image alt={t.name} src={t.img} />
          </Avatar>
          <div>
            <div className="font-medium">{t.name}</div>
            <div className="text-sm text-muted" style={{ color: '#aab6c1' }}>{t.role}</div>
          </div>
        </div>
      </Card.Content>
    </Card>
  )
}

const TestimonialsMarquee: React.FC = () => {
  // Duplicate list to enable seamless looping with the existing `.marquee` keyframes
  const loop = [...testimonials, ...testimonials]

  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-[1200px] mx-auto relative">
        <h2 className="text-3xl md:text-4xl mb-6" style={{ color: '#ff4d4d', fontFamily: 'var(--font-secondary)' }}>
          FROM THE PLAYERS THEMSELVES (FEEDBACK)
        </h2>

        <div className="relative overflow-hidden">
          <div className="marquee py-4">
            {loop.map((t, i) => (
              <div key={t.id + String(i)} className="inline-block mx-3 align-top w-80 md:w-[400px]">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>

          {/* no fade overlays — items will scroll without fading */}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsMarquee
