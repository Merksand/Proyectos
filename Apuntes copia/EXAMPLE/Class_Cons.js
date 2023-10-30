class Person{
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    presentarse() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad}`
    }
}

const persona1 = new Person("Miguel",20)
console.log(persona1.presentarse());



class Producto{
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    calcularTotal(){
        return this.precio * this.cantidad
    }
}

const producto1 = new Producto("Zanahoria", 20,12)
console.log(producto1.calcularTotal());



class Libro{
    constructor(titulo,autor,genero) {
        this.titulo = titulo
        this.autor = autor
        this.genero = genero   
    }

    mostrarInfo(){
        return `Titulo: ${this.titulo}, Autor: ${this.autor}, Genero: ${this.genero}`
    }
}

const libro1 = new Libro("Harry Potter", "Samuel Doria", "Fantasia")
console.log(libro1.mostrarInfo());



class Coche{
    constructor(marca,modelo,año_fabricacion) {
        this.marca = marca
        this.modelo = modelo
        this.año_fabricacion = año_fabricacion
    }

    detalles(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año de fabricacion: ${this.año_fabricacion}`
    }
}

const coche1 = new Coche("Toyota","4x4",2007)
console.log(coche1.detalles());



class CuentaBancaria{
    constructor(nombreTitular,saldoInicial) {
        this.nombreTitular = nombreTitular
        this.saldoInicial = saldoInicial
    }

    depositar(monto){
        this.saldoInicial += monto
    }
    retirar(monto){
        if(monto <= this.saldoInicial){
            this.saldoInicial -= monto
        }
        else{
            console.log("Saldo insuficiente");
        }
    }
    saldoActual(){
        return `El saldo actual es de: ${this.saldoInicial}`
    }
}

const cuenta1 = new CuentaBancaria("Miguel",0)
cuenta1.depositar(400)
cuenta1.retirar(1050)
console.log(cuenta1.saldoInicial);





class Estudiante{
    constructor(nombre,edad,asignatura) {
        this.nombre = nombre
        this.edad = edad
        this.asignatura = asignatura
    }

    mostrarInfo(){
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Asignatura: ${this.asignatura.join(",")}`
    }
}
const estudiante1 = new Estudiante("Miguel",20,["Base de Datos","Redes", "Programacion","Estadistica"])
console.log(estudiante1.mostrarInfo());





class Empleado{
    constructor(nombre,cargo) {
        this.nombre = nombre
        this.cargo = cargo
    }
}

class SistemaEmpleados{
    constructor() {
        this.listaEmpleados = []
    }
    agregarEmpleado(empleado){
        this.listaEmpleados.push(empleado)
    }
    eliminarEmpleado(empleado){
        this.listaEmpleados = this.listaEmpleados.filter(e => e.nombre != empleado)
    }

    actualizarEmpleado(nombre,nuevoCargo){

    }
    mostrarEmpleados(){
        this.listaEmpleados.forEach(e => {
            console.log( `Nombre: ${e.nombre}, Cargo: ${e.cargo}`)
        });
    }
}
const sistema = new SistemaEmpleados()
const empleado1 = new Empleado("Pedro","Diseñador grafico")
const empleado2 = new Empleado("Maria", "Diseñador");
const empleado3 = new Empleado("Luis","Desarrollador")
console.log(sistema.agregarEmpleado(empleado1));
console.log(sistema.agregarEmpleado(empleado2));
console.log(sistema.agregarEmpleado(empleado3));
sistema.eliminarEmpleado("Pedro")
console.log(sistema.mostrarEmpleados());
// console.log(sistema);
















let num = ["Miguel","Maria","Luis","Samuel","Tito"]
var empleado = "Maria"
let empleado22 = "Tito"

// num = num.filter(e => e != empleado)
// num = num.filter(e => e != empleado22)
num.pop()
// num.push("Lelo")
// num.unshift("Mario")
num.shift()  
console.log(num);