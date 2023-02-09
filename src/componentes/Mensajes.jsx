import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Entrantes from './Entrantes';
import Redactar from './Redactar';
import Salientes from './Salientes';

const Mensajes = ({show, usuario}) => {

    return (
        show && <Tabs
        defaultActiveKey="Entrantes"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Entrantes" title="Entrantes">
            <Entrantes usuario={usuario}/>
        </Tab>
        <Tab eventKey="Salientes" title="Salientes">
            <Salientes usuario={usuario}/>
        </Tab>
        <Tab eventKey="Redactar" title="Redactar">
            <Redactar usuario={usuario}/>
        </Tab>
      </Tabs>
                
    );
}

export default Mensajes;