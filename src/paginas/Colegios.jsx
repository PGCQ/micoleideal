import React from 'react';
import './Colegios.css';
import NavigationBar from '../components/navegacion';
import Footer from '../components/footer';
import colegio1 from '../assets/img/colegio--1.png';
import colegio2 from '../assets/img/colegio--2.png';
import colegio3 from '../assets/img/colegio--3.png';
import colegio4 from '../assets/img/colegio--4.png';

const Colegios = () => {
    return (
        <>
            <NavigationBar />
            <div className="colegios-container">
                <h1 className="titulo-principal">Nuestras sedes</h1>
                
                <div className="sede-container">
                    <div className="sede-imagen">
                        <img src={colegio1} alt="Colegio Alfa" />
                    </div>
                    <div className="sede-info">
                        <h2 className="sede-titulo">Colegio alfa</h2>
                        <p className="sede-descripcion">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
                
                <div className="sede-container reverse">
                    <div className="sede-info">
                        <h2 className="sede-titulo">Colegio Beta</h2>
                        <p className="sede-descripcion">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="sede-imagen">
                        <img src={colegio2} alt="Colegio Beta" />
                    </div>
                </div>
                
                <div className="sede-container">
                    <div className="sede-imagen">
                        <img src={colegio3} alt="Colegio Teta" />
                    </div>
                    <div className="sede-info">
                        <h2 className="sede-titulo">Colegio Teta</h2>
                        <p className="sede-descripcion">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
                
                <div className="sede-container reverse">
                    <div className="sede-info">
                        <h2 className="sede-titulo">Sede SJL</h2>
                        <p className="sede-descripcion">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="sede-imagen">
                        <img src={colegio4} alt="Sede SJL" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Colegios;
