import { useCallback, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Destinatarios from './Destinatarios';

const Redactar = ({url, usuario, onEnviar, alerta, setAlerta}) => {

  const [destinatarios, setDestinatarios] = useState([]);
  const [destqu, setDestqu] = useState(1);

  useEffect(() => {
    var user = {
      nombre: usuario.nombre,
      clave: usuario.clave,
      nombreCompleto: ''
    }
    var requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ accion: 'leerdestinatarios', usuario: user })
    };

    fetch(url, requestOptions)
            .then(response => response.json())
            .then(datos => {
              setDestinatarios(datos);
            })
   }, [usuario, url]);

    const enviarMensaje = useCallback(() => {

      let asunto = document.getElementById("asunto").value;
      let cuerpo = document.getElementById("cuerpo").value;
      let i = 0;
      let repeated_dest = [];

      for (i = 0; i < destqu; i++) {
        let destinatario = document.getElementById('select'+i).value;

        if (repeated_dest.find(repe => repe === destinatario) === undefined){

          const mensaje = {
            remitente:usuario.nombre,
            destinatario: destinatario,
            asunto: asunto,
            cuerpo: cuerpo
          }

          if (mensaje.asunto !== "") {
            onEnviar(mensaje);
            repeated_dest.push(destinatario)
          } else {
            let objAlerta = {
              visible:true,
              texto:'Es necesario un asunto para el mensaje.'
            }
            setAlerta(objAlerta);
            return;
          }
        }
      }

      document.getElementById("asunto").value = "";
      document.getElementById("cuerpo").value = "";
    },[onEnviar, usuario.nombre, setAlerta, destqu])

    useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Enter' && alerta.visible === false) {
        event.preventDefault();
        enviarMensaje();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [enviarMensaje, alerta.visible]);  

    const dest_ren = [];
    for (var i = 0; i < destqu; i++) {
        dest_ren.push(<Destinatarios key={i} idnum={i} destinatarios={destinatarios}></Destinatarios>)
    }

    return (
      <Form className='redact'>
      <Form.Group controlId="destinatario">
        <Form.Label>Destinatario
          <Button variant="info" id='adddest' onClick={() => {
            if (destinatarios.length > destqu){
              setDestqu(destqu+1)
            }
          }}> + </Button>
          <Button variant="danger" id='restdest' onClick={() => {
            if (destqu > 1) {
              setDestqu(destqu-1)
            }
          }}> - </Button>
        </Form.Label>
        {dest_ren}
      </Form.Group>

      <Form.Group className="mb-3" controlId="asunto">
        <Form.Label>Asunto</Form.Label>
        <Form.Control type="text" placeholder="Escribe el asunto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="cuerpo">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" placeholder="Escribe el mensaje" />
      </Form.Group>

      <Button variant="primary" onClick={enviarMensaje}>
        Enviar mensaje
      </Button>
    </Form>
    )
}

export default Redactar;