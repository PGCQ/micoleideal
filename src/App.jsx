import './App.css';
import { Footer, Header } from './components'

function App() {
  return (
    <div className="App">
      <Header></Header>

      <main>
        {/* 3. Sección "Academias de Perú" */}
        <section className="seccion-academias">
          <h2>Las mejores academias de Perú</h2>
          <div className="tarjetas-1">
            <div className="tarjeta-2">
              <div className="imagen-leccion-placeholder">

              </div>
              <h3>Academia de Inglés</h3>
              <p>Aprende inglés con los mejores profesores de Perú, gramatica, vocabulario, conversacion, etc</p>
            </div>
            <div className="tarjeta-2">
              <div className="imagen-leccion-placeholder lesson__matematica"></div>
              <h3>Aprende Matemática</h3>
              <p>Aprende matemática con los mejores profesores de Perú razonamiento matematico, aritmetica, algebra, geometria, trigonometria, calculo, etc</p>
            </div>
            <div className="tarjeta-2">
              <div className="imagen-leccion-placeholder lesson__RendimientoAcademico"></div>
              <h3>Rendimiento Académico</h3>
              <p>Mejor en los cursos que no sientes que no aprendes, aqui tienes la solucion aqui te mostraremos la forma de mejorar tu rendimiento academico</p>
            </div>
          </div>
          <button className="read-more-btn">MAS INFORMACIÓN</button>
        </section>

        {/* 4. Sección "Science Experiment" */}
        <section className="info-micole">
          <div className="info-text">
            <h3>Mi Cole buscamos por ti la mejor calidad de estudio</h3>
            <p>En mi colegio buscamos por ti la mejor calidad de estudio, para que puedas tener un mejor rendimiento academico, y asi poder tener un futuro mas brillante dando la informacion de los mejores colegios de Perú</p>
            <button className="read-more-btn">SOBRE NOSOTROS</button>
          </div>
          <div className="info-image-micole"></div>
        </section>

        <section className="seccion-servicio">
          <div className="seccion-servicio-imagen"></div>
          <div className="seccion-servicio-text">
            <h3>Brindamos servicios de calidad para tu hijo</h3>
            <p>En Mi Cole buscamos por ti la mejor calidad de estudio, para que puedas tener un mejor rendimiento academico, y asi poder tener un futuro mas brillante dando la informacion de los mejores colegios de Perú tambien armamos la mejor estudio academico para tu hijo escribanos en nuestras redes sociales precione el boton para saber mas información</p>
            <button className="read-more-btn">Servicio</button>
          </div>
        </section>
      </main>

      <Footer></Footer>

    </div>
  );
}

export default App;
