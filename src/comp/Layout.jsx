import Header from './Header'
import Footer from './Footer'

// Clase 03: componente Layout.
// Recibe "children", que es todo lo que pongamos adentro de <Layout>...</Layout>
function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="contenido">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
