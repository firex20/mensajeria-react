import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Redactar = ({usuario}) => {

  const [destinatarios, setDestinatarios] = useState([]);
  const [exito, setExito] = useState(null);

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

    fetch('http://localhost:8000/index.php', requestOptions)
            .then(response => response.json())
            .then(datos => {
              setDestinatarios(datos);
            })
   }, [usuario]);

   function enviarMensaje() {

    let destinatario = document.getElementById("destinatario").value;
    let asunto = document.getElementById("asunto").value;
    let cuerpo = document.getElementById("cuerpo").value;

    const mensaje = {
      remitente:usuario.nombre,
      destinatario: destinatario,
      asunto: asunto,
      cuerpo: cuerpo
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ accion: 'enviarmensaje', mensaje: mensaje })
    }

    fetch('http://localhost:8000/index.php', requestOptions)
            .then(response => response.json())
            .then(datos => {
              setExito(datos.exito);
            })
   }

    return (
      <Form>
        {exito && <Alert key="success" variant="success" dismissible>El mensaje se ha enviado con exito</Alert>}
        {exito === false && <Alert key="danger" variant="danger" dismissible>El mensaje no se ha podido enviar</Alert>}
      <Form.Group controlId="destinatario">
        <Form.Label>Destinatario</Form.Label>
        <Form.Select>
         {destinatarios.map((destinatario, k) => (
          <option key={k} value={destinatario.nombre}>{destinatario.nombreCompleto}</option>
         ))}
        </Form.Select>
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