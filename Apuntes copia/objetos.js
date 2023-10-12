// (()=>{
//     'use strict'
//     let colores = ["Rojo","Amarillo","Verde"]
//     // 
// })()
let frutas = ["Manzana", "Pera", "Sandia", "Papaya", "Chirimoya", "Uva", "Banana", "Piña", "Durazno", "Frutilla", "Melon"]

let pepe = "Carlos"



let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let [, , , , perro] = numeros
// 
// const nombre ="Pene"
// 'use strict'//libera metodos usables y vuelve estricto el lugar 
/* Object literal */
const datos = {
    nombre: "Miguel",
    edad: 25,
    img: "img/fantasma.png",
    disponible: true,
    direccion: {
        pais: "Bolivia",
        nivel: {
            academico: "Secundario"
        }
    },
    getDatos() {
        return `Mi nombre ${this.nombre} y tengo ${this.edad}`
    }
}
const medidas = {
    peso: "75kg",
    medida: "170cm",
    color: "Negro"
}

/*------------------------------------------- */
// Object.freeze(datos)//congela por completo el objeto, literal nada de nada
// Object.seal(datos) //No se puede agregar ni eliminar pero SI MODIFICAR llaves que ya existen
const unirObjetos = Object.assign(datos, medidas)//copia dos objetos en uno por metodo
// 
const unirObjetos2 = { ...datos, ...medidas }//copia dos objetos tambien, es lo mismo con este spread
console.log(unirObjetos2);
// 
/*------------------------------------------- */
datos.nombre = "Carlos"
console.log(datos);
// delete datos.disponible //Elimina el dato del objeto
// const {nombre,edad, img, direccion,direccion:{nivel:{academico}}} = datos //Destructuracion de datos
// const {}= datos
console.log(Object.keys(medidas)); //Devuelve las propiedades
console.log(Object.values(medidas));//Devuelve los valores
let subEntries = Object.entries(medidas)//Devuelve los dos en subarray
console.log(subEntries);
console.log(subEntries[0][1]);
datos.nuevo = "Mamon"
//////////////////////////////////
/* Object constructor en funcion persona*/
function persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    this.datos = () => {
        return `Mi nombre es ${this.nombre} y mi edad es ${this.edad}`

    }
}

const persona1 = new persona("Pepe", 24)
const persona2 = new persona("Lesly", 44)
console.log(persona1)
console.log(persona2)
console.log(persona2.datos())


/* Object constructor tipo clase */
class Empleado {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    datos() {
        return `Mi nombre es ${this.nombre} y tengo ${this.edad}`
    }
    hobbit() {
        this.datos()
        return `Me gusta rascarme la riata`
    }
}

const empleado1 = new Empleado("Fabricio", 45)
console.log(empleado1)
console.log(empleado1.datos())

class calcular {
    constructor() {
        this.resultado = 0
    }
    sumar(n1, n2) {
        this.resultado += n1 + n2
        return this.resultado
    }
}
const cal = new calcular //Necesario para usar el objet constructor
console.log(cal.sumar(4, 2));


