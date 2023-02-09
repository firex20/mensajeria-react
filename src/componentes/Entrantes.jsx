import { Table, Button } from "react-bootstrap";

const Entrantes = ({usuario}) => {

    let entrantes = usuario.buzon.filter(mensaje => mensaje.remitente.toLowerCase() !== usuario.nombre.toLowerCase());

    return (
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Remitente</th>
          <th>Asunto</th>
          <th>Cuerpo</th>
        </tr>
      </thead>
      <tbody>
        {entrantes.map((mensaje, k) => (
            <tr key={k}>
                <td>{mensaje.remitente}</td>
                <td>{mensaje.asunto}</td>
                <td>{mensaje.cuerpo}</td>
                <td><Button variant="primary">Borrar mensaje</Button></td>
            </tr>
        ))}
      </tbody>
    </Table>
    )
}

export default Entrantes;