import React from "react";

export const Datos = ({clientes, setUltimasVisitas, setInfoCliente, props, setEquipos, setPropuesta, setVentas,vercards  }) => {





    return (
        <div style={{ flexWrap: 'wrap' }} className={'verMas ms-3'}>

                            {clientes.map((element, key) => {
                                return (
                                    <div key={key} onClick={() => {
                                        console.log(element)
                                        setInfoCliente(element)
                                        let url = "http://localhost:3033/api/ultimasvisitascliente"
                                        fetch(url, {
                                            method: 'POST', // or 'PUT'
                                            body: JSON.stringify({
                                                "cliente_id": element.cliente_id
                                                // "id_usuario":props.usuario.usuario
                                            }), // data can be `string` or {object}!
                                            headers: {
                                                'Content-Type': 'application/json',
                                                'Authorization': `Bearer ${props.usuario.token}`
                                            }
                                        })
                                            .then(res => res.json())
                                            .then(data => {
                                                setUltimasVisitas(data.data)
                                                let url = "http://localhost:3033/api/equipoclienteid"
                                                fetch(url, {
                                                    method: 'POST', // or 'PUT'
                                                    body: JSON.stringify({
                                                        "cliente_id": element.cliente_id
                                                        // "id_usuario":props.usuario.usuario
                                                    }), // data can be `string` or {object}!
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                        'Authorization': `Bearer ${props.usuario.token}`
                                                    }
                                                })
                                                    .then(res => res.json())
                                                    
                                                    .then(data => {
                                                        setEquipos(data.data)

                                                        let url = "http://localhost:3033/api/propuestasporclienteid"
                                                        fetch(url, {
                                                            method: 'POST', // or 'PUT'
                                                            body: JSON.stringify({
                                                                "cliente_id": element.cliente_id
                                                                // "id_usuario":props.usuario.usuario
                                                            }), // data can be `string` or {object}!
                                                            headers: {
                                                                'Content-Type': 'application/json',
                                                                'Authorization': `Bearer ${props.usuario.token}`
                                                            }
                                                        })
                                                            .then(res => res.json())
                                                            .then(data => {
                                                                setPropuesta(data.data)
                                                                let url = "http://localhost:3033/api/propuestaventasporclienteid"
                                                                fetch(url, {
                                                                    method: 'POST', // or 'PUT'
                                                                    body: JSON.stringify({
                                                                        "cliente_id": element.cliente_id
                                                                        // "id_usuario":props.usuario.usuario
                                                                    }), // data can be `string` or {object}!
                                                                    headers: {
                                                                        'Content-Type': 'application/json',
                                                                        'Authorization': `Bearer ${props.usuario.token}`
                                                                    }
                                                                })
                                                                    .then(res => res.json())
                                                                    .then(data => {
                                                                        setVentas(data.data)
                                                                    })
                                                                    .catch(error => console.error('Error:', error))

                                                            })
                                                            .catch(error => console.error('Error:', error))

                                                    })
                                                    .catch(error => console.error('Error:', error))
                                            })
                                            .catch(error => console.error('Error:', error))

                                    }}>
                                       { vercards&& <div className='boxCliente mt-1 mx-1' >
                                            <div className='ms-2'>{element.nombre_cliente}</div>
                                             {/* <div className='textInfo'><span style={{marginRight:"35%"}}> { props.usuario.user.nombres  +" "+ props.usuario.user.apellido}</span> */}<div className='textInfo'>
                                             <span>  {element.privado === 1 ? "Privado" : "Público"}</span></div>
                                           
                                        </div> }
                                    </div>
                                )
                            })}

                        </div>
    )
}