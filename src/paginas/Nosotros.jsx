import React from 'react';
import './Nosotros.css';
import { NavigationBar } from '../components';
import Footer from '../components/footer/Footer';
import imagenPerfil from '../assets/img/trabajadores.png';

const DiscoveryIcon = () => (
    <div className="nosotros-proceso-icono discovery">
        <span style={{
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
        }}>Visión</span>
    </div>
);

const ResearchIcon = () => (
    <div className="nosotros-proceso-icono research">
        <span style={{
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
        }}>Misión</span>
    </div>
);

const ContentIcon = () => (
    <div className="nosotros-proceso-icono content">
        <span style={{
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
        }}>Objetivo</span>
    </div>
);

const Nosotros = () => {
    return (
        <div style={{ width: '100%', margin: 0, padding: 0, overflow: 'hidden' }}>
            <NavigationBar /> {/* <-- Usar NavigationBar */}
            <div className="nosotros-pagina">
                {/* Banner Superior */}
                {/* Clases de Tailwind removidas */}
                <div className="sobre-nosotros-banner">
                    {/* Clases de Tailwind removidas */}
                    <h1>Sobre Nosotros</h1>
                </div>

                {/* Sección Sobre Nosotros */}
                {/* Clases de Tailwind removidas/reemplazadas */}
                <div className="sobrenosotros-seccion">
                    <img src={imagenPerfil} className="nosotros-perfil-img" alt="Trabajadores" />
                    {/* Clases de Tailwind removidas */}
                    <h2>Grupo 8 - Proyecto MiCole-2025</h2> {/* Título como en la imagen */}
                    <p className="nosotros-descripcion">
                        Este es un proyecto de MiCole 2025, realizado por el grupo 8. Que esta compuesto por:
                    </p>
                    <div className="nosotros-botones-accion">
                        <a href="#" className="boton-principal">
                            Nuestro Servicio
                        </a>
                        <button className="boton-secundario">
                            Contactanos
                        </button>
                    </div>
                </div>


                <div className="nosotros-proceso-seccion">
                    <div className="nosotros-proceso-container">
                        <h2>PROCESS</h2> {/* Título agregado */}
                        <div className="nosotros-proceso-grid">
                            <div className="nosotros-proceso-item">
                                <div className="nosotros-proceso-icono-wrap">
                                    <DiscoveryIcon />
                                </div>
                                <p>
                                    Ser la plataforma líder en información educativa que empodere a los padres para tomar las mejores decisiones sobre la educación de sus hijos, contribuyendo a formar una generación de estudiantes mejor preparados para los desafíos del futuro.{/* Texto como en la imagen */}
                                </p>
                            </div>
                            {/* Investigación */}
                            <div className="nosotros-proceso-item">
                                <div className="nosotros-proceso-icono-wrap">
                                    <ResearchIcon />
                                </div>
                                <p>
                                    Proporcionar información completa, actualizada y verificada sobre instituciones educativas, permitiendo a los padres comparar opciones, conocer metodologías pedagógicas y descubrir el ambiente escolar idóneo que se alinee con los valores y necesidades de desarrollo de sus hijos.
                                </p>
                            </div>
                            {/* Contenido */}
                            <div className="nosotros-proceso-item">
                                <div className="nosotros-proceso-icono-wrap">
                                    <ContentIcon />
                                </div>
                                <p>
                                    Facilitar el acceso a datos relevantes sobre la calidad educativa de los colegios, optimizando el proceso de selección escolar mediante herramientas de comparación, reseñas verificadas y métricas de desempeño que realmente importen en el desarrollo integral de los estudiantes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Nosotros;