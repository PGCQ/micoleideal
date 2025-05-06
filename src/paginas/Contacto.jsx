import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import './Contacto.css';
import { Footer } from '../components';
import Header from '../components/header/index';
import imagen from '../assets/img/contacto.png'

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

      <div className="contacto-container">
        <form onSubmit={handleSubmit} className="formulario">
          <h2>Contáctanos</h2>

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
          />

          <div>
            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
              value={formData.correo}
              onChange={handleChange}
            />
            {errores.correo && <p className="error">{errores.correo}</p>}
          </div>

          <div>
            <input
              type="text"
              name="dni"
              placeholder="DNI"
              maxLength="8"
              value={formData.dni}
              onChange={handleChange}
            />
            {errores.dni && <p className="error">{errores.dni}</p>}
          </div>

          <div>
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono (ej. +51987654321)"
              value={formData.telefono}
              onChange={handleChange}
            />
            {errores.telefono && <p className="error">{errores.telefono}</p>}
          </div>

          <textarea
            name="mensaje"
            placeholder="Mensaje o referencia"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
          />

          <button type="submit">Enviar</button>

          {enviado && <p className="mensaje-exito">Formulario enviado correctamente.</p>}
        </form>

        <div className="imagen-social">
          <img src={imagen} alt="Imagen de contacto" />
          <div className="iconos">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/51987654321" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contacto;