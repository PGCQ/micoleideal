import React, { useEffect } from 'react';
import './Nosotros.css';
import { Footer } from '../components';
import Header from '../components/header/index';
import imagenPerfil from '../assets/img/trabajadores.png';

// Componentes mejorados para los iconos de proceso
const IconoCircular = ({ tipo, texto }) => {
  const claseIcono = `nosotros-proceso-icono ${tipo}`;
  
  return (
    <div className="nosotros-proceso-icono-wrap" data-aos="zoom-in">
      <div className={claseIcono}>
        <span>{texto}</span>
      </div>
    </div>
  );
};

const Nosotros = () => {
    // Efecto para animación suave al cargar la página
    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Agregar clases de animación al hacer scroll
        const observarElementos = () => {
            const elementos = document.querySelectorAll('.animacion-scroll');
            const config = {
                threshold: 0.3,
                rootMargin: '0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, config);
            
            elementos.forEach(elemento => {
                observer.observe(elemento);
            });
        };
        
        observarElementos();
    }, []);
    
    return (
        <>
            <Header />
            <div className="nosotros-pagina">
                {/* Banner Superior */}
                <div className="sobre-nosotros-banner">
                    <h1>Sobre Nosotros</h1>
                    <div className="banner-decoracion"></div>
                </div>

                {/* Sección Sobre Nosotros */}
                <div className="sobrenosotros-seccion animacion-scroll">
                    <div className="perfil-imagen-contenedor">
                        <img src={imagenPerfil} className="nosotros-perfil-img" alt="Trabajadores" />
                    </div>
                    <h2>Grupo 8 - Proyecto MiCole-2025</h2>
                    <p className="nosotros-descripcion">
                        Este es un proyecto de MiCole 2025, realizado por el grupo 8. Nuestro equipo está comprometido en proporcionar la mejor información educativa para ayudar a los padres a tomar decisiones informadas sobre la educación de sus hijos.
                    </p>
                    <div className="nosotros-botones-accion">
                        <a href="#servicios" className="boton-principal">
                            Nuestro Servicio
                        </a>
                        <a href="#contacto" className="boton-secundario">
                            Contáctanos
                        </a>
                    </div>
                </div>

                <div className="nosotros-proceso-seccion">
                    <div className="nosotros-proceso-container animacion-scroll">
                        <h2>Metas Grupo 8</h2>
                        <div className="nosotros-proceso-grid">
                            <div className="nosotros-proceso-item animacion-scroll">
                                <IconoCircular tipo="discovery" texto="Visión" />
                                <div className="nosotros-proceso-contenido">
                                    <h3>Nuestra Visión</h3>
                                    <p>
                                        Ser la plataforma líder en información educativa que empodere a los padres para tomar las mejores decisiones sobre la educación de sus hijos, contribuyendo a formar una generación de estudiantes mejor preparados para los desafíos del futuro.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="nosotros-proceso-item animacion-scroll">
                                <IconoCircular tipo="research" texto="Misión" />
                                <div className="nosotros-proceso-contenido">
                                    <h3>Nuestra Misión</h3>
                                    <p>
                                        Proporcionar información completa, actualizada y verificada sobre instituciones educativas, permitiendo a los padres comparar opciones, conocer metodologías pedagógicas y descubrir el ambiente escolar idóneo que se alinee con los valores y necesidades de desarrollo de sus hijos.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="nosotros-proceso-item animacion-scroll">
                                <IconoCircular tipo="content" texto="Objetivo" />
                                <div className="nosotros-proceso-contenido">
                                    <h3>Nuestro Objetivo</h3>
                                    <p>
                                        Facilitar el acceso a datos relevantes sobre la calidad educativa de los colegios, optimizando el proceso de selección escolar mediante herramientas de comparación, reseñas verificadas y métricas de desempeño que realmente importen en el desarrollo integral de los estudiantes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección Equipo (Opcional) */}
                <div className="nosotros-equipo-seccion animacion-scroll">
                    <h2>Nuestro Equipo</h2>
                    <div className="equipo-descripcion">
                        <p>Somos un grupo de estudiantes comprometidos con mejorar la calidad educativa en Perú. Nuestro equipo combina habilidades en desarrollo web, diseño, investigación educativa y experiencia de usuario.</p>
                    </div>
                    <div className="nosotros-equipo-grid">
                        {/* Aquí podrías añadir fotos de los miembros del equipo si lo deseas */}
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Nosotros;