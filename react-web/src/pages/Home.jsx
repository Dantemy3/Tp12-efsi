import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

// Consume: user, theme, favorites
export default function Home() {
  const { user, theme, favorites } = useAppContext()

  const pageStyle = {
    padding: '40px 24px',
    maxWidth: '700px',
    margin: '0 auto',
    color: theme === 'dark' ? '#e0e0e0' : '#1f2937',
  }

  const heroStyle = {
    backgroundColor: theme === 'dark' ? '#2a2a3e' : '#eef2ff',
    borderRadius: '12px',
    padding: '32px',
    textAlign: 'center',
    marginBottom: '24px',
  }

  const btnStyle = {
    display: 'inline-block',
    marginTop: '16px',
    padding: '10px 24px',
    backgroundColor: '#4f46e5',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
  }

  return (
    <div style={pageStyle}>
      <div style={heroStyle}>
        <h1 style={{ fontSize: '2rem', margin: '0 0 8px' }}>
          Bienvenido{user ? `, ${user.nombre}` : ''} 👋
        </h1>
        <p style={{ color: theme === 'dark' ? '#a0a0c0' : '#6b7280', margin: 0 }}>
          {user
            ? `Tenés ${favorites.length} producto${favorites.length !== 1 ? 's' : ''} en favoritos.`
            : 'Iniciá sesión para guardar tus productos favoritos.'}
        </p>
        <Link style={btnStyle} to="/productos">
          Ver productos
        </Link>
      </div>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <InfoCard
          emoji="🛍️"
          titulo="Catálogo completo"
          texto="Explorá todos nuestros productos tecnológicos."
          theme={theme}
        />
        <InfoCard
          emoji="❤️"
          titulo="Lista de favoritos"
          texto="Guardá los productos que más te gustan."
          theme={theme}
        />
        <InfoCard
          emoji="🌙"
          titulo="Tema adaptable"
          texto="Cambiá entre modo claro y oscuro desde la barra."
          theme={theme}
        />
      </div>
    </div>
  )
}

function InfoCard({ emoji, titulo, texto, theme }) {
  return (
    <div
      style={{
        flex: '1 1 180px',
        backgroundColor: theme === 'dark' ? '#2a2a3e' : '#f9fafb',
        border: `1px solid ${theme === 'dark' ? '#444' : '#e5e7eb'}`,
        borderRadius: '10px',
        padding: '20px',
        color: theme === 'dark' ? '#e0e0e0' : '#374151',
      }}
    >
      <div style={{ fontSize: '2rem' }}>{emoji}</div>
      <h3 style={{ margin: '8px 0 4px' }}>{titulo}</h3>
      <p style={{ margin: 0, fontSize: '0.9rem', color: theme === 'dark' ? '#a0a0c0' : '#6b7280' }}>
        {texto}
      </p>
    </div>
  )
}
