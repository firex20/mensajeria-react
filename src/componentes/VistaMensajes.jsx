import { Table, Button } from "react-bootstrap";
import { useState } from "react";
import ModalConfirmar from './ModalConfirmar';

const VistaMensajes = ({mensajes, onBorrar, tipo}) => {

  const [visibleConfirmar, setVisibleConfirmar] = useState(false);
  const [id, setId] = useState(null);

    return (
    <div>
    <ModalConfirmar visible={visibleConfirmar} onCerrar={() => {setVisibleConfirmar(false)}} mensajeId={id} onBorrar={onBorrar}/>
    <Table striped bordered hover>
      <thead>
        <tr>
          {tipo === 'entrantes' &&<th>Remitente</th>}
          {tipo === 'salientes' &&<th>Destinatario</th>}
          <th>Asunto</th>
          <th>Cuerpo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {mensajes.map((mensaje, k) => (
            <tr key={k}>
                {tipo === 'entrantes' &&<td>{mensaje.remitente}</td>}
                {tipo === 'salientes' &&<td>{mensaje.destinatario}</td>}
                <td>{mensaje.asunto}</td>
                <td>{mensaje.cuerpo}</td>
                <td><Button variant="primary" onClick={() => {
                  setVisibleConfirmar(true);
                  setId(mensaje.id);
                }}>Borrar mensaje</Button></td>
            </tr>
        ))}
      </tbody>
    </Table>
    </div>
    )
}

export default VistaMensajes;