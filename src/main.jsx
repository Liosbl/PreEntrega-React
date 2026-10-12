// Punto de entrada de la aplicación
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css' // CSS global (fuentes, colores, fondo)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter habilita la navegación con rutas (Clase 07) */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
