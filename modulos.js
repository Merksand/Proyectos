let salida = document.querySelector(".salida")

localStorage.setItem("Nombre", "Miguel")
localStorage.setItem("Edad", 19)

const frutas = ["Manzana","Pera","Chirimoya","Frutilla"]
const persona ={
    nombre: "Miguel",
    edad: 20,
    hobbit: "Escribir"
}
localStorage.setItem("Personas",JSON.stringify(persona))
localStorage.setItem("FRUTAS",JSON.stringify(frutas))
salida.innerHTML = localStorage.getItem("Nombre")
let frutaLocal = localStorage.getItem("FRUTAS")
salida.innerHTML = frutaLocal
salida.innerHTML = localStorage.getItem("Personas")
console.log(frutaLocal);
console.log(JSON.parse(frutaLocal))


// let objeto = {
//     nombre: "Madera",
//     tipo: "Super",
//     edad: 12
// }
// meses = ["Enero", "Febrero", "Marzo",]

// let pro = JSON.stringify(objeto)
// console.log(pro)
// localStorage.setItem("porducto", pro)
// localStorage.setItem("perra", JSON.stringify(objeto))

// const porJ = localStorage.getItem("pepe")
// console.log(JSON.parse(porJ))

// localStorage.setItem("MESES", re = JSON.stringify(meses))

// console.log(re)
// console.log(JSON.parse(re))

// meses.push("Abril", "Mayo", "Junio")
// localStorage.removeItem("Edad")
// localStorage.setItem("MESES", JSON.stringify(meses))

