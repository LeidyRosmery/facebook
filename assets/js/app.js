var expresion= /\w+@\w+\.+[a-z]/;
var span=document.getElementsByTagName("span");
var input=document.getElementsByTagName("input");
var correo=document.getElementById("inputUser");
 var array =[{nombre :"rolando",email :"rolando@laboratoria.es", contraseña:"1234567" },
            {nombre :"chris",email :"chris@laboratoria.es", contraseña:"12" },
            {nombre :"vanny",email :"vanny@laboratoria.es", contraseña:"123" },
            {nombre :"diana",email :"diana@laboratoria.es", contraseña:"1234" },
            {nombre :"teresa",email :"teresa@laboratoria.es", contraseña:"12345" },
            {nombre :"paola",email :"paola@laboratoria.es", contraseña:"123456" }]


function validar(){
  for(var i=0 ; i< input.length ; i++){
    if(input[i].value==""){
      span[i].innerHTML= " *   Este campo no puede quedar en blanco";
    }
    else {
      span[i].innerHTML="";
      }
    }
  validaCorreo();
  if(input[0].value!== "" && input[1].value!== ""){
    console.log("limpia botones");
    clearButton();
  }
}

function validaCorreo(){

  if(!expresion.test(correo.value)){
    console.log(correo.value);
    alert("Ingrese un correo correcto");
    }
}
function clearButton(){
  for(var i=0 ; i<input.length ; i++){
    input[i].value="";
  }
}

function validarUsuario(){
  for (var i = 0; i < array.length; i++) {
    if(array[i].email == input[0].value ){
        console.log("entra a mi usuario");
      }
    else {
      console.log(input[0].value);
      }
    }
}
