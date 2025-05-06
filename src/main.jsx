import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Colegios from './paginas/Colegios.jsx'
import Nosotros from './paginas/Nosotros.jsx'
import Servicios from './paginas/Servicios.jsx'
import Contacto from './paginas/Contacto.jsx'
import Instituciones from './paginas/instituciones.jsx'
import Colegiosub from './paginas/Colegiosub.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter hashType="noslash">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/colegios" element={<Colegiosub />} />
        <Route path="/instituciones" element={<Instituciones />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/informacion" element={<Colegios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
