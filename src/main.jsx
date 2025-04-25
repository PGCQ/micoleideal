import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nosotros from './paginas/Nosotros.jsx'
import App from './App.jsx'
import Contacto from './paginas/Contacto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Contacto />

  </StrictMode>,
)
