import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Redactar = ({url, usuario, onEnviar}) => {

  const [destinatarios, setDestinatarios] = useState([]);

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

    return (
      <Form className='redact'>
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

      <Button variant="primary" onClick={function (){
          let destinatario = document.getElementById("destinatario").value;
          let asunto = document.getElementById("asunto").value;
          let cuerpo = document.getElementById("cuerpo").value;
        
          const mensaje = {
            remitente:usuario.nombre,
            destinatario: destinatario,
            asunto: asunto,
            cuerpo: cuerpo
          }
          onEnviar(mensaje);

          document.getElementById("asunto").value = "";
          document.getElementById("cuerpo").value = "";
        }}>
        Enviar mensaje
      </Button>
    </Form>
    )
}

export default Redactar;