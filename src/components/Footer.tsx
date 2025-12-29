import React from 'react'
import { Button } from '@/components/retroui/Button'
import { Text } from '@/components/retroui/Text'

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-6 mt-12" style={{ background: 'rgba(0,0,0,0.18)' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#ff6b6b', fontFamily: 'var(--font-secondary)' }}>Quantica</h3>
            <Text className="text-sm" style={{ color: '#cfefff' }}>
              NCR's biggest campus esports festival. Stay connected for events,
              tournaments and community meetups.
            </Text>
            <div className="mt-4 flex space-x-2">
              <Button variant="ghost" size="sm" style={{ color: '#00ffff' }}>Discord</Button>
              <Button variant="ghost" size="sm" style={{ color: '#00ffff' }}>Twitter</Button>
              <Button variant="ghost" size="sm" style={{ color: '#00ffff' }}>Instagram</Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2" style={{ color: '#ffd6d6' }}>Quick Links</h4>
            <ul className="space-y-2">
              <li><Button variant="ghost" size="sm" className="text-left" style={{ color: '#cfefff' }}>Events</Button></li>
              <li><Button variant="ghost" size="sm" className="text-left" style={{ color: '#cfefff' }}>Schedule</Button></li>
              <li><Button variant="ghost" size="sm" className="text-left" style={{ color: '#cfefff' }}>Tickets</Button></li>
              <li><Button variant="ghost" size="sm" className="text-left" style={{ color: '#cfefff' }}>Partners</Button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2" style={{ color: '#ffd6d6' }}>Subscribe</h4>
            <Text className="text-sm mb-3" style={{ color: '#cfefff' }}>Get updates about tournaments and offers.</Text>
            <div className="flex gap-2">
              <input aria-label="email" placeholder="you@example.com" className="flex-1 px-3 py-2 rounded bg-black/30 border border-white/10 placeholder:text-gray-400 text-white" />
              <Button size="sm" style={{ backgroundColor: '#00ffff', color: '#000' }}>Join</Button>
            </div>
            <div className="mt-6 text-sm text-muted" style={{ color: '#9fb1bb' }}>
              © {new Date().getFullYear()} Quantica — All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
