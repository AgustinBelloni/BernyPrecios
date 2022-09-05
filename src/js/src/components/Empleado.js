import React from "react";
import { Card } from "react-bootstrap";

const Empleado = ({
  apellido,
  nombres,
  puesto,
  ausente,
  estado,
  motivo_entrada_tarde,
  area_puesto
}) => {
  return (
    <Card
      className={
        ausente == 2
          ? "Aside__Card mb-1 border-4 border-primary"
          : motivo_entrada_tarde != null
          ? "Aside__Card mb-1 border-4 border-warning"
          : estado == "Presente"
          ? "border-4 Aside__Card mb-1 border-success"
          : "border-4 Aside__Card mb-1 border-danger"
      }
    >
      <div className="Aside__Info-Persona">
        <Card.Title className="Aside__Detalle">
          <b>{nombres + " " + apellido}</b>
        </Card.Title>
        <Card.Text className="Aside__Detalle">
          <b>Puesto:</b> {puesto}{" "}
        </Card.Text>
        <Card.Text className="Aside__Detalle">
          <b>
            Estado:{" "}
            {estado == "Presente"
              ? motivo_entrada_tarde == null
                ? estado
                : estado + " Tarde: " + motivo_entrada_tarde
              : motivo_entrada_tarde != null
              ? estado
              : estado == null
              ? "Ausente"
              : estado}
          </b>
        </Card.Text>
      </div>
    </Card>
  );
};

export default Empleado;