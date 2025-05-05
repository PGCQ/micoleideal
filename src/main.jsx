import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Colegios from './paginas/Colegios.jsx'
import Nosotros from './paginas/Nosotros.jsx'
import Servicios from './paginas/Servicios.jsx'

// Componentes temporales para las páginas que faltan
const ColegiosTemp = () => (
  <div style={{ paddingTop: '80px', textAlign: 'center' }}>
    <h1>Página de Colegios</h1>
    <p>Esta página está en construcción.</p>
  </div>
);

const Contacto = () => (
  <div style={{ paddingTop: '80px', textAlign: 'center' }}>
    <h1>Página de Contacto</h1>
    <p>Esta página está en construcción.</p>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter hashType="noslash">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/colegios" element={<ColegiosTemp />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/informacion" element={<Colegios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
