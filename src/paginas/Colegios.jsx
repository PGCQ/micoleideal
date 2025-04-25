
import React from 'react';

const colegios = [
  {
    nombre: 'Colegio San Martín',
    resumen: 'Ubicado en el centro de la ciudad, destaca por su excelencia académica.',
    imagen: 'https://picsum.photos/250/160?random=1',
  },
  {
    nombre: 'Colegio El Bosque',
    resumen: 'Rodeado de naturaleza, fomenta el aprendizaje ecológico.',
    imagen: 'https://picsum.photos/250/160?random=2',
  },
  {
    nombre: 'Colegio Innovar',
    resumen: 'Famoso por su enfoque tecnológico y laboratorios de punta.',
    imagen: 'https://picsum.photos/250/160?random=3',
  },
  {
    nombre: 'Colegio Bicentenario',
    resumen: 'Con más de 100 años de historia, tradición y cultura educativa.',
    imagen: 'https://picsum.photos/250/160?random=4',
  },
];

const Colegios = () => {
  return (
    <div className="colegios-container">
      {colegios.map((colegio, index) => (
        <div
          className={`colegio-card ${index % 2 !== 0 ? 'invertido' : ''}`}
          key={index}
        >
          <img src={colegio.imagen} alt={colegio.nombre} />
          <div className="info">
            <h2>{colegio.nombre}</h2>
            <p>{colegio.resumen}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Colegios;
