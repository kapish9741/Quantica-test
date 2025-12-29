import React, { useEffect, useState } from 'react'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const getTimeLeft = (target: number): TimeLeft => {
  const now = Date.now()
  const diff = Math.max(0, target - now)
  const seconds = Math.floor((diff / 1000) % 60)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  return { days, hours, minutes, seconds }
}

const pad = (n: number) => String(n).padStart(2, '0')

const CountdownTimer: React.FC<{ targetDate?: string }> = ({ targetDate = '2026-03-01T00:00:00Z' }) => {
  const target = new Date(targetDate).getTime()
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target))

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000)
    return () => clearInterval(t)
  }, [target])

  const counter = `${timeLeft.days} days ${pad(timeLeft.hours)} hours ${pad(timeLeft.minutes)} minutes ${pad(timeLeft.seconds)} seconds`

  return (
    <div className="w-full max-w-[1200px] px-4 md:px-6 mx-auto text-center">
      <div className="card bg-transparent border-2 p-4 mx-auto inline-block">
        <div className="mb-3 text-center text-lg font-semibold" style={{ color: '#7fffd4', fontFamily: 'var(--font-primary)' }}>Event starts in</div>

        <div className="flex flex-col md:grid md:grid-flow-col md:auto-cols-max gap-5 text-center items-center">
          <div className="flex flex-col items-center">
            <span className="countdown font-mono text-5xl eight-bit-block">
              <span className="eight-bit" style={{ "--value": timeLeft.days } as React.CSSProperties} aria-live="polite" aria-label={counter}>{timeLeft.days}</span>
            </span>
            <div className="mt-2">days</div>
          </div>

          <div className="flex flex-col items-center">
            <span className="countdown font-mono text-5xl eight-bit-block">
              <span className="eight-bit" style={{ "--value": pad(timeLeft.hours) } as React.CSSProperties} aria-live="polite" aria-label={counter}>{pad(timeLeft.hours)}</span>
            </span>
            <div className="mt-2">hours</div>
          </div>

          <div className="flex flex-col items-center">
            <span className="countdown font-mono text-5xl eight-bit-block">
              <span className="eight-bit" style={{ "--value": pad(timeLeft.minutes) } as React.CSSProperties} aria-live="polite" aria-label={counter}>{pad(timeLeft.minutes)}</span>
            </span>
            <div className="mt-2">min</div>
          </div>

          <div className="flex flex-col items-center">
            <span className="countdown font-mono text-5xl eight-bit-block">
              <span className="eight-bit" style={{ "--value": pad(timeLeft.seconds) } as React.CSSProperties} aria-live="polite" aria-label={counter}>{pad(timeLeft.seconds)}</span>
            </span>
            <div className="mt-2">sec</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer
