function Registrarse(){

    defectoColor(document.getElementById("Email"));
    defectoColor(document.getElementById("Nombre1"));


   // var correo = document.getElementById("Email").value; 
    var nom1 = document.getElementsByName("Nombre1")[0].value;
    var nom2 = document.getElementsByName("Nombre2")[0].value;
    var app1 = document.getElementsByName("Apellido1")[0].value;
    var app2 = document.getElementsByName("Apellido2")[0].value;
    var or = document.getElementsByName("origen")[0].value;
    var cel = document.getElementsByName("cel")[0].value;
    var dicc = document.getElementsByName("direccion")[0].value;
   
    
   // var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    
   /* if ( !expr.test(correo) ){                                                            //COMPRUEBA MAIL
        alert("Error: La dirección de correo " + correo + " es incorrecta.");
        alertasColor(document.getElementById("Email"));
        return false;
    }*/
    
    if ((dicc == "") || (nom1 == "") || (nom2 == "") || (app1 == "") || (app2 == "") || (or == "") ||(cel == "") ) {  //COMPRUEBA CAMPOS VACIOS
        alert("Los campos no pueden quedar vacios");
        return true;
    }
    
    
}


function CrearCuenta(){

    defectoColor(document.getElementById("Email"));
    defectoColor(document.getElementById("Nombre1"));


    var correo = document.getElementById("Email").value; 
    var nom1 = document.getElementsByName("Nombre1")[0].value;
    
    var contra = document.getElementsByName("pass")[0].value;
   
    
   var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    
    if ( !expr.test(correo) ){                                                            //COMPRUEBA MAIL
        alert("Error: La dirección de correo " + correo + " es incorrecta.");
        alertasColor(document.getElementById("Email"));
        return false;
    }
    
    if ((correo == "") || (nom1 == "") || (contra == "")  ) {  //COMPRUEBA CAMPOS VACIOS
        alert("Los campos no pueden quedar vacios");
        return true;
    }
    
    
}

function alertasColor(parametro){
    var element = parametro;
    element.style = "background-color: rgb(251,250,174);"
}

function defectoColor(parametro){
    var element = parametro;
    element.style = "background-color: white;"
}

function load(){
    var elemento1 = document.getElementById("buttonver");
    var elemento2 = document.getElementById("cajaTexto");
    elemento1.addEventListener("click", function(){
        elemento2.value = "Text mostrado"
    })

}
