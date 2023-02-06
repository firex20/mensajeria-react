<?php
    require_once("php/clases/Mensaje.php");
    require_once("php/clases/Buzon.php");
    require_once("php/clases/Usuario.php");
    require_once("php/clases/UsuarioDB.php");
    require_once("php/cabeceras.php");

    $datos = json_decode(file_get_contents("php://input"), true);
    $accion = $datos['accion'];

    switch ($accion) {
        case 'acceder':
            $usuario = new Usuario($datos["usuario"]);
            $usuarioDB = new UsuarioDB();
            $exito = $usuarioDB->comprueba($usuario);
            if ($exito) {
                $usuarioDB->leerMensajes($usuario);
            }
            $respuesta = array("respuesta" => $exito, "usuario" => $usuario->toArray());
            echo json_encode($respuesta);
            break;
    }

    $prueba=array("nombre" => "pepe", "clave" => "1234");
    $usuario = new Usuario($prueba);
            $usuarioDB = new UsuarioDB();
            $exito = $usuarioDB->comprueba($usuario);
            if ($exito) {
                $usuarioDB->leerMensajes($usuario);
            }
            $respuesta = array("respuesta" => $exito, "usuario" => $usuario->toArray());
            return (json_encode($respuesta));
?>