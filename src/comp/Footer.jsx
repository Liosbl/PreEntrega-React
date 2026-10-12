import Directorio from './Directorio'

// Clase 03: Footer con estilo.
// Clase 05: el directorio del equipo va al principio del footer.
function Footer() {
  return (
    <footer className="footer">
      <Directorio />

      <div className="footer-base">
        <p>Raíz · Vivero online — Buenos Aires</p>
        <p>Envíos a todo el país · Lunes a sábados de 9 a 18 h</p>
      </div>
    </footer>
  )
}

export default Footer
