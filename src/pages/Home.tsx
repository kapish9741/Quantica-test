import React from 'react'
import Header from '@/components/Header'
import SponsorsMarquee from '@/components/SponsorsMarquee'
import CountdownTimer from '@/components/CountdownTimer'
import bgVideo from '@/assets/7914778-hd_1920_1080_30fps.mp4'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* full-screen background video: prefer local gaming asset '/assets/gaming-bg.mp4' else fallback to MDN sample */}
      <video className="fixed inset-0 w-full h-full object-cover -z-10" autoPlay muted loop playsInline>
        {/* <source src="https://cdn.pixabay.com/video/2021/10/07/91269-629483972_large.mp4" type="video/mp4" /> */}
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* subtle overlays to help text readability: dark base + slight white wash */}
      <div className="fixed inset-0 bg-black/60 -z-5" />
      <div className="fixed inset-0 bg-white/5 mix-blend-screen -z-4" />

      <Header />

      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full flex justify-center items-center">
          <section className="p-12 md:p-16 rounded-lg border-2 inline-block text-center mx-auto w-auto max-w-[1200px]">
            <p className="text-lg md:text-xl" style={{color: '#7fffd4', fontFamily: 'var(--font-primary)'}}>NCR's Biggest Esports Fest</p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none break-words" style={{fontFamily: 'var(--font-secondary)', color: '#00ffff'}}>Quantica</h1>
            <p className="mt-6 md:mt-8 text-lg" style={{color: '#cfefff'}}>2000+ Players • Massive Prize Pool</p>
            <p className="mt-3 text-lg" style={{color: '#cfefff'}}>Mobile • PC • Console Tournaments</p>
            <p className="mt-3 text-lg" style={{color: '#cfefff'}}>India's Next-Gen Campus Esports Experience</p>
            <div className="mt-8 md:mt-10">
              <button className="px-6 md:px-8 py-3 md:py-4 bg-[#00ffff] text-black font-semibold rounded-sm shadow-[6px_6px_0_black] text-lg md:text-xl">Register Now</button>
            </div>
          </section>
        </div>
      </main>
      {/* Sponsors marquee section */}
      <SponsorsMarquee />

      {/* Countdown timer (centered) */}
      <div className="flex justify-center px-6 mb-16">
        <CountdownTimer />
      </div>
    </div>
  )
}

export default Home