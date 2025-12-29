import React from 'react'
import { Loader } from '@/components/retroui/Loader'
import { Progress } from '@/components/retroui/Progress'

type LoadingScreenProps = {
  onFinish?: () => void
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = React.useState(0)
  const [finished, setFinished] = React.useState(false)
  const [isDesktop, setIsDesktop] = React.useState<boolean>(typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : true)
  const [message, setMessage] = React.useState('Booting tournament engines...')

  React.useEffect(() => {
    // update isDesktop on resize
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => setIsDesktop(mq.matches)
    mq.addEventListener?.('change', onChange)

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
        if (current >= 100) {
          window.clearInterval(iv)
          setFinished(true)
        }
      }, stepTime)
      timers.push(iv as unknown as number)
    }, 1250)
    // final message near the end
    timers.push(window.setTimeout(() => setMessage('Ready — launching!'), 4200))
    timers.push(startSlow as unknown as number)

    // cleanup
    return () => {
      mq.removeEventListener?.('change', onChange)
      timers.forEach((t) => window.clearTimeout(t))
    }
  }, [])

  React.useEffect(() => {
    if (!finished) return

    // when finished, either wait for keypress on desktop or auto-finish on mobile
    if (isDesktop) {
      const onAnyKey = () => {
        onFinish?.()
        window.removeEventListener('keydown', onAnyKey)
        window.removeEventListener('click', onAnyKey)
      }
      // show prompt (handled in render) and listen for key or click
      window.addEventListener('keydown', onAnyKey)
      window.addEventListener('click', onAnyKey)
      return () => {
        window.removeEventListener('keydown', onAnyKey)
        window.removeEventListener('click', onAnyKey)
      }
    } else {
      // small delay then auto-finish on mobile
      const t = window.setTimeout(() => onFinish?.(), 300)
      return () => window.clearTimeout(t)
    }
  }, [finished, isDesktop, onFinish])
  if (finished) {
    return (
      <div className="loader-overlay" style={{ width: '100vw', height: '100vh' }}>
        <div className="flex items-center justify-center w-full h-full">
          <div className="text-center px-4">
            <div className="press-start eight-bit text-3xl md:text-5xl select-none">
              Press any key to start
            </div>
          </div>
        </div>
      </div>
    )
  }

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
