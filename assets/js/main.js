/*

function publicar(){
  var span=document.createElement("div");
  var parrafo=document.createElement("p");
  var a=document.createElement("a");
  span.innerHTML=publicacion.value + " <br>";
  document.body.appendChild(span);

}
*/


var publicacion= document.getElementById("publicacion");
var publico= document.getElementById("postear");
function publicar() {
  var div=document.createElement("div");
  var p =document.createElement("p");
  var a1 =document.createElement("a");
  var a2 =document.createElement("a");
/*  var p =document.createElement("p");
  p.innerHTML= publicacion.value;
  var a1 =document.createElement("a");
  var a2 =document.createElement("a");
  span.innerHTML=publicacion.value + " <br>";*/
  p.innerHTML= publicacion.value;
  publico.appendChild(div);
  div.appendChild(p);
  p.appendChild(a1).setAttribute( "href","editar");;
  p.appendChild(a2);
  console.log(div);
}
