import Identificacion from "./componentes/Identificacion";
import Mensajes from "./componentes/Mensajes";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

function App() {

  const [usuario, setUsuario] = useState(null);
  const [mensajesVisibles, setMensajesVisibles] = useState(false);
  const [phpUrl, setPhpUrl] = useState('');

  function identificar(user) {
    setUsuario(user);
    setMensajesVisibles(true);
  }

  useEffect(() => {
    fetch(process.env.PUBLIC_URL+"/conexion.json")
    .then(response => response.json())
    .then (datos => {
      setPhpUrl(datos.php_url);
    })
  }, [])

  return (
    <Container>
      <Identificacion url={phpUrl} onIdentificar={identificar}/>
      {usuario && <Mensajes url={phpUrl} show={mensajesVisibles} usuario={usuario}/>}
    </Container>
  );
}

export default App;
