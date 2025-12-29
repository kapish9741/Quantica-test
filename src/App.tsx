import React from 'react'
import Home from '@/pages/Home'
import LoadingScreen from '@/components/LoadingScreen'

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 4500)
    return () => clearTimeout(t)
  }, [])

  return loading ? <LoadingScreen /> : <Home />
}

export default App
