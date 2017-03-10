var publicacion= document.getElementById("publicacion");
var publico= document.getElementById("postear");
var arrayTexto=[];
console.log(publicacion.value+"hgvm");
arrayTexto.push(publicacion.value);
function publicar() {
  var field=document.createElement("fieldset");
  var p =document.createElement("p");
  var a1 =document.createElement("a");
  var a2 =document.createElement("a");
  p.innerHTML= publicacion.value+ "<br>";
  a1.innerHTML="Editar";
  a2.innerHTML="Eliminar";
  publico.appendChild(field);
  field.appendChild(p);
  p.appendChild(a1).setAttribute( "href","editar");
  p.appendChild(a2).setAttribute("href","eliminar");
  clearTex();
  console.log(arrayTexto);
}

function clearTex(){
  publicacion.value="";
}
