const botones = document.getElementsByClassName("print");
const pantalla = document.querySelector(".pantalla");
const otra = document.querySelector(".root");
const boton1 = document.querySelector(".num1");
const boton2 = document.querySelector(".num2");

function sumar() {
  var boton3 = boton1.value;
  var boton4 = boton2.value;
  let suma = parseInt(boton3) + parseInt(boton4);
  pantalla.innerHTML = suma;
}
otra.addEventListener("click", () => {
  pantalla.innerHTML = "";pantalla.innerHTML += e.innerHTML;
  boton1.innerHTML = " ";
  boton2.innerHTML = " ";
});
const array = Array.from(botones)
console.log(array)
array.forEach((e)=>{
  e.addEventListener("click",()=>{
    pantalla.innerHTML += e.innerHTML
  })
})

let input = document.querySelector(".caja1")
let boton  = document.querySelector(".boton")
let boton22  = document.querySelector(".boton2")
let boton3  = document.querySelector(".boton3")
let caja  = document.querySelector(".caja2")
let ultimo  = document.querySelector(".ulti")
let x =0

ultimo.addEventListener("click",()=>{
  pantalla.innerHTML=x+"<br>"
  x++
})

function we(){
  caja.innerHTML=23234534
}
function tere(e){
  caja.innerHTML=e
}
boton.addEventListener("click",(e)=>{
  /* input.innerHTML="fasdf" */
  caja.innerHTML+=boton.innerHTML

/*   x++;
  caja.innerHTML=x */
})
////////////////////////////////////////
let negro = document.querySelector(".black")
let blanco = document.querySelector(".white")
negro.addEventListener("click",()=>{
  document.body.style.background="#000"
})
blanco.addEventListener("click",()=>{
  document.body.style.background="#fff"
})

let color = document.querySelector("#color")
color.addEventListener("change",(e)=>{
  document.body.style.backgroundColor=e.target.value;
})




/* botones.addEventListener("click", (e)=>{
  pantalla.innerHTML += e.innerHTML
}) */
/* const nuevo= (numero)=>{
  pantalla.innerHTML += numero
}
 */




/* let pepe = ["unos","dos","tres","cuatro","cinco"]
console.log(pepe)
for(i = 0; i < pepe.length; i++){
  document.write(`${pepe[i]} <br>`)
}

pepe.forEach((culo, re, so) =>{
  document.write(`<br>${culo} ${re} ${so}`)
})

const juntar = (x, y) =>{
  return x+y;
}
document.write(juntar(3,5))
let perreo = 12345

const obj = {name: "Miguel", age: 19};
console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));
console.log(Object.create(obj));
console.log(Object.getOwnPropertyNames(obj));

console.log(Object.values(pepe));
console.log(Object.keys(pepe));
console.log(Object.entries(pepe));
console.log(Object.create(pepe));
console.log(Object.prototype.propertyIsEnumerable(pepe));
console.log(Object.getOwnPropertyNames(pepe)); */