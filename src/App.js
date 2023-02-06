import Identificacion from "./componentes/Identificacion";
import Mensajes from "./componentes/Mensajes";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function App() {

  const [usuario, setUsuario] = useState(null);
  const [mensajesVisibles, setMensajesVisibles] = useState(false);

  function identificar(usuario) {
    alert("identificando a "+usuario.nombre);
    setUsuario(usuario);
    setMensajesVisibles(true);
  }
  return (
    <Container>
      <Identificacion onIdentificar={identificar}/>
      <Mensajes show={mensajesVisibles} usuario={usuario}/>
    </Container>
  );
}

export default App;
