<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../estilos/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../estilos/fa/css/all.css">
    <link rel="stylesheet" href="../../estilos/stilos.css">
    <script type="text/javascript" src="../../estilos/semana1.js"></script>
    <title>Registrarse</title>
</head>
<body>

    <header>
        <div class="bg-white encabezado">
            <div class="container-fluid">
                <div class="row justify-content-center ">
                    <img class="w-100" src="../../rsc/img/inv.jpg" alt="" >
                </div>
            </div>
        </div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="../../index.html">Cuidad</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Registrarse</li>
                </ol>
              </nav>   
        </header> 
    </header>

    <main>
        <div class="container bg-white shadow p-3 mb-5 bg-white rounded mt-5">
            <div class="row justify-content-center">
                <div class="card w-50">
                    <div class="card-body">
                         
                      <p class="card-text">
                        <a  alogin="" href="../../login.html"  > Inicar Secion   </a>
                        <form name="prueba" id="prueba" method="GET" action="" onsubmit="">
                         
                       <section class="form-register card w-100" >
                           
                       <h4>Registrarse</h4>

                       
                        <div class="form-row">
                           <div class="form-group col-md-12">
                              <input class="controls" type="text" name="Nombre1" id="Nombre1" placeholder="*Nombre ">
                            </div>
                             
                        </div>


                        <div class="form-row">
                            <div class="form-group col-md-12">
                                  <input class="controls" type="email" name="Email" id="Email" placeholder="*Email">
                             </div>
                         </div>

                <div class="form-row">
                    <div class="form-group col-md-12">
                        <input class="controls" type="password" id="pass" name="pass"  placeholder="*Contraseña"><br>
                    <div>  
                    </div>
                

                <div class="form-row">
                    <div class="form-group col-md-12">
                        <input class="botons" type="submit" onclick="CrearCuenta()" value="Guardar" > 
                    </div>  
                </div>
                       </section>
                    </form>
                      </p>
                    </div>
                </div>
            </div> 


            
        </div> 
    </main>


    <footer>
        <div class="container-fluid  bg-white shadow p-3 rounded">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="row justify-content-center">
                        <h5 class="">Informacion</h5>
                    </div>

                    <div class="row justify-content-center w-100">
                        <blockquote class="blockquote text-center">
                            <p class="mb-2">"Empresa de Tecnologia"</p>
                            <footer class="blockquote-footer">...<cite title="Source Title">...</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!--LINK PARA JS-->
    <script src="../../estilos/recursos/jquery-3.5.1.slim.min.js"></script>
    <script src="../../estilos/recursos/popper.min.js"></script>
    <script src="../../estilos/js/bootstrap.min.js"></script>


   </body>
</html>