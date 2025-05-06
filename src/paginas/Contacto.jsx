import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Contacto.css';
import { Footer } from '../components';
import Header from '../components/header/index';
import imagen from '../assets/img/contacto.png';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    dni: '',
    telefono: '',
    mensaje: '',
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);
  
  // Añadir efecto para desplazar al inicio de la página cuando se carga
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validar = () => {
    const nuevosErrores = {};

    if (!formData.correo || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.correo)) {
      nuevosErrores.correo = 'Correo electrónico inválido';
    }

    if (!/^\d{8}$/.test(formData.dni)) {
      nuevosErrores.dni = 'El DNI debe tener 8 dígitos';
    }

    if (!/^\+51\d{9}$/.test(formData.telefono)) {
      nuevosErrores.telefono = 'Debe comenzar con +51 y tener 9 dígitos adicionales';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      console.log('Formulario enviado:', formData);

      // Limpiar formulario
      setFormData({
        nombre: '',
        correo: '',
        dni: '',
        telefono: '',
        mensaje: '',
      });

      setErrores({});
      setEnviado(true);

      // Ocultar mensaje después de unos segundos
      setTimeout(() => setEnviado(false), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      
      <div className="contacto-page">
        <h1 className="titulo-principal">Contáctanos</h1>
        
        <div className="contacto-contenido">
          <div className="contacto-info-card">
            <div className="contacto-info-header">
              <h2>Información de Contacto</h2>
              <p>Estamos aquí para ayudarte a encontrar el mejor colegio para tu hijo</p>
            </div>
            
            <div className="contacto-info-detalle">
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h3>Dirección</h3>
                  <p>Av. Las Palmeras 123, Lima, Perú</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaPhone className="info-icon" />
                <div>
                  <h3>Teléfono</h3>
                  <p>+51 987 654 321</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <h3>Email</h3>
                  <p>info@micole.edu.pe</p>
                </div>
              </div>
            </div>
            
            <div className="contacto-redes">
              <h3>Síguenos</h3>
              <div className="redes-iconos">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="red-social">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="red-social">
                  <FaFacebookF />
                </a>
                <a href="https://wa.me/51987654321" target="_blank" rel="noopener noreferrer" className="red-social">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            
            <div className="contacto-imagen">
              <img src={imagen} alt="Contacto" />
            </div>
          </div>
          
          <div className="contacto-formulario-card">
            <form onSubmit={handleSubmit} className="formulario">
              <h2>Envíanos un mensaje</h2>
              <p className="form-desc">Completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>
              
              <div className="form-grupo">
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  placeholder="Ingresa tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-grupo">
                <label htmlFor="correo">Correo electrónico</label>
                <input
                  id="correo"
                  type="email"
                  name="correo"
                  placeholder="ejemplo@correo.com"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                />
                {errores.correo && <p className="error">{errores.correo}</p>}
              </div>

              <div className="form-fila">
                <div className="form-grupo">
                  <label htmlFor="dni">DNI</label>
                  <input
                    id="dni"
                    type="text"
                    name="dni"
                    placeholder="12345678"
                    maxLength="8"
                    value={formData.dni}
                    onChange={handleChange}
                    required
                  />
                  {errores.dni && <p className="error">{errores.dni}</p>}
                </div>

                <div className="form-grupo">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    id="telefono"
                    type="text"
                    name="telefono"
                    placeholder="+51987654321"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                  {errores.telefono && <p className="error">{errores.telefono}</p>}
                </div>
              </div>

              <div className="form-grupo">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="¿En qué podemos ayudarte?"
                  rows="4"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-enviar">Enviar mensaje</button>

              {enviado && <div className="mensaje-exito">
                <p>¡Mensaje enviado con éxito!</p>
                <p>Nos pondremos en contacto contigo pronto.</p>
              </div>}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contacto;