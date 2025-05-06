import React, { useEffect } from 'react';
import './Servicios.css';
import { Footer } from '../components';
import Header from '../components/header/index';
import servicioComparacion from '../assets/img/colegio-2.png';
import servicioAsesoria from '../assets/img/academia-2.jpg';
import servicioInformacion from '../assets/img/academia-3.jpg';

const Servicios = () => {
   
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <div className="servicios-container">
                <h1 className="titulo-principal">Nuestros Servicios</h1>
                
                <div className="servicio-container">
                    <div className="servicio-imagen">
                        <img src={servicioComparacion} alt="Comparación de Colegios" />
                    </div>
                    <div className="servicio-info">
                        <h2 className="servicio-titulo">Comparación de Colegios</h2>
                        <p className="servicio-descripcion">
                            Te ayudamos a comparar diferentes instituciones educativas según tus necesidades y preferencias. Nuestro sistema permite contrastar características clave como metodología, infraestructura, programas académicos y actividades extracurriculares, facilitando una toma de decisión informada para la educación de tus hijos.
                        </p>
                        <div className="servicio-detalles">
                            <div className="servicio-detalle">
                                <span className="detalle-icono">📝</span>
                                <span className="detalle-texto">Análisis personalizado</span>
                            </div>
                            <div className="servicio-detalle">
                                <span className="detalle-icono">📊</span>
                                <span className="detalle-texto">Reportes comparativos</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="servicio-container reverse">
                    <div className="servicio-imagen">
                        <img src={servicioAsesoria} alt="Asesoría Educativa" />
                    </div>
                    <div className="servicio-info">
                        <h2 className="servicio-titulo">Asesoría Educativa</h2>
                        <p className="servicio-descripcion">
                            Contamos con asesores especializados para orientarte en la elección del mejor colegio para tus hijos. Nuestros profesionales tienen amplia experiencia en el sector educativo y pueden brindarte una guía personalizada según las necesidades específicas de aprendizaje y desarrollo de tu hijo.
                        </p>
                        <div className="servicio-detalles">
                            <div className="servicio-detalle">
                                <span className="detalle-icono">👨‍🏫</span>
                                <span className="detalle-texto">Asesores especializados</span>
                            </div>
                            <div className="servicio-detalle">
                                <span className="detalle-icono">🤝</span>
                                <span className="detalle-texto">Atención personalizada</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="servicio-container">
                    <div className="servicio-imagen">
                        <img src={servicioInformacion} alt="Información Actualizada" />
                    </div>
                    <div className="servicio-info">
                        <h2 className="servicio-titulo">Información Actualizada</h2>
                        <p className="servicio-descripcion">
                            Mantenemos información actualizada sobre los mejores colegios, sus metodologías y propuestas educativas. Nuestra base de datos se actualiza regularmente para asegurar que tengas acceso a la información más reciente y relevante sobre las instituciones educativas en Perú.
                        </p>
                        <div className="servicio-detalles">
                            <div className="servicio-detalle">
                                <span className="detalle-icono">📚</span>
                                <span className="detalle-texto">Base de datos completa</span>
                            </div>
                            <div className="servicio-detalle">
                                <span className="detalle-icono">🔄</span>
                                <span className="detalle-texto">Actualizaciones periódicas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Servicios; 