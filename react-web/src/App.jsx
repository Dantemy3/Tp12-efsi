import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider, useAppContext } from './context/AppContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Favoritos from './pages/Favoritos'
import Login from './pages/Login'

// Componente interno para aplicar el tema al body
function ThemedApp() {
  const { theme } = useAppContext()

  const appStyle = {
    minHeight: '100vh',
    backgroundColor: theme === 'dark' ? '#13131f' : '#f9fafb',
    transition: 'background-color 0.3s',
  }

  return (
    <div style={appStyle}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

// AppProvider envuelve toda la aplicación — actúa como el Provider del Context
export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ThemedApp />
      </BrowserRouter>
    </AppProvider>
  )
}
