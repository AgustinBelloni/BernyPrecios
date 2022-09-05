import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Card,
  Toast,
} from "react-bootstrap";
import "./Agenda.css";

const ListasDeProveedores = (props) => {

  return (
    <Container fluid className="custom-container">
      <h4>Hola Mundo, soy LISTA DE PROVEEDORES 😂😂😂</h4>
      <Button
        onClick={() => {
        props.ruta("Menu");
      }} 
      >VOLVER</Button>
    </Container>
  );
};

export default ListasDeProveedores;
