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

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */




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


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */





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


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */





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
        this.listaEmpleados.forEach(empleado => {
            if(empleado.nombre == nombre){
                empleado.cargo = nuevoCargo
            }
        });
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
sistema.agregarEmpleado(empleado1)
sistema.agregarEmpleado(empleado2)
sistema.agregarEmpleado(empleado3)
sistema.eliminarEmpleado("Pedro")
sistema.actualizarEmpleado("Luis","Gerente general")
sistema.actualizarEmpleado("Maria","Despedida")
sistema.mostrarEmpleados()
// console.log(sistema);


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


class Calculadora{
    sumar(a,b){
        return a+b
    }
    restar(a,b){
        return a-b
    }
    multiplicar(a, b) {
        return a * b
    }
    dividir(a, b) {
    return b = !(b <= 0) ? a / b: "Error: Ingrese un numero mayor a 0"
    }
    potencia(a,b){
        return Math.pow(a,b)
    }
    raizCuadrada(a){
        return Math.sqrt(a)
    }
    logaritmo(a){
        return Math.log10(a)
    }
}

const calculadora = new Calculadora()
console.log(calculadora.sumar(3,4));
console.log(calculadora.dividir(5,2));
console.log(calculadora.potencia(3,3));
console.log(calculadora.raizCuadrada(5));
console.log(calculadora.logaritmo(12));



/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


class Tarea{
    constructor(descripcion, completada = false) {
        this.descripcion = descripcion
        this.completada = completada
    }

    marcarCompletada(){
        this.completada = true
    }
}

class ListaTareas{
    constructor() {
        this.lista = []
    }

    agregarTarea(tarea){
        this.lista.push(tarea)
    }
    mostrarLista(){
        this.lista.forEach((tarea, index) => {
            console.log(`${index + 1}: ${tarea.descripcion}`);
        });
    }
}
const listaTareas = new ListaTareas()
const tarea1  = new Tarea("Estudiar para la evaluacion")
const tarea2  = new Tarea("Hacer tarea base de datos")
const tarea3  = new Tarea("Iniciar proyecto")
const tarea4  = new Tarea("Conseguir complementos")
listaTareas.agregarTarea(tarea1)
listaTareas.agregarTarea(tarea2)
listaTareas.agregarTarea(tarea3)
listaTareas.agregarTarea(tarea4)
listaTareas.mostrarLista()


/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */



class NewProducto{
    static id = 1
    static productosConteo = 0
    constructor(nombre,precio,stock,id ) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.id = NewProducto.id++
        NewProducto.productosConteo++
    }
}
class Carrito{
    constructor() {
        this.listaProductos = []
        this.costoTotal = 0
    }
    agregarProducto(producto, stock = 1){
        for (let i = 0; i < stock; i++) {
            this.listaProductos.push(producto)            
        }
    }
    calcularTotal(){
        return this.listaProductos.reduce((total,producto)=> total + producto.precio,0)
    }
    realizarCompra(){
        this.listaProductos.forEach(e => {
            e.stock--
        });
        return `Gracias por la compra`
    }
}


const carrito1 = new Carrito()
const product0 = new NewProducto("Polera",60,20,Producto.id)
const product1 = new NewProducto("Pantalon",120,30)
const product2 = new NewProducto("Gorra",40,50)
// carrito1.agregarProducto(product1)
// carrito1.agregarProducto(product2)
// carrito1.agregarProducto(product3)
// for (let i = 0; i < NewProducto.productosConteo; i++) {
//     carrito1.agregarProducto("product"+i)
//     console.log(i);
    
// }
console.log(carrito1.calcularTotal());

console.log(carrito1.realizarCompra("Tomate"));

console.log(carrito1.listaProductos);
console.log(NewProducto.id);










