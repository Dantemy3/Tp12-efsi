import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

// Consume: login, theme
export default function Login() {
  const { login, theme } = useAppContext()
  const navigate = useNavigate()

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre.trim() || !email.trim()) {
      setError('Completá todos los campos.')
      return
    }
    login({ nombre: nombre.trim(), email: email.trim() })
    navigate('/')
  }

  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 60px)',
    padding: '24px',
    backgroundColor: theme === 'dark' ? '#13131f' : '#f3f4f6',
  }

  const formStyle = {
    backgroundColor: theme === 'dark' ? '#2a2a3e' : '#fff',
    color: theme === 'dark' ? '#e0e0e0' : '#1f2937',
    border: `1px solid ${theme === 'dark' ? '#444' : '#e5e7eb'}`,
    borderRadius: '12px',
    padding: '40px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '6px',
    border: `1px solid ${theme === 'dark' ? '#555' : '#d1d5db'}`,
    marginTop: '6px',
    marginBottom: '16px',
    fontSize: '1rem',
    backgroundColor: theme === 'dark' ? '#1e1e2e' : '#fff',
    color: theme === 'dark' ? '#e0e0e0' : '#1f2937',
    boxSizing: 'border-box',
  }

  const btnStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4f46e5',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
  }

  return (
    <div style={pageStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', margin: '0 0 24px' }}>🔐 Iniciar sesión</h2>

        {error && (
          <p style={{ color: '#ef4444', marginTop: 0, textAlign: 'center' }}>{error}</p>
        )}

        <label htmlFor="nombre" style={{ fontWeight: '500' }}>Nombre</label>
        <input
          id="nombre"
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={inputStyle}
        />

        <label htmlFor="email" style={{ fontWeight: '500' }}>Email</label>
        <input
          id="email"
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <button type="submit" style={btnStyle}>
          Entrar
        </button>
      </form>
    </div>
  )
}
