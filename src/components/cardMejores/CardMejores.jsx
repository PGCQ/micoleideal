import React from 'react'
import "./styles.scss"

const CardMejores = ({ titulo, descripcion, imagen }) => {
    return (
        <div className="CardMejoras">
            <div
                className="CardMejoras-imagen"
                style={{ backgroundImage: `url(${imagen})` }}></div>
            <div className="CardMejoras-contenido">
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
            </div>
        </div>

    )
}

export default CardMejores