import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/testimonio-emma.png")}
        alt="imagen testimonio Emma"
      />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          {props.nombre} in {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} at {props.empresa}
        </p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}
export default Testimonio;
