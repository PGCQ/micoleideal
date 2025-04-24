import React from 'react'

const Header = () => {
    return (
        <>
            <div className="cabecera-seccion">
                <a href="#" className="logo-container">
                    <h1>Mi Cole</h1>
                    <i className="fas fa-user-graduate logo-icon"></i>
                </a>
                <nav className="cabecera-navegacion">
                    <ul>
                        <li><a href="#">Colegios</a></li>
                        <li><a href="#">Información</a></li>
                        <li><a href="#">Sobre Nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Servicios</a></li>
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