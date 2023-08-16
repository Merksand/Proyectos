let met ="Todos son mierda y unos putos de mierda la mierda perro";
let mete =9384725;
let meter = ["manzana","pera","sandia","chirimoya","melon","uva","banana"]
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
rs = met.indexOf("mierda",29);
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
rs = met.startsWith("m",10)//Devuelve true si la palabra y la longitud son iguales
rs = met.endsWith("o",2)//Del numero uno menos para encontrar dar true
rs = met.includes("unos")//Verifica si hay esa palabra
/******** METODOS EN ARRAY ******* */


rs = met.split(" ")//Convierte en array a una cadena
rs = meter.sort()//ordena una matriz alfabeticamente
rs = meter.reverse()//Invierte elementos de una matriz y con sort puede invertirlo alfabeticamente
// rss = metero.sort(function(a,b){return a-b})//ordena numericamente los arrays
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
let alto = window.screen.height
let ancho = window.screen.width
let yt =window.location.href
//let gg= confirm("me la pelas")

Math.round()//redondea normal
Math.ceil()//redondea cuando esta 1.1= 2 por ejepmplo, con un decimal ya redondea  
Math.floor()//redondea hacia abajo del decimal por ejmplo 2.9 = 2





/////////////PRACTICAS//////////////////////////////

let array = ["Perro","Gato","Elefante","jaque"]
array.push()

let resultado = array.filter(array=>array.length==4)//condicional parra arrays empieza de 1
document.write(resultado)

let num = [1,2,3,4,5,6,7,8,9,10] 
let mapear = num.map(nu=>  "<br>"+ nu +" culo")
document.write(mapear)

let sumar = num.reduce((a,b)=> a+b)
document.write(sumar)
//////////////
rs = met.some(e => e.nombre == "Celular")//En un arreglo de se puede utilizar en arrays tanto en objetos .some para encontrar un elemento en un objeto en vez de .includes ya que eso no sirve en este caso
rs = met.findIndex(e => e.nombre == "Celular")//Encuentra el indice de un array
let redu = carrito.reduce((total, producto)=> total + producto.precio,110) //Suma precio del objeto y el tercer parametro es de cuanto quieres empezar
fil = carrito.filter(e => e.nombre !== "Audifonos")
ever = carrito.every(e => e.precio < 1000)//Revisa todos, lo contrario de .some



delete producto.nombre;//palabra eliminar una propiedad de un objeto