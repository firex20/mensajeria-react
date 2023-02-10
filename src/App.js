import Identificacion from "./componentes/Identificacion";
import Mensajes from "./componentes/Mensajes";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function App() {

  const [usuario, setUsuario] = useState(null);
  const [mensajesVisibles, setMensajesVisibles] = useState(false);

  function identificar(user) {
    setUsuario(user);
    setMensajesVisibles(true);
  }
  return (
    <Container>
      <Identificacion onIdentificar={identificar}/>
      {usuario && <Mensajes show={mensajesVisibles} usuario={usuario}/>}
    </Container>
  );
}

export default App;
