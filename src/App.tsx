import React from 'react'
import Home from '@/pages/Home'
import LoadingScreen from '@/components/LoadingScreen'

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true)
  const fallbackRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    // safety fallback in case loader never calls finish (8s)
    fallbackRef.current = window.setTimeout(() => setLoading(false), 8000)
    return () => {
      if (fallbackRef.current) window.clearTimeout(fallbackRef.current)
    }
  }, [])

  const handleFinish = () => {
    if (fallbackRef.current) {
      window.clearTimeout(fallbackRef.current)
      fallbackRef.current = null
    }
    setLoading(false)
  }

  return loading ? <LoadingScreen onFinish={handleFinish} /> : <Home />
}

export default App
