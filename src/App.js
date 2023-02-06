import Identificacion from "./componentes/Identificacion";
import Mensajes from "./componentes/Mensajes";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Identificacion />
      <Mensajes show={false} />
    </Container>
  );
}

export default App;
