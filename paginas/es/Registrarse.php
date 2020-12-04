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
                           <div class="form-group col-md-6">
                              <input class="controls" type="text" name="Nombre1" id="Nombre1" placeholder="*Primer Nombre ">
                            </div>
                              <div class="form-group col-md-6">
                              <input class="controls" type="text" name="Nombre2" id="Nombre2" placeholder="*Segundo Nombre ">
                              </div>
                        </div>


                        <div class="form-row">
                            <div class="form-group col-md-6">
                             <input class="controls" type="text" name="Apellido1" id="Apellido1" placeholder="*Primer Apellido ">
                            </div> 
                            <div class="form-group col-md-6">
                                <input class="controls" type="text" name="Apellido2" id="Apellido2" placeholder="*Segundo Apellido ">
                               </div> 
                        </div>


                        <div class="form-row">
                            <div class="form-group col-md-12">
                        <select class="select" name="origen" id="origen" >
                            <option value="1" >Departamento</option>
<option value="Atlantida">Atlantida</option>
<option value="Choluteca">Choluteca</option>
<option value="Colon">Colon</option>
<option value="Comayagua">Comayagua</option>
<option value="Copan">Copan</option>
<option value="Cortes">Cortes</option>
<option value="El Paraiso">El Paraiso</option>
<option value="Francisco Morazan">Francisco Morazan</option>
<option value="Gracias a Dios">Gracias a Dios</option>
<option value="Intibuca">Intibuca</option>
<option value="Islas de la Bahia">Islas de la Bahia</option>
<option value="Lempira">Lempira</option>
<option value="Ocotepeque">Ocotepeque</option>
<option value="Olancho">Olancho</option>
<option value="Santa Barbara">Santa Barbara</option>
<option value="La Paz">La Paz</option>
<option value="Yoro">Yoro</option>
<option value="Valle">Valle</option>
                      </select>
                            </div>
                        </div>
                
                 <div class="form-row">
                 <div class="form-group col-md-12">
                        <input class="controls"type="text" name="cel" id="cel"placeholder="*Numero de celular" >
                 </div>  
                </div>

                <div class="form-row">
                           <div class="form-group col-md-12">
                              <input class="controls" type="text" name="direccion" id="direccion" placeholder="Direccion">
                            </div>
                      </div>


                <div class="form-row">
                    <div class="form-group col-md-12">
                        <input class="botons" type="submit" onclick="Registrarse()" value="Guardar" > 
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