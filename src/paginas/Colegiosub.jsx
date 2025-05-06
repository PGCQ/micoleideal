import React, { useEffect } from 'react';
import { FaBook, FaUserGraduate, FaChalkboardTeacher, FaMedal, FaCalendarAlt, FaLaptop } from 'react-icons/fa';
import './Colegiosub.css';
import { Footer } from '../components';
import Header from '../components/header/index';

// Importar imágenes para asegurar que se cargan correctamente
import hiramBinghamImg from '../assets/img/Hiram Bingham.png';
import sanIgnacioImg from '../assets/img/San Ignacio de Recalde School.png';
import casuarinasImg from '../assets/img/Casuarinas.png';
import reinaMundoImg from '../assets/img/ReinadelMundo.png';
import laSalleImg from '../assets/img/La Salle.png';

const Colegiosub = () => {
    // Añadir efecto para desplazar al inicio de la página cuando se carga
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <div className='colegios-container'>
                <h1 className='titulo-principal'>Nuestros Colegios</h1>
                
                {/* Sección de Top Colegios */}
                <div className='featured-section'>
                    <h2 className='section-title'>Colegios destacados</h2>
                    <p className='section-subtitle'>Conoce los mejores colegios privados de Lima</p>
                    
                    <div className='colleges-grid'>
                        <div className='college-card'>
                            <div className='college-image'>
                                <img src={hiramBinghamImg} alt='Hiram Bingham' />
                                <div className='college-badge'>Top 1</div>
                            </div>
                            <div className='college-content'>
                                <h3>Hiram Bingham</h3>
                                <p className='college-location'>
                                    <FaMapMarkerIcon /> Surco, Lima
                                </p>
                                <div className='college-features'>
                                    <span><FaBook /> IB Program</span>
                                    <span><FaUserGraduate /> Bilingüe</span>
                                    <span><FaChalkboardTeacher /> Cambridge</span>
                                </div>
                                <p className='college-description'>
                                    El Colegio Hiram Bingham se caracteriza por su excelencia académica y formación integral, preparando a los estudiantes para un futuro global con un enfoque en valores.
                                </p>
                                <button className='view-details-btn'>Ver detalles</button>
                            </div>
                        </div>
                        
                        <div className='college-card'>
                            <div className='college-image'>
                                <img src={sanIgnacioImg} alt='San Ignacio de Recalde' />
                                <div className='college-badge'>Top 2</div>
                            </div>
                            <div className='college-content'>
                                <h3>San Ignacio de Recalde</h3>
                                <p className='college-location'>
                                    <FaMapMarkerIcon /> La Molina, Lima
                                </p>
                                <div className='college-features'>
                                    <span><FaBook /> Bachillerato</span>
                                    <span><FaUserGraduate /> Bilingüe</span>
                                    <span><FaMedal /> Deportes</span>
                                </div>
                                <p className='college-description'>
                                    San Ignacio de Recalde ofrece una formación basada en valores católicos con un alto nivel académico y enfoque internacional, desarrollando competencias para la vida.
                                </p>
                                <button className='view-details-btn'>Ver detalles</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Sección Todos los Colegios */}
                <div className='all-colleges-section'>
                    <h2 className='section-title'>Todos los Colegios</h2>
                    
                    <div className='colleges-filters'>
                        <button className='filter-btn active'>Todos</button>
                        <button className='filter-btn'>Bilingües</button>
                        <button className='filter-btn'>IB</button>
                        <button className='filter-btn'>Católicos</button>
                        <button className='filter-btn'>Laicos</button>
                    </div>
                    
                    <div className='colleges-row'>
                        <div className='college-item'>
                            <img src={casuarinasImg} alt='Casuarinas' />
                            <div className='college-item-overlay'>
                                <h4>Casuarinas</h4>
                                <p>Excelencia académica y formación en valores</p>
                                <div className='college-tags'>
                                    <span>Bilingüe</span>
                                    <span>IB</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className='college-item'>
                            <img src={reinaMundoImg} alt='Reina del Mundo' />
                            <div className='college-item-overlay'>
                                <h4>Reina del Mundo</h4>
                                <p>Educación católica con valores cristianos</p>
                                <div className='college-tags'>
                                    <span>Católico</span>
                                    <span>Valores</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className='college-item'>
                            <img src={laSalleImg} alt='La Salle' />
                            <div className='college-item-overlay'>
                                <h4>La Salle</h4>
                                <p>Formación integral según la pedagogía lasallista</p>
                                <div className='college-tags'>
                                    <span>Católico</span>
                                    <span>Tradicional</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button className='load-more-btn'>Ver más colegios</button>
                </div>
                
                {/* Sección Comparar */}
                <div className='compare-section'>
                    <div className='compare-card'>
                        <div className='compare-content'>
                            <h2>Compara colegios</h2>
                            <p>Utiliza nuestra herramienta para comparar hasta 3 colegios y encontrar la mejor opción para tu hijo</p>
                            <div className='compare-features'>
                                <div className='feature-item'>
                                    <FaCalendarAlt className='feature-icon' />
                                    <span>Calendarios académicos</span>
                                </div>
                                <div className='feature-item'>
                                    <FaBook className='feature-icon' />
                                    <span>Currículos educativos</span>
                                </div>
                                <div className='feature-item'>
                                    <FaLaptop className='feature-icon' />
                                    <span>Infraestructura tecnológica</span>
                                </div>
                            </div>
                            <button className='compare-btn'>Comparar ahora</button>
                        </div>
                        <div className='compare-image'>
                            <img src={hiramBinghamImg} alt='Comparar colegios' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

// Componente icono temporal
const FaMapMarkerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    </svg>
);

export default Colegiosub;
