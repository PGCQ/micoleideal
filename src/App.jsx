import './App.css';
import { Footer, Header, CardMejores } from './components'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import imagenColegio2 from './assets/img/colegio-2.png'
import imagenAcademia2 from './assets/img/academia-2.jpg'
import imagenAcademia3 from './assets/img/academia-3.jpg'

function App() {
  // Efecto para desplazar al inicio de la página cuando se carga
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mejoresAcademias = [
    { id: 1, imagen: imagenColegio2, nombre: "Academia de Inglés", descripcion: "Aprende inglés con los mejores profesores de Perú, gramática, vocabulario, conversación, etc" },
    { id: 2, imagen: imagenAcademia2, nombre: "Academia de Matemáticas", descripcion: "Aprende matemáticas con los mejores profesores de Perú, razonamiento matemático, aritmética, álgebra, geometría, trigonometría, cálculo, etc" },
    { id: 3, imagen: imagenAcademia3, nombre: "Rendimiento Académico", descripcion: "Mejora en los cursos que no sientes que no aprendes, aquí tienes la solución aquí te mostraremos la forma de mejorar tu rendimiento académico" }
  ]

  return (
    <div className="App">
      <Header></Header>
      <main>
        {/* 3. Sección "Academias de Perú" */}
        <section className="seccion-academias">
          <h2>Las mejores academias de Perú</h2>
          <div className="tarjetas-1">
            {mejoresAcademias.map(academia => (<CardMejores
              key={academia.id}
              imagen={academia.imagen}
              titulo={academia.nombre}
              descripcion={academia.descripcion}>
            </CardMejores>))}
          </div>
          <Link to="/informacion" className="read-more-btn">MAS INFORMACIÓN</Link>
        </section>

        {/* 4. Sección "Science Experiment" */}
        <section className="info-micole">
          <div className="info-text">
            <h3>Mi Cole buscamos por ti la mejor calidad de estudio</h3>
            <p>En mi colegio buscamos por ti la mejor calidad de estudio, para que puedas tener un mejor rendimiento academico, y asi poder tener un futuro mas brillante dando la informacion de los mejores colegios de Perú</p>
            <Link to="/nosotros" className="read-more-btn">SOBRE NOSOTROS</Link>
          </div>
          <div className="info-image-micole"></div>
        </section>

        <section className="seccion-servicio">
          <div className="seccion-servicio-imagen"></div>
          <div className="seccion-servicio-text">
            <h3>Brindamos servicios de calidad para tu hijo</h3>
            <p>En Mi Cole buscamos por ti la mejor calidad de estudio, para que puedas tener un mejor rendimiento academico, y asi poder tener un futuro mas brillante dando la informacion de los mejores colegios de Perú tambien armamos la mejor estudio academico para tu hijo escribanos en nuestras redes sociales precione el boton para saber mas información</p>
            <Link to="/servicios" className="read-more-btn">Servicio</Link>
          </div>
        </section>
      </main>

      <Footer></Footer>

    </div>
  );
}

export default App;
