import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './comp/Layout'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import NewProductContainer from './pages/NewProductContainer'
import Contacto from './pages/Contacto'
import Carrito from './pages/Carrito'
import NoEncontrada from './pages/NoEncontrada'
import './App.css'

function App() {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id)
      if (!existente) {
        return [...prev, { ...producto, cantidad: 1 }]
      }
      if (existente.cantidad >= producto.stock) {
        return prev
      }
      return prev.map((item) =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    })
  }

  const cambiarCantidad = (id, diferencia) => {
    setCarrito((prev) =>
      prev
        .map((item) => {
          if (item.id !== id) return item
          const cantidad = Math.min(item.cantidad + diferencia, item.stock)
          return { ...item, cantidad }
        })
        .filter((item) => item.cantidad > 0)
    )
  }

  const quitarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id))
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const cantidadEnCarrito = carrito.reduce((total, item) => total + item.cantidad, 0)

  return (
    <Layout cantidadEnCarrito={cantidadEnCarrito}>
      <Routes>
        <Route path="/" element={<Inicio onAgregar={agregarAlCarrito} />} />
        <Route path="/productos" element={<Productos onAgregar={agregarAlCarrito} />} />
        <Route path="/producto/:id" element={<DetalleProducto onAgregar={agregarAlCarrito} />} />
        <Route path="/nuevo-producto" element={<NewProductContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="/carrito"
          element={
            <Carrito
              carrito={carrito}
              onCambiarCantidad={cambiarCantidad}
              onQuitar={quitarDelCarrito}
              onVaciar={vaciarCarrito}
            />
          }
        />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </Layout>
  )
}

export default App
