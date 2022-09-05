import React, { useState } from 'react';
import Login from './src/Login';
import Menu from './src/Menu';

import ListasDeProveedores from './src/ListasDeProveedores';
import ListasDeCostos from './src/ListasDeCostos';
import ListasdePrecios from './src/ListasdePrecios';
import Configuracion from './src/Configuracion';
import Informes from './src/Informes';
import './index.scss';

const App = () => {
    console.log("entro a la app")
    const [vista, setVista] = useState("Login")
    const [datosUsuario, setDatosUsuario] = useState({
        "user": {
            "id_usuario": 433,
            "usuario": "agustinbe",
            "empleado_id": 428,
            "apellido": "Belloni",
            "nombres": "Agustin",
            "sucursal": [
                2385
            ],
            "jornada_reducida": 0,
            "puesto": "Sin especificar"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXIiOiJhZ3VzdGluYmUiLCJwYXNzd29yZCI6IjAifSwiaWF0IjoxNjYyMDU5MDE5LCJleHAiOjE2NjIwOTUwMTl9.xDGqb8utZBxGzoOkuHq5sYb-ICPXpWUG7AHtgSQhqCs"
    })
    
    const cambioRuta = (colocar_ruta) => {
        setVista(colocar_ruta)
    }

    const agregarInformacionUsuario = (informacion) => {
        console.log("AQUI PASA")
        console.log(informacion)
        //setDatosUsuario({})
         setDatosUsuario(informacion)
    }

    const seleccionarCliente = (informacion) => {
        setSeleccionCliente(informacion)
    }

    switch (vista) {
        case "Login":
            return (<Login ruta={cambioRuta} agregarUsuario={agregarInformacionUsuario} />)

        case "Menu":
            return (<Menu ruta={cambioRuta} usuario={datosUsuario} />)

        case "ListasDeProveedores":
            return (<ListasDeProveedores ruta={cambioRuta} usuario={datosUsuario} />)

        case "ListasDeCostos":
            return (<ListasDeCostos ruta={cambioRuta}  usuario={datosUsuario}  />)

        case "ListasDePrecios":
            return (<ListasdePrecios ruta={cambioRuta} usuario={datosUsuario} />)

        case "Configuracion":
            return (<Configuracion ruta={cambioRuta}  usuario={datosUsuario}  />)

        case "Informes":
            return (<Informes ruta={cambioRuta} usuario={datosUsuario} />)

        // <Route path="/"
    }
}

export default App;