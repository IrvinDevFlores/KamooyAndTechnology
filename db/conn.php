<?php

//Codigo de conexion

$servername = "localhost";
$username = "root";
$password = "";
$database = "tecnologia";

$conn = mysqli_connect($servername, $username, $password, $database);

if(!$conn){
    die("conexion fallida: ". mysqli_connect_error());

}
//echo "Conexion correcta <br>";

?>