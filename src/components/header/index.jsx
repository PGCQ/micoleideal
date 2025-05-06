import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./styles.scss"

const Header = () => {
    const location = useLocation();
    const isPaginaPrincipal = location.pathname === "/" || location.pathname === "/micoleideal/";
    
    // Estado para el scroll
    const [scrolled, setScrolled] = useState(false);
    
    // Efecto para detectar el scroll
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // Estado para el carrusel - imagen actual
    const [imagenActual, setImagenActual] = useState(1);
    
    // Función para cambiar a la siguiente imagen
    const cambiarImagen = () => {
        // Si llegamos a la imagen 4, volvemos a la 1, sino aumentamos en 1
        if (imagenActual >= 4) {
            setImagenActual(1);
        } else {
            setImagenActual(imagenActual + 1);
        }
    }
    
    // Efecto para cambiar la imagen cada 5 segundos
    useEffect(() => {
        // Solo activamos el carrusel si estamos en la página principal
        if (!isPaginaPrincipal) return;
        
        // Creamos un temporizador
        const temporizador = setInterval(() => {
            cambiarImagen();
        }, 5000);
        
        // Limpiamos el temporizador cuando el componente se desmonta
        return () => {
            clearInterval(temporizador);
        }
    }, [imagenActual, isPaginaPrincipal]); // Dependencias del efecto

    // Verificar si una ruta está activa
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            <div className={`cabecera ${scrolled ? 'scrolled' : ''}`}>
                <div className="contenedor">
                    <div className="cabecera-contenido">
                        <Link to="/" className="logo-container">
                            <h1>Mi Cole</h1>
                            <i className="fas fa-user-graduate logo-icon"></i>
                        </Link>
                        <nav className="cabecera-navegacion">
                            <ul>
                                {[
                                    { label: "Colegios", path: "/colegios" },
                                    { label: "Información", path: "/informacion" },
                                    { label: "Sobre Nosotros", path: "/nosotros" },
                                    { label: "Contacto", path: "/contacto" },
                                    { label: "Servicios", path: "/servicios" },
                                ].map(item => (
                                    <li key={item.label}>
                                        <Link 
                                            to={item.path} 
                                            className={isActive(item.path) ? 'active' : ''}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Solo mostramos el carrusel en la página principal */}
            {isPaginaPrincipal && (
                <header className="contenido-seccion">
                    {/* Generamos cada imagen con un estilo dinámico para controlar la opacidad */}
                    {[1, 2, 3, 4].map(index => (
                        <div 
                            key={index}
                            className={`contenido-imagen imagen-${index}`}
                            style={{ 
                                opacity: imagenActual === index ? 1 : 0, 
                                zIndex: imagenActual === index ? 1 : 0,
                                transform: imagenActual === index ? 'scale(1.1)' : 'scale(1)'
                            }}
                        ></div>
                    ))}
                    <div className="contenido-overlay"></div>
                    <div className="contenido-tarjeta">
                        <h1>Mi colegio, yo elijo la calidad de estudio</h1>
                        <p>micolePeru@gmail.com</p>
                    </div>
                </header>
            )}
        </>
    )
}

export default Header