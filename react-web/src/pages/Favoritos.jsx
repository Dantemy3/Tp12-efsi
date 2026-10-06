import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

// Consume: favorites, removeFavorite, theme, user
export default function Favoritos() {
  const { favorites, removeFavorite, theme, user } = useAppContext()

  const pageStyle = {
    padding: '32px 24px',
    maxWidth: '900px',
    margin: '0 auto',
    color: theme === 'dark' ? '#e0e0e0' : '#1f2937',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '24px',
  }

  const cardStyle = {
    border: `1px solid ${theme === 'dark' ? '#444' : '#ddd'}`,
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: theme === 'dark' ? '#2a2a3e' : '#fff',
  }

  const btnStyle = {
    marginTop: '12px',
    padding: '8px 18px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    backgroundColor: '#ef4444',
    color: '#fff',
  }

  if (!user) {
    return (
      <div style={{ ...pageStyle, textAlign: 'center', paddingTop: '60px' }}>
        <p style={{ fontSize: '1.2rem' }}>🔒 Iniciá sesión para ver tus favoritos.</p>
        <Link
          to="/login"
          style={{
            display: 'inline-block',
            marginTop: '12px',
            padding: '10px 24px',
            backgroundColor: '#4f46e5',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
          }}
        >
          Ir al login
        </Link>
      </div>
    )
  }

  return (
    <div style={pageStyle}>
      <h2 style={{ marginBottom: '4px' }}>❤️ Mis Favoritos</h2>
      <p style={{ color: theme === 'dark' ? '#a0a0c0' : '#6b7280', marginTop: 0 }}>
        {favorites.length === 0
          ? 'No tenés productos favoritos aún.'
          : `${favorites.length} producto${favorites.length !== 1 ? 's' : ''} guardado${favorites.length !== 1 ? 's' : ''}.`}
      </p>

      {favorites.length === 0 ? (
        <Link
          to="/productos"
          style={{
            display: 'inline-block',
            marginTop: '12px',
            padding: '10px 24px',
            backgroundColor: '#4f46e5',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
          }}
        >
          Ver productos
        </Link>
      ) : (
        <div style={gridStyle}>
          {favorites.map((p) => (
            <div key={p.id} style={cardStyle}>
              <div style={{ fontSize: '3rem' }}>{p.imagen}</div>
              <h3 style={{ margin: '8px 0 4px', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
                {p.nombre}
              </h3>
              <p style={{ color: '#6366f1', fontWeight: '700', margin: '4px 0' }}>
                ${p.precio.toLocaleString('es-AR')}
              </p>
              <button style={btnStyle} onClick={() => removeFavorite(p.id)}>
                💔 Quitar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
