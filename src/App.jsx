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
  return (
    // Clase 03: el Layout envuelve todo el contenido (Header + contenido + Footer)
    <Layout>
      <Routes>
        {/* Clase 07: rutas de la aplicación */}
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/nuevo-producto" element={<NewProductContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
        {/* Cualquier otra ruta muestra la página 404 */}
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </Layout>
  )
}

export default App
