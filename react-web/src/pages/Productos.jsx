import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductoCard from '../components/ProductoCard'
import { getProductos } from '../services/productosService'

// Consume: theme (a través de ProductoCard y directamente)
export default function Productos() {
  const { theme } = useAppContext()
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    getProductos().then((data) => {
      setProductos(data)
      setCargando(false)
    })
  }, [])

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

  return (
    <div style={pageStyle}>
      <h2 style={{ marginBottom: '4px' }}>🛍️ Catálogo de Productos</h2>
      <p style={{ color: theme === 'dark' ? '#a0a0c0' : '#6b7280', marginTop: 0 }}>
        Hacé clic en ❤️ para guardar un producto en tus favoritos.
      </p>

      {cargando ? (
        <p>Cargando productos...</p>
      ) : (
        <div style={gridStyle}>
          {productos.map((p) => (
            <ProductoCard key={p.id} producto={p} />
          ))}
        </div>
      )}
    </div>
  )
}
