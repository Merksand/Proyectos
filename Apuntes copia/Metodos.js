let met ="Todos son mierda y unos putos de mierda la mierda perro";
let mete =9384725;
let meter = ["manzana","pera","sandia","chirimoya","melon","uva","banana"]
const nombres = ['Leos', 'Isabel', 'Ían', 'Le']
const carrito = [
     { nombre: 'Monitor 27 Pulgadas', precio: 500 },
     { nombre: 'Televisión',          precio: 100 },
     { nombre: 'Tablet',              precio: 200 },
     { nombre: 'Audifonos',           precio: 300 },
     { nombre: 'Teclado',             precio: 400 },
     { nombre: 'Celular',             precio: 700 },
 ]
let metero = [5,7,6,4,8,9,3,2,0,1]
rs = met.search("mierda");
rs = met.indexOf("mierda",29);//Te dice en que posicion esta, con el segundo parametro se podra busca la posicion desde el 0 hasta su posicion actual y tambien es opcional, y si no existe dara -1
rs = met.includes("unos")//Verifica si hay esa palabra dara true y si no pues false
rs = met.lastIndexOf("mierda",12);//El seg. parametro cuenta del inicio hacia atras para buscar la palabra
rs = met.slice(-9,-1) //Para corta un String menos que substring
rs = met.substring(6,12)
rs = met.substr(-16,6)
rs = met.replace("unos","a")
rs = met.toUpperCase()
rs = met.toLowerCase()
rs = met.concat(" Mamones ",3," Tres")
rs = met.trim()
rs = met.repeat()//Pos hace repetir las palabras wey
rs = mete.toString().padEnd(10,8)//Rellena una cadena con mas
rs = met.charAt(2)
rs = met.charCodeAt(2)//Devulve un codigo UTF-16
rs = met.length
rs = met.match(/mierda/g)//Busca cadena y devuekve como array

let frase = "Hola mundo"
console.log(frase.startsWith("Hola"));//comprueba si una cadena comienza con los caracteres proporcionados y devuelve true si lo hace, y false si no.
console.log(frase.endsWith("do"))//verifica si una cadena termina con los caracteres proporcionados y devuelve true si lo hace, y false si no.
/******** METODOS EN ARRAY ******* */


rs = met.split(" ")//Convierte en array a una cadena
rs = meter.sort()//ordena una matriz alfabeticamente
rs = meter.reverse()//Invierte elementos de una matriz y con sort puede invertirlo alfabeticamente
rs = metero.sort((a,b)=> b-a)//ordena de forma invertida, todo depende del orden de a y b    a-b b-a
rs = meter.push("palabra")//Sirve para añadir un array a lo ultimo
rs = meter.unshift("palabra")//Funcion que puede estar al ultimo pero pone al principio en un array
rs = meter.pop("palabra");//Elimina el ultimo elemento de un arreglo
rs = meter.shift("palabra");//Elimina el primer elemento de un arreglo
rs = meter.splice(1,1);//Elimina elemento de un arreglo depende del posicion que se ponga, es como pop y shift unidos


////////////////////
let er =""
const ef = metero.map = ((a)=>{
     er = a+124
})

console.log(er)
console.log(rs)
console.log(isNaN(met));//Para saber si no es un numero


let r =2;
rs = r.toExponential(2)//Para exponentes grande "233e+8"
rs = r.toFixed(2)//devuelve con centavos, bueno para dinero
// let alto = window.screen.height
// let ancho = window.screen.width
// let yt =window.location.href
//let gg= confirm("me la pelas")

Math.round()//redondea normal
Math.ceil()//redondea cuando esta 1.1= 2 por ejepmplo, con un decimal ya redondea  
Math.floor()//redondea hacia abajo del decimal por ejmplo 2.9 = 2





/////////////PRACTICAS//////////////////////////////

let array = ["Perro","Gato","Elefante","jaque"]
array.push()

let resultado = array.filter(array=>array.length >= 5)//condicional parra arrays, empieza de 1
console.log(resultado);

let num = [1,2,3,4,5,6,7,8,9,10] 
let mapear = num.map(nu=>  "<br>"+ nu +" culo")
console.log(mapear)


let sumar = num.reduce((a,b)=> a+b)
console.log(sumar)
//////////////
rs = carrito.some(e => e.nombre == "Celular")//some solo requiere que al menos uno de los elementos cumpla con la condición para devolver true.
console.log(rs)

rs = nombres.some(name => name.length >= 4)
console.log(rs)

encontrar = nombres.find(e => e.length > 1) //permite encontrar el primer elemento que cumple con una condición, este método te DEVUELVE el elemento en sí, no un valor booleano, sino encuentra entonces dara UNDEFINED
console.log(encontrar);

ever = carrito.every(e => e.precio < 1000)//every requiere que todos los elementos cumplan con la condición para que devuelva true.
console.log(ever)

rs = carrito.findIndex(e => e.nombre == "Celular")//findIndex es similar a find, pero en lugar de devolver el elemento que cumple con la condición, devuelve el índice de ese elemento, y si no existe el elemento, dara -1
console.log(rs)

let redu = carrito.reduce((total, producto)=> total + producto.precio,110) //Suma precio del objeto y el tercer parametro es de cuanto quieres empezar
fil = carrito.filter(e => e.nombre !== "Audifonos")
console.log(fil)


delete producto.nombre;//palabra eliminar una propiedad de un objeto













/* ---------Metodo array---------------- */
const a = undefined
console.log(a);
console.log(!a);
console.log(!!a);


let frutas = ["Manzana", "Pera", "😎", "Papaya", 9, "Uva", "Banana", "Piña", "❤", 100, "Melon", "ajfigod"]
const nomb = ['Leos', 'Isabel', 'Ían', 'Le', 'Leonardo', 'Dicaprio']
const nombre = ["lao", "pao", "zao"]
const numbers = [6, 3, 99, 3, 4, 2, 0, 7, 12, 5]
console.log(frutas.indexOf("Uva"));
console.log(frutas.includes("😎"));
console.log(frutas.some(fruta => fruta == "Uva"));
console.log(frutas.some(fruta => fruta.length >= 7));
console.log(nomb.every(e => e.length >= 2));
console.log(nomb.find(e => e.length > 5));
console.log(nomb.findIndex(e => e.length > 6));



let nuevo = [...numbers]
console.log(nuevo.sort());
console.log(numbers.sort((a, b) => b - a));
