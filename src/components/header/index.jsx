import React from 'react'
import "./styles.scss"

const Header = () => {
    const menu = [
        { label: "Colegios", path: "!#" },
        { label: "Información", path: "!#" },
        { label: "Sobre Nosotros", path: "!#" },
        { label: "Contacto", path: "!#" },
        { label: "Servicios", path: "!#" },
    ]
    return (
        <>
            <div className="cabecera-seccion">
                <a href="!#" className="logo-container">
                    <h1>Mi Cole</h1>
                    <i className="fas fa-user-graduate logo-icon"></i>
                </a>
                <nav className="cabecera-navegacion">
                    <ul>
                        {menu.map(item => (
                            <li key={item.label}><a href={item.path}>{item.label}</a></li>
                        ))}

                    </ul>
                </nav>
            </div>

            <header className="contenido-seccion">
                <div className="contenido-imagen"></div>
                <div className="contenido-overlay"></div>
                <div className="contenido-tarjeta">
                    <h1>Mi colegio, yo elijo la calidad de estudio</h1>
                    <p>micolePeru@gmail.com</p>
                </div>
            </header>
        </>
    )
}

export default Header