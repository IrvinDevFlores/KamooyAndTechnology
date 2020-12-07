<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Login</title>
    <link rel="stylesheet" href="estilos.css">
    <link rel="stylesheet" href="fonts.css">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Montez|Pathway+Gothic+One" rel="stylesheet">
  </head>
  <body>
    <div class="contenedor">

      <header>
        <h1 class="title">Empresa de Tecnologia</h1>
        <a href="">Registrate</a>
      </header>
      <div class="login">
        <article class="fondo">
          <img src="rsc/img/user.png" alt="User">
          <h3>Inicio de Sesión</h3>

          <form class="" action="db/mylogin.php" method="POST">
          
            <span class="icon-user"></span><input class="inp" type="text" name="user" value=""><br>
            <span class="icon-key"></span><input class="inp" type="password" name="pass" value=""><br>
            <a href="index.html" class="he">He olvidado mi contraseña</a>

            <input class="boton" type="submit" name="inicio" value="Iniciar Sesión">
          </form>

        </article>
      </div>

    </div>
  </body>
</html>

