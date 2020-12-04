<?php

//se importa la conexion a la db
include('conn.php');

$mensajeOk = false;
$mensajeError = 'El sistema no se encuentra disponible';

//error en caso de ingresar datos falsos 
if(isset($_POST['user'], $_POST['pass'])):
    if($_POST['user']!=""):
        if($_POST['pass']!=""):
            $usua = $_POST['user'];
            $pass = $_POST['pass'];

    //consulta mysql
    $consulta = mysqli_query($conn, "SELECT * FROM usuario WHERE NombreUser='$usua' AND Pass=sha1('$pass') AND");
    if(mysqli_num_rows($consulta)> 0);
    $mensajeOk=true;
    $datos=mysqli_fetch_array($consulta);
    //se crea secion
    session_start();
    $_SESSION['idusuario']=$datos[0];
    $_SESSION['user']=$datos[1];
    $_SESSION['pass']=$datos[2];
    $_SESSION['status']=$datos[3];
    $_SESSION['tipo']=$datos[4];

    $mensajeError='Logueado correctamente';

    print "<script>alert(\"Logueado correctamente.\");window.location='../login.php';</script>";
    include "cerrar.php";

        else:
            $mensajeError = 'Usuario o contraseña incorrecta o usuarion no existe';
            print "
            <script> 
            alert(\" Usuario o contraseña incorrecto.\");window.location='../login.php';
            window.location='../login.php?';
            </script>  ";
            include "cerrar.php";
        endif;

        else:
            $mensajeError = 'Todos los campos son requeridos';
            print "
            <script> 
            alert(\" Todos los campos son requeridos.\");
            window.location='../login.php?';
            </script>  ";
            include "cerrar.php";
        endif; 
        $salida=array('respuesta'=> $mensajeOk, 'mensaje'=>$mensajeError);
?>