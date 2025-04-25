import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Colegios from './paginas/Colegios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Colegios />
  </StrictMode>,
)
