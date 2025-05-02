import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Colegios from './paginas/Colegios.jsx'
import Nosotros from './paginas/Nosotros.jsx'
import Contacto from './paginas/Contacto.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Nosotros /> */}
    {/* <Colegios /> */}
    {/* <Contacto /> */}
    <App />
    

  </StrictMode>,
)
