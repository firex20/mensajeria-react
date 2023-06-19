import Form from 'react-bootstrap/Form';

const Destinatarios = ({destinatarios, idnum}) => {

    return (
        <Form.Select className='destinatarios' id={'select'+idnum}>

          {
            destinatarios.map((destinatario, k) => {
                return (
                    <option key={k} id={'select'+idnum+'option'+k} value={destinatario.nombre}>{destinatario.nombreCompleto}</option>
                )
            })
          }
        </Form.Select>
    )
}

export default Destinatarios;