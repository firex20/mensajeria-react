<?php
    require_once("./php/cabeceras.php");
    require_once ("./clases/Mensaje.php");
    require_once("./clases/Buzon.php");
    require_once("./php/clases/Usuario.php");
    require_once("./php/clases/UsuarioDB.php");

    $datos = json_decode(file_get_contents("php://input"), true);
    $accion = $datos['accion'];

    switch ($accion) {
        case acceder:
            $usuario = new Usuario($datos["usuario"]);
            $usuarioDB = new UsuarioDB();
            $exito = $usuarioDB->comprueba($usuario);
            $respuesta = array("respuesta" => $exito);
            echo json_encode($respuesta);
            break;
    }
?>