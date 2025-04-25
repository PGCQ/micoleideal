import React from 'react'
import "./styles.css"

const Footer = () => {

  const year = new Date().getFullYear()

  const enlaces = [
    { label: "Colegios", path: "!#" },
    { label: "Información", path: "!#" },
    { label: "Sobre", path: "!#" },
    { label: "Contacto", path: "!#" },
    { label: "Servicios", path: "!#" }
  ]

  const contactos = [
    { label: "Av. Las Palmeras 123, Lima, Perú", icon: "fas fa-map-marker-alt" },
    { label: "+51 987 654 321", icon: "fas fa-phone-alt" },
    { label: "info@micole.edu.pe", icon: "fas fa-envelope" },
  ]


  return (
    <footer>
      <div className="footer-main">
        <div className="footer-logo">
          <h1>Mi Cole</h1>
          <p>Brindamos información actualizada sobre los mejores colegios para tus hijos, ayudándote a tomar la mejor decisión educativa.</p>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-enlaces">
          <h3>Enlaces</h3>
          <ul>
            {enlaces.map(enlace => (<li key={enlace.label}><a href={enlace.path}>{enlace.label}</a></li>))}
          </ul>
        </div>

        <div className="footer-contacto">
          <h3>Contacto</h3>
          {contactos.map(contacto => (<p key={contacto.label}><i className={contacto.icon}></i> {contacto.label}</p>))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} MiCole. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer