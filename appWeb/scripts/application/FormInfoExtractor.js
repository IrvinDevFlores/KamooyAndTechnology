//mport {Usuario} from '../modelos/usuario.js'

class Usuario {
  constructor(usuario, password) {
    this.Usuario = usuario;
    this.Password = password;
  }
}

class UserRegistroInfo {
  constructor(usuario, password) {}
}

class WarningMessages {
  getUserMessage() {
    let message = `<div class="alert alert-warning alert-dismissible fade show " role="alert">
        <strong>Solo se aceptan correos validos
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;

    return message;
  }

  getPassMessage() {
    let pass = `<div class="alert alert-warning alert-dismissible fade show " role="alert">
        <strong>Su contraseña</strong> debe ser mayor de 6 caracteres
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
    return pass;
  }

  getInvalidPassOrUserMessage() {
    let pass = `<div class="alert alert-warning alert-dismissible fade show " role="alert">
    <strong>Su contraseña o usuario</strong> son invalidos
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
    return pass;
  }

  getUserAlreadyExistMessage() {
    let pass = `<div class="alert alert-warning alert-dismissible fade show " role="alert">
    <strong>Este usuario </strong> ya existe
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
    return pass;
  }

  getPasswordDoesntMatch() {
    let pass = `<div class="alert alert-warning alert-dismissible fade show " role="alert">
    <strong>Las contraseñas no </strong> coninciden
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
    return pass;
  }

  getFieldsAreEmpty() {
    let pass = `<div class="alert alert-warning alert-dismissible fade show " role="alert">
    <strong>Los campos estan </strong> vacios
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
    return pass;
  }
}

let userMessage = document.getElementById("userMessage");
let passwordMessage = document.getElementById("passwordMessage");

let usuarios = [new Usuario("ari@gmail.com", "1234567")];

function ValidateUser(user) {
  let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let validUser = res.test(user);
  return validUser;
}

function ValidatePassword(pass) {
  return pass.length < 6;
}

function GetElement(id) {
  return document.getElementById(id);
}

function GetUserData() {
  let user = GetElement("usuario").value;
  let pass = GetElement("pass").value;

  let userFieldEmpty = user.length === 0;
  let passFieldEmpty = pass.length === 0;

  let messages = new WarningMessages();

  let isValidUser = ValidateUser(user);

  let fieldsAreEmpty = userFieldEmpty || passFieldEmpty;

  if (fieldsAreEmpty) {
    passwordMessage.innerHTML = messages.getFieldsAreEmpty();
    if (userFieldEmpty) {
      GetElement("usuario").focus();
    }

    if (passFieldEmpty) {
      GetElement("pass").focus();
    }

    return;
  }


  
  const userIsNotValid = !isValidUser;
  if (userIsNotValid) {
    userMessage.innerHTML = messages.getUserMessage();

    return;
  }

  let isValidPassword = ValidatePassword(pass);
  if (isValidPassword) {
    passwordMessage.innerHTML = messages.getPassMessage();
    return;
  }

  let usr = new Usuario(user, pass);

  return usr;
}

const ValidateFileds = () => {
  return 0;
};

function FindUser(usuario) {
  const isUserInDataBase = usuarios.some(
    (u) => u.Usuario === usuario.Usuario && u.Password === usuario.Password
  );
  console.log(isUserInDataBase);
  return isUserInDataBase;
}

function RedirectTo(route) {
  window.location.replace(route);
}

function Login() {
  let usuario = GetUserData();
  let dashboardRoute = "../../pages/dashboard/main.html";

  const isUserInDataBase = FindUser(usuario);

  if (isUserInDataBase) {
    RedirectTo(dashboardRoute);
  } else {
    let messages = new WarningMessages();
    passwordMessage.innerHTML = messages.getInvalidPassOrUserMessage();
  }
}

function CrearCuenta() {
  let messages = new WarningMessages();
  let dashboardRoute = "../../pages/dashboard/main.html";

  let newCorreo = crearCuentaForm.children.correo.value;
  let usrPassword = crearCuentaForm.children.password.value;
  let confirmarUsrPassword = crearCuentaForm.children.confirmarPassword.value;

  let doesUserExist = usuarios.some((usr) => usr.Usuario === newCorreo);
  let passwordDoesNotMatch = usrPassword === confirmarUsrPassword;

  let fieldsAreEmpty =
    newCorreo.length === 0 ||
    usrPassword.length === 0 ||
    confirmarUsrPassword.length === 0;

  if (fieldsAreEmpty) {
    passwordMessage.innerHTML = messages.getFieldsAreEmpty();
    return;
  }

  if (doesUserExist) {
    passwordMessage.innerHTML = messages.getUserAlreadyExistMessage();
    return;
  }

  let passWordIsLessThan6Characters = ValidatePassword(usrPassword);
  if (passWordIsLessThan6Characters) {
    passwordMessage.innerHTML = messages.getPassMessage();
    return;
  }

  if (passwordDoesNotMatch === false) {
    passwordMessage.innerHTML = messages.getPasswordDoesntMatch();
    return;
  }

  usuarios.push(new Usuario(newCorreo, usrPassword));
  RedirectTo(dashboardRoute);

  console.log(usuarios);
}
