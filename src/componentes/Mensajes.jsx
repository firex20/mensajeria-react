import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Redactar from './Redactar';
import VistaMensajes from './VistaMensajes';
import Alerta from './Alerta';
import { useState } from 'react';

const Mensajes = ({show, usuario}) => {

    const objAlerta = {
        visible:false,
        texto:''
    }

    const [alerta, setAlerta] = useState(objAlerta);

    const [mensajes, setMensajes] = useState(usuario.buzon);

    let entrantes = mensajes.filter(mensaje => mensaje.remitente.toLowerCase() !== usuario.nombre.toLowerCase());
    let salientes = mensajes.filter(mensaje => mensaje.remitente.toLowerCase() === usuario.nombre.toLowerCase());

    function borrarMensaje (id) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ accion: 'borrarmensaje', id: id })
        }
        fetch('http://localhost:8000/index.php', requestOptions)
                .then(response => response.json())
                .then(datos => {
                    let objAlerta = {};
                    if (datos.exito) {
                        objAlerta = {
                            visible:true,
                            texto:'El mensaje se ha eliminado con exito'
                        }
                    }else{
                        objAlerta = {
                            visible:true,
                            texto:'Ha habido algun error al borrar el mensaje'
                        }
                    }
                    setAlerta(objAlerta);
                    leerMensajes(usuario);
                })
        }

    function leerMensajes (usuario) {
        var usuarioSimple = {
            nombre: usuario.nombre,
            clave: usuario.clave
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ accion: 'leermensajes', usuario: usuarioSimple })
        }

        fetch('http://localhost:8000/index.php', requestOptions)
                .then(response => response.json())
                .then(datos => {
                    setMensajes(datos);
                })
    }

    function enviarMensaje(mensaje) {

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ accion: 'enviarmensaje', mensaje: mensaje })
        }
    
        fetch('http://localhost:8000/index.php', requestOptions)
                .then(response => response.json())
                .then(datos => {
                    let objAlerta = {};
                    if (datos.exito) {
                        objAlerta = {
                            visible:true,
                            texto:'Mensaje enviado con exito'
                        }
                    }else{
                        objAlerta = {
                            visible:true,
                            texto:'Error al enviar el mensaje'
                        }
                    }
                    setAlerta(objAlerta);
                    leerMensajes(usuario);
                })
    }

    return (
        show && 
        <div>
        <Alerta alerta={alerta} texto={alerta} onCerrar={() => {
            setAlerta(objAlerta);
        }}/>
        <Tabs
        defaultActiveKey="Entrantes"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Entrantes" title="Entrantes">
            <VistaMensajes mensajes={entrantes} onBorrar={function (id) {
                borrarMensaje(id);
            }} tipo="entrantes"/>
        </Tab>
        <Tab eventKey="Salientes" title="Salientes">
            <VistaMensajes mensajes={salientes} onBorrar={function (id) {
                borrarMensaje(id);
            }} tipo="salientes"/>
        </Tab>
        <Tab eventKey="Redactar" title="Redactar">
            <Redactar usuario={usuario} onEnviar={enviarMensaje}/>
        </Tab>
      </Tabs></div>
                
    );
}

export default Mensajes;