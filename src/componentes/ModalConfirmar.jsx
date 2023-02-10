import Modal from 'react-bootstrap/Modal';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

const divConfirmar = document.querySelector("#confirmar");

const ModalConfirmar = ({visible, onCerrar, onBorrar, mensajeId}) => {

    return (
        visible && ReactDOM.createPortal(
        <Modal show={visible} onHide={onCerrar}>
            <Modal.Header closeButton>
              <Modal.Title>Advertencia</Modal.Title>
            </Modal.Header>
            <Modal.Body>El mensaje va a ser eliminado ¿Desea continuar?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => {
                onCerrar()
                onBorrar(mensajeId)
              }}>
                Si
              </Button>
              <Button variant="primary" onClick={onCerrar}>
                No
              </Button>
            </Modal.Footer>
        </Modal>, divConfirmar)
    )
}

export default ModalConfirmar;