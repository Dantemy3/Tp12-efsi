import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

// Consume: user, logout, theme, toggleTheme, favorites
export default function Navbar() {
  const { user, logout, theme, toggleTheme, favorites } = useAppContext()

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 24px',
    backgroundColor: theme === 'dark' ? '#1e1e2e' : '#4f46e5',
    color: '#fff',
    flexWrap: 'wrap',
    gap: '8px',
  }

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    marginRight: '16px',
  }

  const btnStyle = {
    background: 'rgba(255,255,255,0.2)',
    border: '1px solid rgba(255,255,255,0.4)',
    color: '#fff',
    padding: '6px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
    marginLeft: '8px',
  }

  return (
    <nav style={navStyle}>
      <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>🛍️ TechStore</div>

      <div>
        <Link style={linkStyle} to="/">Inicio</Link>
        <Link style={linkStyle} to="/productos">Productos</Link>
        <Link style={linkStyle} to="/favoritos">
          Favoritos ({favorites.length})
        </Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button style={btnStyle} onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Oscuro' : '☀️ Claro'}
        </button>

        {user ? (
          <>
            <span style={{ fontSize: '0.9rem' }}>Hola, {user.nombre}</span>
            <button style={btnStyle} onClick={logout}>Salir</button>
          </>
        ) : (
          <Link style={{ ...btnStyle, textDecoration: 'none' }} to="/login">
            Iniciar sesión
          </Link>
        )}
      </div>
    </nav>
  )
}
