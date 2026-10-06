// Servicio que simula una fuente de datos de productos
// En una app real esto haría fetch a una API

const productos = [
  { id: 1, nombre: 'Auriculares Bluetooth', precio: 15000, imagen: '🎧' },
  { id: 2, nombre: 'Teclado Mecánico', precio: 22000, imagen: '⌨️' },
  { id: 3, nombre: 'Mouse Inalámbrico', precio: 8500, imagen: '🖱️' },
  { id: 4, nombre: 'Monitor 24"', precio: 85000, imagen: '🖥️' },
  { id: 5, nombre: 'Webcam HD', precio: 12000, imagen: '📷' },
  { id: 6, nombre: 'Micrófono USB', precio: 18000, imagen: '🎙️' },
]

export function getProductos() {
  return Promise.resolve(productos)
}

export function getProductoById(id) {
  return Promise.resolve(productos.find((p) => p.id === id) || null)
}
