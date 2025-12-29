import React from 'react'
import { Loader } from '@/components/retroui/Loader'
import { Progress } from '@/components/retroui/Progress'

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = React.useState(0)
  const [message, setMessage] = React.useState('Booting tournament engines...')

  React.useEffect(() => {
    // staged progress: quick to ~38%, then to ~85%, then slowly to 100
    const timers: Array<number> = []

    // total loader duration ~4500ms
    timers.push(window.setTimeout(() => { setProgress(38); setMessage('Initializing modules...') }, 300))
    timers.push(window.setTimeout(() => { setProgress(85); setMessage('Loading assets and textures...') }, 1200))

    // start slow incremental fill after the big jump; run until ~4500ms
    const startSlow = window.setTimeout(() => {
      setMessage('Finalizing setups...')
      let current = 85
      const totalRemaining = 4500 - 1200 // 3300ms
      const steps = 40
      const stepTime = Math.floor(totalRemaining / steps) // ~82ms
      const increment = (100 - current) / steps
      const iv = window.setInterval(() => {
        current = Math.min(100, Math.round((current + increment) * 100) / 100)
        setProgress(current)
        if (current >= 100) window.clearInterval(iv)
      }, stepTime)
      timers.push(iv)
    }, 1250)
    // final message near the end
    timers.push(window.setTimeout(() => setMessage('Ready — launching!'), 4200))
    timers.push(startSlow)

    return () => timers.forEach((t) => window.clearTimeout(t))
  }, [])

  return (
    <div className="loader-overlay" style={{ width: '100vw', height: '100vh' }}>
      <div className="loader-card">
        <div className="loader-title">QUANTICA</div>

        <div className="loader-component flex justify-center items-center my-4" aria-hidden>
          <Loader count={4} size="lg" variant="default" />
        </div>

        <div className="loader-sub">{message}</div>

        <div className="progress-wrap mt-4" aria-hidden style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: 520 }}>
            <Progress value={Math.round(progress)} className="w-full" />
          </div>
        </div>

        <div className="loader-hint">Press Start • Loading</div>
      </div>
    </div>
  )
}

export default LoadingScreen
