import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const Identificacion = ({onIdentificar}) => {

    const [visible, setVisible] = useState(true);
    const [error, setError] = useState(false);

    const cerrar = () => {
        setVisible(false);
    }

    const acceder = () => {
        let nombre = document.getElementById("nombre").value;
        let clave = document.getElementById("clave").value;

        var usuario = {
            nombre: nombre,
            clave: clave,
            nombreCompleto: ''
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ accion: 'acceder', usuario: usuario })
        };
        fetch('http://localhost:8000/index.php', requestOptions)
            .then(response => response.json())
            .then(datos => {
                if (datos.respuesta === true) {
                    cerrar();
                    onIdentificar(datos.usuario);
                }else{
                    setError(true);
                }
            });
        
    }

    return (
        <Modal
        show={visible}
        onHide={cerrar}
        backdrop="static"
        keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Identificacion</Modal.Title>
            </Modal.Header>
            {
                error && <Alert key='danger' variant='danger'>
                            This is a danger alert with
                        <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
                            you like.
                        </Alert>
            }
            <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Introduce el usuario" />
                    <Form.Text className="text-muted">
                      No compartas tus credenciales con nadie.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="clave">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                  </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={cerrar}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={acceder}>Acceder</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Identificacion;