import { useAppContext } from '../context/AppContext'

// Consume: isFavorite, addFavorite, removeFavorite, theme
export default function ProductoCard({ producto }) {
  const { isFavorite, addFavorite, removeFavorite, theme } = useAppContext()

  const favorito = isFavorite(producto.id)

  const cardStyle = {
    border: `1px solid ${theme === 'dark' ? '#444' : '#ddd'}`,
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: theme === 'dark' ? '#2a2a3e' : '#fff',
    color: theme === 'dark' ? '#e0e0e0' : '#333',
    transition: 'transform 0.15s',
  }

  const btnStyle = {
    marginTop: '12px',
    padding: '8px 18px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    backgroundColor: favorito ? '#ef4444' : '#4f46e5',
    color: '#fff',
  }

  const handleToggle = () => {
    if (favorito) {
      removeFavorite(producto.id)
    } else {
      addFavorite(producto)
    }
  }

  return (
    <div style={cardStyle}>
      <div style={{ fontSize: '3rem' }}>{producto.imagen}</div>
      <h3 style={{ margin: '8px 0 4px' }}>{producto.nombre}</h3>
      <p style={{ color: '#6366f1', fontWeight: '700', margin: '4px 0' }}>
        ${producto.precio.toLocaleString('es-AR')}
      </p>
      <button style={btnStyle} onClick={handleToggle}>
        {favorito ? '💔 Quitar favorito' : '❤️ Agregar a favoritos'}
      </button>
    </div>
  )
}
