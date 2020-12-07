<?php

//Codigo de conexion

$servername = "localhost";
$username = "root";
$password = "";
#asi se debe llamar en tu compu y en la mia porfa...
$database = "kamook_tech";

$conn = mysqli_connect($servername, $username, $password, $database);

if(!$conn){
    die("conexion fallida: ". mysqli_connect_error());

}
//echo "Conexion correcta <br>";

?>