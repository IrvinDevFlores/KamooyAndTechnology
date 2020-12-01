

function DatosAlmacenados(){
    var r =3;
    var c=3;
    var i=0;
    var ID =     ["0101"];
	var nombres= [document.getElementById("snombre").value];
	var apellidos=[document.getElementById("apellidos").value]
	var identidad= [document.getElementById("identidad").value]
	var genero=['M']
	var nacimiento=['12-05-199']
	var sueldo=[document.getElementById("sueldo").value]
	var correo=[document.getElementById("email").value]
	var puesto=["Gerente"]
	var suelNet=[document.getElementById("resultado7").value]

    var tamanio=ID.length;
	var encabezado=" "+

	"<table class='table table=hover' >"+
	"<thead>"+
    "    <th scope='col'>ID</th>"+
    "    <th scope='col'>Nombres</th>"+
    "    <th scope='col'>Apellidos</th>"+
	"    <th scope='col'>Identidad</th>"+
	"    <th scope='col'>Genero</th>"+
    "    <th scope='col'>Fecha Nacimiento</th>"+
	"    <th scope='col'>Sueldo</th>"+
	"    <th scope='col'>Correo</th>"+
    "    <th scope='col'>Puesto</th>"+
	"    <th scope='col'>Sueldo Neto</th>"+
	
	"     </tr>"+
	"</thead>"+
	"";
  var inicioT="<tbody>"
  var FinT="</tbody></table>"
  var cuerpo="";
  
  document.write(encabezado);
  document.write(inicioT);

  for(i=0;i<=tamanio;i++){
	  cuerpo="<tr>"+
      "<th scope='row'>"+ID[i]+"</th>"+
      "<td> "+ nombres[i] +"</td>"+
      "<td>"+apellidos[i]+"</td>"+
	  "<td>"+identidad[i]+"</td>"+
	  "<td> "+ genero[i] +"</td>"+
      "<td>"+nacimiento[i]+"</td>"+
	  "<td>"+sueldo[i]+"</td>"+
	  "<td> "+ correo[i] +"</td>"+
      "<td>"+puesto[i]+"</td>"+
	  "<td>"+suelNet[i]+"</td>"+
      "</tr>";
      document.write(cuerpo);
  }
  document.write(FinT);
  
  };
function pruebaP(){
	document.prueba.resultado2.value ="Esta es una preba"
}
function convertir(){
	var a = new Date();
	var x = String(a);
	alert("convertirdo"+x);
		 
}
  

  function almacenar(){
	  s=0;
	  b=0;
	  
	  sp=0;
	  ss=0;
	  sn=0;
	  var x1,x2,sunet=0,bona=0,bono=0;
	  
	  var pn = String(document.prueba.pnombre.value,10)
	  var sn = String(document.prueba.snombre.value,10)
	  var ap = String(document.prueba.apellidos.value,10)
	  document.prueba.resultado1.value=""+ pn + sn +ap;
	  

	  s = parseInt(document.prueba.sueldo.value,10);
	  deduccion=(s*0.10);
	  document.prueba.resultado2.value=""+deduccion;

	  b= parseInt(document.prueba.sueldo.value,10);
	  bono=0.15*s;
	  document.prueba.resultado3.value=""+bono;
	  
	  
	  sp= parseInt(document.prueba.sueldo.value,10);
	  supri=(s-deduccion)*0.035;
	  document.prueba.resultado5.value=""+ supri;

	  ss= parseInt(document.prueba.sueldo.value,10);
	  suso=0.04*s;
	  document.prueba.resultado6.value=""+suso;

	  sn= parseInt(document.prueba.sueldo.value,10);
	  sunet=s-deduccion-(bono+supri+bona+suso);
	  document.prueba.resultado7.value=""+sunet;

	  var p1= String('55')
	  var b =new String(document.prueba.puestos.value,10);
	  if(p1>=b){
		
		bona=250;
		document.prueba.resultado4.value=""+bona;
	  }
	  else if(p1<b)
	  {

		bona=300;
		document.prueba.resultado4.value=""+bona;
	  }
	


  }

  function printHTML() {
	if (window.print) {
	  window.print();
	}
  }

  function clearForm(oForm) {

	var elements = oForm.elements;
  
	oForm.reset();
  
	for(i=0; i<elements.length; i++) {
  
	  field_type = elements[i].type.toLowerCase();
  
	  switch(field_type) {
		case "text":
		case "email":
		case "password":
		case "textarea":
		case "hidden":
		  elements[i].value = "";
		  break;
  
		case "radio":
		case "checkbox":
			if (elements[i].checked) {
			  elements[i].checked = false;
		  }
		  break;
  
		case "select-one":
		case "select-multi":
		  elements[i].selectedIndex = -1;
		  break;
  
		default:
		  break;
	  }
	}
  }
  
  