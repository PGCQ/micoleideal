import React, { useEffect } from 'react';
import './Colegios.css';
import { Header, Footer } from '../components';
import colegio1 from '../assets/img/colegio--1.png';
import colegio2 from '../assets/img/colegio--2.png';
import colegio3 from '../assets/img/colegio--3.png';
import colegio4 from '../assets/img/colegio--4.png';

const Colegios = () => {
    // Efecto para animación suave al cargar la página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <div className="colegios-container">
                <h1 className="titulo-principal">Nuestras sedes</h1>

                <div className="sede-container">
                    <div className="sede-imagen">
                        <img src={colegio1} alt="Colegio Alfa" />
                    </div>
                    <div className="sede-info">
                        <h2 className="sede-titulo">Colegio alfa</h2>
                        <p className="sede-descripcion">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                        </p>
                        <div className="sede-detalles">
                            <div className="sede-detalle">
                                <span className="detalle-icono">📍</span>
                                <span className="detalle-texto">Av. Las Palmeras 123, Lima</span>
                            </div>
                            <div className="sede-detalle">
                                <span className="detalle-icono">📞</span>
                                <span className="detalle-texto">+51 987 654 321</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sede-container reverse">
                    <div className="sede-imagen">
                        <img src={colegio2} alt="Colegio Beta" />
                    </div>
                    <div className="sede-info">
                        <h2 className="sede-titulo">Colegio Beta</h2>
                        <p className="sede-descripcion">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                        </p>
                        <div className="sede-detalles">
                            <div className="sede-detalle">
                                <span className="detalle-icono">📍</span>
                                <span className="detalle-texto">Jr. Los Robles 456, Lima</span>
                            </div>
                            <div className="sede-detalle">
                                <span className="detalle-icono">📞</span>
                                <span className="detalle-texto">+51 987 123 456</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sede-container">
                    <div className="sede-imagen">
                        <img src={colegio3} alt="Colegio Teta" />
                    </div>
                    <div className="sede-info">
                        <h2 className="sede-titulo">Colegio Teta</h2>
                        <p className="sede-descripcion">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                        </p>
                        <div className="sede-detalles">
                            <div className="sede-detalle">
                                <span className="detalle-icono">📍</span>
                                <span className="detalle-texto">Av. Arequipa 789, Lima</span>
                            </div>
                            <div className="sede-detalle">
                                <span className="detalle-icono">📞</span>
                                <span className="detalle-texto">+51 999 888 777</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sede-container reverse">
                    <div className="sede-imagen">
                        <img src={colegio4} alt="Sede SJL" />
                    </div>
                    <div className="sede-info">
                        <h2 className="sede-titulo">Sede SJL</h2>
                        <p className="sede-descripcion">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                        </p>
                        <div className="sede-detalles">
                            <div className="sede-detalle">
                                <span className="detalle-icono">📍</span>
                                <span className="detalle-texto">Av. San Juan 101, SJL</span>
                            </div>
                            <div className="sede-detalle">
                                <span className="detalle-icono">📞</span>
                                <span className="detalle-texto">+51 944 555 666</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Colegios;
