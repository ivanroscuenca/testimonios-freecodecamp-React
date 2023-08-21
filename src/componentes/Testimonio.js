import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`imagen testimonio de ${props.nombre}`}
      />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">
          {`"${props.testimonioIntro}`}
          <strong>{props.testimonioDestacado}</strong>
          {` ${props.testimonioFinal}"`}
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
