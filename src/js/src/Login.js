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
const Principal = (props) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [incorrecto, setIncorrecto] = useState(false);
  const [err, setMensajeErr] = useState(false);
  const [enviando, setEnviando] = useState(false);



  const funcLogin = () => {
    let url = "http://190.246.216.236:3033/";
    //let url = "http://127.0.0.1:3033/";
    setEnviando(true);
    fetch(url + "login", {
      method: "POST",
      body: JSON.stringify({
        user: usuario,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        props.agregarUsuario(data);
        console.log("Fetch Login");
        if (data.user) {
          fetch(url + "verificaringreso", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              empleado_id: data.user.empleado_id,
            }),
          })
            .then((res2) => res2.json())
            .then(props.ruta("Menu"))
        } else {
          setMensajeErr("Su usuario o contraseña es incorrecto");
          setIncorrecto(true)
          setEnviando(false);
        }
      })
      .catch(
        (err) =>
          err &&
          (setMensajeErr("El servidor no está disponible."),
          setEnviando(false))
      );
  };

  return (
    <Container fluid className="custom-container">
      <Row>
        <Col sm={4}>
          {/* <Card.Img src='./src/js/src/fondoadn.jpg'/> */}
          <div className="rectanguloLogin">
            <div
              src="./src/js/src/logocarga.png"
              className="logoCarga"
              alt="logocarga.png"
            />

            <Card.Body>
              <div className="titulo">BernyPrecios</div>
              <h1 className="tLogin mx-5 text-center">Login</h1>
              <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <input
                    type="text"
                    className="input mt-3 mb-2"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(event) => setUsuario(event.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-2 align-center"
                  controlId="formPlaintextPassword"
                >
                  <input
                    type="password"
                    className="input"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    onKeyPress={(event) => {
                      if (!enviando && event.key === "Enter") {
                        funcLogin();
                      }
                    }}
                  />
                </Form.Group>
              </Form>

              <Button
                disabled={enviando}
                id="btn"
                className="buttonLogin mt-4"
                style={{
                    borderRadius: "70px",
                    background: "#1052B4",
                    border: "3px solid #1052B4",
                  }}
                onClick={() => {
                  funcLogin();
                }}
              >
                {enviando ? (
                  <>
                    <Spinner animation="border" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  "Ingresar"
                )}
              </Button>
              {/* <Button
                className="buttonLogin mt-4"
                style={{
                  borderRadius: "70px",
                  background: "#1052B4",
                  border: "3px solid #1052B4",
                }}
                onClick={() => {
                  // props.ruta("otro")
                  let url = "http://localhost:3033/login";
                  fetch(url, {
                    method: "POST", // or 'PUT'
                    body: JSON.stringify({
                      user: usuario,
                      password: password,
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data);
                      //   props.ruta("otro")
                      if (data.Ingresa == false) {
                        setIncorrecto(true);
                        setUsuario("");
                        setPassword("");
                      } else {
                        setIncorrecto(false);
                        props.agregarUsuario(data);
                        props.ruta("Menu");
                      }
                    })
                    .catch((error) => console.error("Error:", error));
                }}
              >
                <div className="tBLogin">Ingresar</div>
              </Button> */}
            </Card.Body>
            {incorrecto ? (
              <Toast show = {incorrecto} onClose={()=>setIncorrecto(false)}>
                <Toast.Header className="toastHeader">
                  <strong>Usuario Incorrecto</strong>
                </Toast.Header>
                <Toast.Body className="toastBody">
                  Vuelva a intentarlo
                </Toast.Body>
              </Toast>
            ) : (
              ""
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Principal;
