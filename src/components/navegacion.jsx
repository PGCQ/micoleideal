import React from 'react';
// Ajustamos la ruta de importación de estilos
import "./header/styles.scss"; 

const NavigationBar = () => {
    const menu = [
        { label: "Colegios", path: "!#" },
        { label: "Información", path: "!#" },
        { label: "Sobre Nosotros", path: "!#" },
        { label: "Contacto", path: "!#" },
        { label: "Servicios", path: "!#" },
    ];
    return (
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
    );
};

export default NavigationBar; 