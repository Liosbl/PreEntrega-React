import Header from './Header'
import Footer from './Footer'

function Layout({ children, cantidadEnCarrito }) {
  return (
    <div className="layout">
      <Header cantidadEnCarrito={cantidadEnCarrito} />
      <main className="contenido">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
