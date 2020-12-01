

//alert("Hola Mundo <br> Javascript... ");

//DECLARAR VARIABLES GLOBALES

var compra=5000; //variable para la compra
var isv=compra*0.15;
var total=compra + isv;

function prod(){
    var num1=50;  //VARIABLES LOCALES
    var num2=10;
    var p=num1*num2;
    alert("El producto es : " + p);
}

function suma(){
    var num1=10;  
    var num2=50;
    var num3=30;  
    var num4=80;
    var num5=90;
    var result= num1+num2+num3+num4+num5;
    alert("La suma de 5 variables es: "+ result);

}

function evaluar(){
    var edad=30;
    
    if(edad>=40){
    alert("La persona con "+ edad +"  años es mayor de edad");
    }
    else if(edad<40){
        alert("La persona con "+ edad +" años es menor de edad");

    }
}

function comprar(){

    var compra=30000;
    if(compra>5000){

        document.write("<p>La compra es superior a 5000</p>");
    }
    else if (compra>0){
        document.write("<p>La compra es mayor a 0</p>");

    }
    else if (compra==0){
        document.write("<p>La compra es igual a 0</p>");
        
    }
}

function tabla1(){
  var r=5;
  var c=3;
  var i=0;
  var encabezado=" "+
  "<table class='table table=hover'>"+
  "<thead>"+
  "    <tr>"+
  "    <th scope='col'>Columna 1</th>"+
  "    <th scope='col'>Columna 2</th>"+
  "    <th scope='col'>Columna 3</th>"+
  "     </tr>"+
  "</thead>"+
  "";
var inicioT="<tbody>"
var FinT="</tbody></table>"
var cuerpo="";

document.write(encabezado);
document.write(inicioT);
for(i=1;i<=r;i++){
    cuerpo="<tr>"+
    "<th scope='row'>"+i+"</th>"+
    "<td>Ejercicio FOR</td>"+
    "<td>Web I</td>"+
    "</tr>";
    document.write(cuerpo);
}
document.write(FinT);

};

function datosEmpleados(){
    var r=3;
    var c=3;
    var i=0;
    var ID =["0101","0102","0103"];
    var nombres=["Javier","Wilmer","Miguel"];
    var apellidos=["Javier","Wilmer","Miguel"];
    var edades=["30","20","10"];
    var tamanio=ID.length;
    var encabezado=" "+
    "<table class='table table=hover'>"+
    "<thead>"+
    "    <tr>"+
    "    <th scope='col'>ID</th>"+
    "    <th scope='col'>Nombres</th>"+
    "    <th scope='col'>Apellidos</th>"+
    "    <th scope='col'>Edades</th>"+
    "     </tr>"+
    "</thead>"+
    "";
  var inicioT="<tbody>"
  var FinT="</tbody></table>"
  var cuerpo="";
  
  document.write(encabezado);
  document.write(inicioT);
  for(i=1;i<=tamanio;i++){
      cuerpo="<tr>"+
      "<th scope='row'>"+ID[i]+"</th>"+
      "<td> "+ nombres[i] +"</td>"+
      "<td>"+apellidos+"</td>"+
      "<td>"+edades+"</td>"+
      "</tr>";
      document.write(cuerpo);
  }
  document.write(FinT);
  
  };

  
 