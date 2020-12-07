<?php

//se importa la conexion a la db
include('conn.php');

     @$Usuario=$_POST['user'];
     @$Pass=$_POST['pass'];

     // echo $Usuario." ".$Pass;

       
    $busca="select * from usuarios where (Correo='$Usuario' or IdUser='$Usuario') and Password='$Pass'";

    $realizolabusqueda=mysqli_query($conn,$busca);
    //obtener resultado de la consulta query
    $obtengo=mysqli_fetch_assoc($realizolabusqueda);

    //echo "valores bd: ".$obtengo['Correo']." ".$obtengo['Password'];

    if ((@$obtengo['Correo']==@$Usuario || @$obtengo['IdUser']==@$Usuario ) && @$obtengo['Password']==@$Pass)
      {
        
       // echo "Correcto ";
       print "<script>alert(\"Logueado correctamente.\");window.location='../paginas/es/compra.php';</script>";

      }
      else 
      {
         // echo"Incorrecto";
         print "
         <script> 
           alert(\" Usuario o contraseña incorrecto.\");window.location='../login.php';
            window.location='../login.php?';
            </script>  ";
      } 

  

        
?>