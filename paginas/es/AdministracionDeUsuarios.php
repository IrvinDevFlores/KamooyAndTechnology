<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modulo Transacional</title>

 
   <link rel="stylesheet" href="../../estilos/fa/otfs/Font Awesome 5 Brands-Regular-400.otf">
   <link rel="stylesheet" href="../../estilos/bootstrap/css/bootstrap.min.css">
   <link rel="stylesheet" href="../../estilos/style.css">
   <link rel="stylesheet" href="../../fonts/icomoon.eot">
   <link rel="stylesheet" href="../../fonts/icomoon.svg">
   <link rel="stylesheet" href="../../fonts/icomoon.ttf">
   <link rel="stylesheet" href="../../fonts/icomoon.woff">
   <link rel="styleshest" href="../../estilos/lato/Lato-Black.ttf">
   <link rel="styleshest" href="../../estilos/css/sweetalert2.min.css">
   <link rel="styleshest" href="../../estilos/fa/css/all.css">
   <link rel="styleshest" href="../../estilos/js/jquery-3.4.1.min.js">
   <script type="text/javascript" src="../../estilos/semana1.js"></script>


</head>
<body>



  
    <div id="contenedor" class="shadow-sm rounded"><!--inicio del todo del body-->
        <!--Contenedor interno-->
       <div  id="contenedor_interno">
        <div class="linea shadow-sm">
         <div class="titulo2 col-md-12 txt-right">  
             <i class="fas fa-address-card"></i>
     
        <header class="headerr">
            <div class="divv"> 
            <div class="dic" > 
          <a  alogin="" href="paginas/es/login.html"  > Cerrar Sesion </a> 
               
            </div >
        </div>
        </header>
    </div> 
       </div>
       </div> 
   </div>



   <h3 class="navbar-brand" href="#">MODULO TRANSACIONAL</h3>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd;">
   
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="true" aria-label="toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <div class="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Inicio
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a class="dropdown-item" href="#">Cliente </a>
              <a class="dropdown-item" href="#">Dropdown link</a>
            </div>
          </div>


        <div class="Transacional btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Usuarios
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a class="dropdown-item" href="#">Nuevo Usuario</a>
              <a class="dropdown-item" href="#">Usuarios</a>
            </div>
          </div>

        <div class="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn  btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Proveedores
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a class="dropdown-item" href="#">Nuevo Proveedor</a>
              <a class="dropdown-item" href="#">Lista de Proveedores</a>
            </div>
          </div>
          <div class="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Produtos
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a class="dropdown-item" href="#">Nuevo Produto</a>
              <a class="dropdown-item" href="#">Lista de Produtos</a>
            </div>
          </div>
          <div class="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Facturas
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a class="dropdown-item" href="#">Nueva Factura</a>
              <a class="dropdown-item" href="#">Facturas</a>
            </div>
          </div>
          

    </div>
  </nav>


  <div id="contenedor" class="shadow-sm rounded">
    <div id="contenedor_interno">
      <div class="linea shadow-sm" >
        <div class="titulo2 col-md-12 text-right">
          <i class="fas fa-cash-register"></i>
         <span>Registro de Usuarios</span>
         <button type="button" class="btn btn-success btn-sm " 
         data-toggle="modal" data-target="#myModal"
                  >
           Agregar
           <i class="fas fa-plus-circle"> </i>
         </button>
      
        </div>

      </div>

    </div>

  </div>

     
<div class="container">
  <!-- Trigger the modal with a button -->

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog modal-xl">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
         
        </div>
        <div class="modal-body">


        <form name="prueba" id="prueba" method="GET" action="" onsubmit="">
                         
                         <section class="form-register card w-100" >
                             
                         <h4>Registrarse</h4>
  
                         
                          <div class="form-row">
                             <div class="form-group col-md-6">
                                <input class="form-control" type="text" name="Nombre1" id="Nombre1" placeholder="*Nombre ">
                             
                          
                              </div>

                              <div class="form-group col-md-6">
                              <input class="form-control" type="email" name="Email" id="Email" placeholder="*Email">
                             
                                  </div>


                                  <div class="form-group col-md-6">
                          <input class="form-control" type="password" id="pass" name="pass"  placeholder="*Contraseña"><br>
                      <div>  
                               
                          </div>
  
  
                  <div class="form-row">
                      <div class="form-group col-md-6">
                          <input class="btn btn-success" type="submit" onclick="CrearCuenta()" value="Guardar" > 
                      </div>  
                  </div>
                         </section>
                      </form>



        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>


  
<?php
       
       require "../../db/TablaUsuarios.php";
       $ObjetoTabla = new elementosMenu();
       echo $ObjetoTabla->establecerTablaUsuario();
      
   ?> 
  

  <script src="../../estilos/recursos/jquery-3.5.1.slim.min.js"></script>
    <script src="../../estilos/recursos/popper.min.js"></script>
    <script src="../../estilos/js/bootstrap.min.js"></script>


<script src="../../estilos/bootstrap/js/bootstrap.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</body>
</html>