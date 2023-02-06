const Mensajes = ({show, usuario}) => {

    return (
        show && <div><p>Mensajes de {usuario.nombre}</p>
                {usuario.buzon.map((mensaje, k) => {
                    return (<div key={k}>{mensaje.remitente} {mensaje.destinatario} {mensaje.asunto} {mensaje.cuerpo}</div>)
                })}</div>
    );
}

export default Mensajes;