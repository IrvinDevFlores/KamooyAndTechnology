<?php

 session_start();
     class elementosMenu 
     {
        
        public function establecerTablaUsuario()
        {
            include('conn.php');

            $buscarUser=mysqli_query($conn, "select * from usuarios")
            or die('error:' .mysqli_error($conn));

            echo"
            <table class='table table-hover'>
            <thead>
            <tr class='text-center'>
              <th scope='col'>Numero</th>
              <th scope='col'>IdUser</th>
              <th scope='col'>Correo</th>
              <th scope='col'>Password</th>
              <th scope='col'>TipUser</th>
              <th scope='col'>Acciones</th>
             </tr>
             </thead>
             <tbody class='text-center'>
            ";

            while($data = mysqli_fetch_assoc( $buscarUser))
            {
                echo"
                <tr>
                    <th scope='row'>$data[Numero]</th>
                    <td >$data[IdUser]</td>
                    <td >$data[Correo]</td>
                    <td >$data[Password]</td>
                    <td >$data[TipUser]</td>
                  
                    <td class='text-center'>
                    <i class='fas fa-edit border-success p-2 botoneditar' ></i>
                    <a class='botoneliminar' href='accion.php?accion=3&dir=Transacional&Id=$data[Numero]&u=$_SESSION[Numero]' onClick='return confirm(\"Desea eliminar la $data[IdUser],$data[Correo],$data[Password],$data[TipUser]\");>
                    <i class='fas fa-trash-alt border border-danger p-2 botoneliminar'></i>
                    </a>
                    </td>
                </tr>
              
                ";
            }

            echo"<tbody>
               </table>";
        }
    }
    


?>