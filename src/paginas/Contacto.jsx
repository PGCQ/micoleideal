import React from "react";
import './Contacto.css';
import { Footer, Header } from '../components'
import imagen from '../assets/img/contacto.png'

const Contacto = () => {
    return(
        <div>
            <Header></Header>
            <div className="contacto-container">
               {/* Formulario */}
      <form className="contacto-formulario">
        <h2>Contáctanos</h2>

        <label>
          Nombre
          <input type="text" name="nombre" placeholder="Tu nombre" required />
        </label>

        <label>
          Correo electrónico
          <input type="email" name="correo" placeholder="correo@ejemplo.com" required />
        </label>

        <label>
          Número telefónico
          <input type="tel" name="telefono" placeholder="123 456 789" />
        </label>

        <label>
          Mensaje
          <textarea name="mensaje" placeholder="Escribe tu mensaje o referencia" rows="4"></textarea>
        </label>

        <button type="submit">Enviar</button>
      </form>

      {/* Imagen */}
      <div className="contacto-imagen">
        <img src={imagen} alt="Imagen de contacto" />
      </div>
    </div>
            <Footer></Footer>
       </div>

    );

};

export default Contacto;