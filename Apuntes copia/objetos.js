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
delete datos.disponible //Elimina el dato del objeto
const { nombre, edad, img, direccion, direccion: { nivel: { academico } } } = datos //Destructuracion de datos
console.log(datos);
console.log(Object.keys(medidas)); //Devuelve las propiedades
console.log(Object.values(medidas));//Devuelve los valores
let subEntries = Object.entries(medidas)//Devuelve los dos en subarray
console.log(subEntries);
console.log(subEntries[0][1]);
datos.nuevo = "Mamon"
//////////////////////////////////
/* Object constructor en funcion persona*/
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
        this.comida = ''
    }
    datos() {
        return `Mi nombre es ${this.nombre} y tengo ${this.edad}`
    }
    hobbit() {
        return `Me gusta rascarme la riata`
    }
}

const empleado1 = new Empleado("Fabricio", 45)
console.log(empleado1)
// console.log(empleado1.datos())
console.log(empleado1.datos())

/* ------------------------------------------------------------- */
console.log("----------------------------------------");
class Persona { //Tiene por defecto use strict
    /* opcionales pero modifica el orden de las propiedades*/
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        this.nombre = nombre
        this.codigo = codigo
        this.frase = frase
    }

    set setComidaFavorita(comida) {  //set establece un valor, o normal es que tenga un sólo argumento 
        this.comida = comida.toUpperCase()
    }
    get getComidaFavorita() {//Recupera un valor
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }
    quienSoy() {
        console.log(`Me llamo ${this.nombre} y mi identidad es ${this.codigo}`);
    }
    miFrase() {
        console.log(`${this.codigo} dice: ${this.frase}`);
        this.quienSoy()//no servira si tiene un return, sólo con console para esta practica si o si los 2
    }
}

const spiderman = new Persona('Peter parker', 'Spiderman', 'Soy un puto')
spiderman.setComidaFavorita = 'El pastel de pene'
spiderman.miFrase();
console.log(spiderman.getComidaFavorita);
console.log(spiderman)


console.log("----------------------------------------");
class PersonaStatic {
    static conteo = 0;
    static get getConteo() { //Metodos estaticos
        return PersonaStatic.conteo + " Instancias"
    }
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        this.nombre = nombre
        this.codigo = codigo
        this.frase = frase
        PersonaStatic.conteo++ //Persona haciendo referencia a la clase, para instancia es this
    }
}
const spiderman2 = new PersonaStatic('Peter undefined', 'Spiman', 'Soy undfasd puto')
const spiderman3 = new PersonaStatic('Peter parkers', 'Spiderman', 'Soy un puto')
const spiderman4 = new PersonaStatic('Peter parkerf', 'Spiderman', 'Soy un puto')
console.log(spiderman2)
console.log(PersonaStatic.conteo);
console.log(PersonaStatic.getConteo);


console.log("-------------------------------------------");

class heroe extends Persona { //Es la herencia
    clan = 'sin clan'

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase)//Super siempre tiene que estar primero si se usa this pero si se usar cons o let no hay promblema

        this.clan = "Los perdedores"

    }
    quienSoy() {
        console.log(`Me llamo ${this.nombre} y soy del clan ${this.clan}`); //Esta sobreescribiendo)
        super.quienSoy()
    }
}


const heroe1 = new heroe('Bruss banner', 'Hulk', 'Yo soy hulk')
console.log(heroe1)
heroe1.quienSoy()

// const spiderman3 = new PersonaStatic('Peter parkers', 'Spiderman', 'Soy un puto')
// const spiderman4 = new PersonaStatic('Peter parkerf', 'Spiderman', 'Soy un puto')

console.log("-------------------------------------------");

class Rectangulo {
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base
        this.altura = altura

        this.#area = this.base * this.altura
    }
    get getPrivado() {
        return this.#area * 5
    }
}

const rectangulo = new Rectangulo(5, 10);
console.log(rectangulo);
console.log(rectangulo.getPrivado);

///////////////////////////////
class Singleton {
    static instancia;
    nombre = '';
    constructor(nombre = '') {

        if (!!Singleton.instancia) {
            return Singleton.instancia
        }
        Singleton.instancia = this
        this.nombre = nombre
        // return this
    }
}
const instancia1 = new Singleton("Miguel")
const instancia2 = new Singleton("Mario")
const instancia3 = new Singleton("Lesly")

console.log(`Nombre instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre instancia3 es: ${instancia3.nombre}`);

////////////////////////////////////////////

class Person {
    static porObjeto({ nombre, apellido, pais }) {
        return new Person(nombre, apellido, pais)
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre
        this.apellido = apellido
        this.pais = pais
    }

    getInfo() {
        return `Info: ${this.nombre}, ${this.apellido}, ${this.pais}`
    }
}

const nombre1 = "Miguel",
    apellido1 = "Flores",
    pais1 = "Paraguay"

const fher = {
    nombre: "Fernando",
    apellido: "Herrera",
    pais: "Costa Rica"
}

const person1 = new Person(nombre1, apellido1, pais1)
const person2 = Person.porObjeto(fher)
console.log(person2)
console.log(person1.getInfo());






















