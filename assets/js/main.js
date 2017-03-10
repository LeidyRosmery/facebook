var publicacion= document.getElementById("publicacion");
var publico= document.getElementById("postear");
var arrayTexto=[];
function publicar() {
  arrayTexto.push(publicacion.value);
  var field=document.createElement("fieldset");
  var p =document.createElement("p");
  //var a1 =document.createElement("a");
  //var a2 =document.createElement("a");
  var b1=document.createElement("button").setAttribute("onclick","editar()");
  var b2=document.createElement("button");
  p.innerHTML= publicacion.value+ "<br>";
  //a1.innerHTML="Editar";
  b1.innerHTML="editar";
  b2.innerHTML="eliminar";
  //a2.innerHTML="Eliminar";

  publico.appendChild(field);
  field.appendChild(p);
  p.appendChild(b1);
  p.appendChild(b2);
//  p.appendChild(a1).setAttribute( "href","editar");
//  p.appendChild(a2).setAttribute("href","eliminar");
  clearTex();
  console.log(arrayTexto);
}
function editar(){
  console.log("desea editar el texto");
}
function clearTex(){
  publicacion.value="";
}
