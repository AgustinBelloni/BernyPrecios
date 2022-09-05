import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Agenda.css";

const Menu = (props) => {
  const [visitas, setVisitas] = useState([]);
  const [titulo, setTitulo] = useState("Usuario");

  useEffect(() => {
    let urlVisitas = "http://localhost:3033/api/infovisitas";
    fetch(urlVisitas, {
      method: "POST", // or 'PUT'
      body: JSON.stringify({
        usuario: props.usuario.user.usuario,
        // props.usuario.user.usuario
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.usuario.token}`,
      },
    })
      .then((res) => res.json())
      .then((pedrito) => {
        setVisitas(pedrito.visitas);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  useEffect(() => {
    props.usuario.user.nombres + props.usuario.user.apellido
      ? (document.title =
          "¡Hola " +
          props.usuario.user.nombres.toString() +
          " " +
          props.usuario.user.apellido.toString() +
          "!")
      : null;
  }, []);

  return (
    <Container className="containerMenu" fluid>
      <div className="barraEncabezado">
        <div as="h2" className="tEncabezado">
          Menú
          {/* <span style={{marginLeft: "70%"}} className=  " usuario" > USUARIO: {props.usuario.user.usuario} </span> */}
          <Button
            style={{ marginLeft: "1%", marginRight: "1%", cursor: "pointer" }}
            className="float-end mt-3"
            variant="light"
            onClick={() => {
              document.title = "BernyPrecios";
              props.ruta("Login");
            }}
          >
            Cerrar Sesión
          </Button>
        </div>
      </div>

      <Row>
        <Col>
          <div className="rectanguloAgenda">
            <div className="textoSubtitulo">Actividades del día</div>
            <Card.Body>
              <Card.Text>
                <Card className="tarjetaActividadesdelDia">
                  <Card.Text
                    style={{
                      marginLeft: "2%",
                      marginRight: "2%",
                     
                      fontSize: "2.3vh",
                      textAlign: "center",
                    }}
                  ></Card.Text>

                  <Card.Text
                    style={{
                      marginLeft: "2%",
                      marginRight: "2%",
                      marginBottom: "1%",
                      fontSize: "2vh",
                    }}
                  >
                    <strong>Direccion: </strong>
                  </Card.Text>

                  <Card.Text
                    style={{
                      marginLeft: "2%",
                      marginRight: "2%",
                      marginBottom: "1%",
                      fontSize: "2vh",
                    }}
                  >
                    <strong>Télefono:</strong>
                  </Card.Text>

                  <Card.Text
                    style={{
                      marginLeft: "2%",
                      marginRight: "2%",
                      marginBottom: "1%",
                      fontSize: "2vh",
                    }}
                  >
                    <strong>Fecha Visita:</strong>
                  </Card.Text>

                  <Card.Text
                    style={{
                      marginLeft: "2%",
                      marginRight: "2%",
                      marginBottom: "1%",
                      fontSize: "2vh",
                    }}
                  >
                    <strong>Objetivos:</strong>
                  </Card.Text>
                </Card>
                <Card className="tarjetaActividadesdelDia">
                  <Card.Text
                    style={{
                      marginLeft: "2%",
                      marginRight: "2%",
                      marginTop: "1%",
                      fontSize: "2.3vh",
                      textAlign: "center",
                    }}
                  ></Card.Text>

                  <Card.Text
                    style={{
                      marginLeft: "2%",
                      marginRight: "2%",
                      marginBottom: "1%",
                      fontSize: "2vh",
                    }}
                  >
                    <strong>Direccion: </strong>
                  </Card.Text>

                  <Card.Text
                    style={{
                      marginLeft: "2%",
                      marginRight: "2%",
                      marginBottom: "1%",
                      fontSize: "2vh",
                    }}
                  >
                    <strong>Télefono:</strong>
                  </Card.Text>

                  <Card.Text
                    style={{
                      marginLeft: "2%",
                      marginRight: "2%",
                      marginBottom: "1%",
                      fontSize: "2vh",
                    }}
                  >
                    <strong>Fecha Visita:</strong>
                  </Card.Text>

                  <Card.Text
                    style={{
                      marginLeft: "2%",
                      marginRight: "2%",
                      marginBottom: "1%",
                      fontSize: "2vh",
                    }}
                  >
                    <strong>Objetivos:</strong>
                  </Card.Text>
                </Card>
                <Card className="tarjetaActividadesdelDia">
                  <Card.Text
                    style={{
                      marginLeft: "2%",
                      marginRight: "2%",
                      marginTop: "1%",
                      fontSize: "2.3vh",
                      textAlign: "center",
                    }}
                  ></Card.Text>

                  <Card.Text
                    style={{
                      marginLeft: "2%",
                      marginRight: "2%",
                      marginBottom: "1%",
                      fontSize: "2vh",
                    }}
                  >
                    <strong>Direccion: </strong>
                  </Card.Text>

                  <Card.Text
                    style={{
                      marginLeft: "2%",
                      marginRight: "2%",
                      marginBottom: "1%",
                      fontSize: "2vh",
                    }}
                  >
                    <strong>Télefono:</strong>
                  </Card.Text>

                  <Card.Text
                    style={{
                      marginLeft: "2%",
                      marginRight: "2%",
                      marginBottom: "1%",
                      fontSize: "2vh",
                    }}
                  >
                    <strong>Fecha Visita:</strong>
                  </Card.Text>

                  <Card.Text
                    style={{
                      marginLeft: "2%",
                      marginRight: "2%",
                      marginBottom: "1%",
                      fontSize: "2vh",
                    }}
                  >
                    <strong>Objetivos:</strong>
                  </Card.Text>
                </Card>
              </Card.Text>
            </Card.Body>
          </div>
        </Col>
        <Col className="columnaD">
            <div onClick={() => {
              props.ruta("ListasDeProveedores");
            }}
              style={{ cursor: "pointer" }}
              className="buttonMenu  "
            >
              <span className="bTextoMenu">Listas de Proveedores</span>
            </div>

            <div onClick={() => {
              props.ruta("ListasDeCostos");
            }}
              style={{ cursor: "pointer" }}
              className="buttonMenu  "
            >
              <span className="bTextoMenu">Listas de Costos</span>
            </div>
     
            <div onClick={() => {
              props.ruta("ListasDePrecios");
            }}
              style={{ cursor: "pointer" }}
              className="buttonMenu  "
            >
              <span className="bTextoMenu">Listas de Precios</span>
            </div>
         
            <div onClick={() => {
              props.ruta("Informes");
            }} className="buttonMenu " style={{ cursor: "pointer" }}>
              <span className="bTextoMenu">Informes</span>
            </div>

            <div onClick={() => {
              props.ruta("Configuracion");
            }} className="buttonMenu" style={{ cursor: "pointer" }}>
              <span className="bTextoMenu">Configuración</span>
            </div>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
