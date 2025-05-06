import React, { useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Instituciones.css';
import { Footer } from '../components';
import Header from '../components/header/index';

// Importar imágenes para asegurar que se cargan correctamente
import reinaMundoImg from '../assets/img/ReinadelMundo.png';
import sanIgnacioImg from '../assets/img/San Ignacio de Recalde School.png';
import laSalleImg from '../assets/img/La Salle.png';
import colegio4Img from '../assets/img/colegio4.jpg';
import academia2Img from '../assets/img/academia-2.jpg';

const Instituciones = () => {
    // Añadir efecto para desplazar al inicio de la página cuando se carga
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <div className='instituciones-container'>
                <h1 className='titulo-principal'>Academias</h1>
                <div className='top-section'>
                    <div className='image-row'>
                    <button className='button-flecha'><div className='arrow-left'></div></button>
                        <div className='image-card'>
                            <img src={reinaMundoImg} alt='Institución educativa' className='equal-image' />
                            <div className='image-text'>
                                <h3>Academia Cambridge</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                            </div>
                        </div>
                        <div className='image-card'>
                            <img src={sanIgnacioImg} alt='Salón de clases' className='equal-image' />
                            <div className='image-text'>
                                <h3>Academia Oxford</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                            </div>
                        </div>
                        <div className='image-card'>
                            <img src={laSalleImg} alt='Estudiantes' className='equal-image'  />
                            <div className='image-text'>
                                <h3>Academia Einstein</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                            </div>
                        </div>
                        <button className='button-flecha'><div className='arrow-right'></div></button>
                    </div>
                    <button className='center-button'>VER MÁS</button>
                </div>

                <div className='middle-section'>
                    <div className='large-image-card'>
                        <img src={colegio4Img} alt='Cancha deportiva' />
                        <div className='side-text'>
                            <h3>Academia Newton</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                        </div>
                    </div>
                </div>

                <div className='bottom-section'>
                    <div className='large-image-card'>
                        <div className='side-text'>
                            <h3>Academia Edison</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui</p>
                        </div>
                        <img src={academia2Img} alt='Edificio escolar' />
                    </div>
                </div>  
            </div>
            <Footer />
        </>
    )
}

export default Instituciones;