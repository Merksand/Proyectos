// let texto = document.querySelector(".texto");
let botonAdd = document.querySelector(".text_add");
let reloj = document.querySelector(".content");
let reloj2 = document.querySelector(".contento");
let listaNota= document.querySelector(".listaNota")
let vaciar= document.querySelector(".vaciar")
let texto = document.querySelector(".texto")
botonAdd.addEventListener("click", addList);
function addList(e) {
  e.preventDefault()
  if (texto.value) {
    lis = document.createElement("li");
    nuevo = document.createElement("input");
    espacio = document.createElement("span");
    eliminar = document.createElement("button")
    eliminar.innerHTML="ELIMINAR"
    nuevo.type = "checkbox";
    espacio.innerHTML = texto.value;
    lis.appendChild(nuevo);
    lis.appendChild(espacio);
    lis.appendChild(eliminar);
    listaNota.appendChild(lis);
    
    texto.value = "";
  }
}
console.log(22+12);
console.log(3+1622);
for (let i = 0; i < 15; i++) {
  console.log(i);
}
a = 3
b = 3
c= a + b
console.log(2+294);
console.log(b);
console.log(23);
console.log(3+3);
listaNota.addEventListener("click",(event)=>{
  console.log(event.target.parentElement);
  let ko = event.target.parentElement
  listaNota.removeChild(ko)
  })