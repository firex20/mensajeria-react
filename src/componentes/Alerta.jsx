import Modal from 'react-bootstrap/Modal';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const divAlerta = document.querySelector("#alerta");

const Alerta = ({alerta, onCerrar}) => {

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Enter' && alerta.visible === true) {
        event.preventDefault();
        onCerrar();
      }
    };
  
    document.addEventListener('keydown', keyDownHandler);
  
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [onCerrar, alerta.visible]);  

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