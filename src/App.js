import Identificacion from "./componentes/Identificacion";
import Mensajes from "./componentes/Mensajes";
import { Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

function App() {

  const [usuario, setUsuario] = useState(null);
  const [mensajesVisibles, setMensajesVisibles] = useState(false);
  const [phpUrl, setPhpUrl] = useState('');
  const [iden, setIden ] = useState(true);
  const [spiner, setSpiner] = useState(true);

  function identificar(user) {
    setUsuario(user);
    setMensajesVisibles(true);
  }

  const closeSession = () =>{
    setUsuario(null);
    setMensajesVisibles(false);
    setSpiner(false);
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
      <Identificacion url={phpUrl} onIdentificar={identificar} iden={iden} setIden={setIden} setSpiner={setSpiner}/>
      {!usuario && spiner && <Spinner id="loadingspiner" animation="border" variant="light"/>}
      {usuario && <Mensajes url={phpUrl} show={mensajesVisibles} usuario={usuario} closeSession={closeSession}/>}
      {!usuario && !spiner && <Button id="initsession" onClick={() =>{setIden(true);setSpiner(true)}}>Iniciar sesión</Button>}
    </Container>
  );
}

export default App;
