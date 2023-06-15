import { Table, Button } from "react-bootstrap";

const Salientes = ({mensajes, login}) => {

    let salientes = mensajes.filter(mensaje => mensaje.remitente.toLowerCase() === login.toLowerCase());

    return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Destinatario</th>
          <th>Asunto</th>
          <th>Cuerpo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {salientes.map((mensaje, k) => (
            <tr key={k}>
                <td>{mensaje.destinatario}</td>
                <td>{mensaje.asunto}</td>
                <td>{mensaje.cuerpo}</td>
                <td><Button variant="primary">Borrar mensaje</Button></td>
            </tr>
        ))}
      </tbody>
    </Table>
    )
}

export default Salientes;