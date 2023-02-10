import Modal from 'react-bootstrap/Modal';
import ReactDOM from 'react-dom';

const divAlerta = document.querySelector("#alerta");

const Alerta = ({alerta, onCerrar}) => {
    return (
      alerta.visible && ReactDOM.createPortal(
      <Modal show={alerta.visible} onHide={onCerrar}>
        <Modal.Header closeButton>
          <Modal.Title>Comfirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>{alerta.texto}</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>, divAlerta)
    )
}

export default Alerta;