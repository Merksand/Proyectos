class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const persona1 = new Persona('Juan', 30);
persona1.presentarse(); // Salida: Hola, mi nombre es Juan y tengo 30 años.



class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularTotal() {
        return this.precio * this.cantidad;
    }
}

// Ejemplo de uso
const producto1 = new Producto('Laptop', 1000, 2);
console.log(producto1.calcularTotal()); // Salida: 2000




class Libro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
    }

    mostrarInfo() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Género: ${this.genero}`);
    }
}

// Ejemplo de uso
const libro1 = new Libro('El Quijote', 'Miguel de Cervantes', 'Novela');
libro1.mostrarInfo(); // Salida: Título: El Quijote, Autor: Miguel de Cervantes, Género: Novela




class Coche {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    detalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
}

// Ejemplo de uso
const coche1 = new Coche('Toyota', 'Corolla', 2022);
coche1.detalles(); // Salida: Marca: Toyota, Modelo: Corolla, Año: 2022







class CuentaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(monto) {
        this.saldo += monto;
    }

    retirar(monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
        } else {
            console.log('Saldo insuficiente.');
        }
    }

    consultarSaldo() {
        console.log(`Saldo actual: ${this.saldo}`);
    }
}

// Ejemplo de uso
const cuenta1 = new CuentaBancaria('Juan Pérez', 1000);
cuenta1.depositar(500);
cuenta1.retirar(300);
cuenta1.consultarSaldo(); // Salida: Saldo actual: 1200






class Rectangulo {
    constructor(ancho, altura) {
        this.ancho = ancho;
        this.altura = altura;
    }

    calcularArea() {
        return this.ancho * this.altura;
    }

    calcularPerimetro() {
        return 2 * (this.ancho + this.altura);
    }
}

// Ejemplo de uso
const rectangulo1 = new Rectangulo(5, 3);
console.log(rectangulo1.calcularArea()); // Salida: 15
console.log(rectangulo1.calcularPerimetro()); // Salida: 16





class Estudiante {
    constructor(nombre, edad, asignaturas) {
        this.nombre = nombre;
        this.edad = edad;
        this.asignaturas = asignaturas;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Asignaturas: ${this.asignaturas.join(', ')}`);
    }
}

// Ejemplo de uso
const estudiante1 = new Estudiante('Laura', 20, ['Matemáticas', 'Física', 'Química']);
estudiante1.mostrarInfo(); // Salida: Nombre: Laura, Edad: 20, Asignaturas: Matemáticas, Física, Química


/* ----------------------------- */
/* ----------------------------- */
/* ----------------------------- */
/* ----------------------------- */
/* ----------------------------- */
/* ----------------------------- */
/* ----------------------------- */
/* ----------------------------- */
/* ----------------------------- */
/* ----------------------------- */
/* ----------------------------- */
/* ----------------------------- */
/* ----------------------------- */
/* ----------------------------- */
/* ----------------------------- */
/* ----------------------------- */


Ejercicio 1: Sistema de Gestión de Empleados

javascript
Copy code
class Empleado {
    constructor(nombre, cargo) {
        this.nombre = nombre;
        this.cargo = cargo;
    }
}

class SistemaEmpleados {
    constructor() {
        this.listaEmpleados = [];
    }

    agregarEmpleado(empleado) {
        this.listaEmpleados.push(empleado);
    }

    eliminarEmpleado(nombre) {
        this.listaEmpleados = this.listaEmpleados.filter(empleado => empleado.nombre !== nombre);
    }

    actualizarCargo(nombre, nuevoCargo) {
        this.listaEmpleados.forEach(empleado => {
            if (empleado.nombre === nombre) {
                empleado.cargo = nuevoCargo;
            }
        });
    }

    mostrarEmpleados() {
        this.listaEmpleados.forEach(empleado => {
            console.log(`Nombre: ${empleado.nombre}, Cargo: ${empleado.cargo}`);
        });
    }
}

// Ejemplo de uso
const sistema = new SistemaEmpleados();
const empleado1 = new Empleado("Juan", "Desarrollador");
const empleado2 = new Empleado("Maria", "Diseñador");
sistema.agregarEmpleado(empleado1);
sistema.agregarEmpleado(empleado2);
sistema.mostrarEmpleados();
sistema.eliminarEmpleado("Juan");
sistema.actualizarCargo("Maria", "Gerente");
sistema.mostrarEmpleados();
Ejercicio 2: Juego de Preguntas y Respuestas

javascript
Copy code
class Pregunta {
    constructor(pregunta, respuesta) {
        this.pregunta = pregunta;
        this.respuesta = respuesta;
    }
}

class JuegoPreguntas {
    constructor() {
        this.listaPreguntas = [];
    }

    agregarPregunta(pregunta) {
        this.listaPreguntas.push(pregunta);
    }

    hacerPreguntaAleatoria() {
        const preguntaAleatoria = this.listaPreguntas[Math.floor(Math.random() * this.listaPreguntas.length)];
        const respuestaUsuario = prompt(preguntaAleatoria.pregunta);
        if (respuestaUsuario === preguntaAleatoria.respuesta) {
            console.log("¡Respuesta correcta!");
        } else {
            console.log("Respuesta incorrecta. La respuesta correcta es:", preguntaAleatoria.respuesta);
        }
    }
}

// Ejemplo de uso
const juego = new JuegoPreguntas();
const pregunta1 = new Pregunta("¿Cuál es la capital de Francia?", "París");
const pregunta2 = new Pregunta("¿Cuál es el color del cielo?", "Azul");
juego.agregarPregunta(pregunta1);
juego.agregarPregunta(pregunta2);
juego.hacerPreguntaAleatoria();
Estos son solo ejemplos básicos para darte una idea de cómo empezar.Puedes expandir y mejorar estos códigos según tus necesidades y requerimientos específicos.Si necesitas ayuda con alguno de los otros ejercicios, no dudes en preguntar.





Ejercicio 3: Calculadora

javascript
Copy code
class Calculadora {
    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Error: No se puede dividir por cero.";
        }
    }
}

// Ejemplo de uso
const calculadora = new Calculadora();
console.log(calculadora.sumar(5, 3)); // Output: 8
console.log(calculadora.restar(7, 2)); // Output: 5
console.log(calculadora.multiplicar(4, 6)); // Output: 24
console.log(calculadora.dividir(10, 2)); // Output: 5
console.log(calculadora.dividir(10, 0)); // Output: "Error: No se puede dividir por cero."

Ejercicio 4: Lista de Tareas //NO HAY

javascript
Copy code
class Tarea {
    constructor(descripcion, completada = false) {
        this.descripcion = descripcion;
        this.completada = completada;
    }

    marcarComoCompletada() {
        this.completada = true;
    }
}

class ListaTareas {
    constructor() {
        this.lista = [];
    }

    agregarTarea(tarea) {
        this.lista.push(tarea);
    }

    mostrarTareas() {
        this.lista.forEach((tarea, index) => {
            console.log(`${index + 1}. Descripción: ${tarea.descripcion}, Completada: ${tarea.completada}`);
        });
    }
}

// Ejemplo de uso
const listaTareas = new ListaTareas();
const tarea1 = new Tarea("Hacer compras");
const tarea2 = new Tarea("Estudiar JavaScript");
listaTareas.agregarTarea(tarea1);
listaTareas.agregarTarea(tarea2);
listaTareas.mostrarTareas();
tarea1.marcarComoCompletada();
listaTareas.mostrarTareas();
Espero que estos ejercicios sean útiles. ¡Si necesitas más, no dudes en pedirlos!



rrespondientes:

Ejercicio 5: Libro y Biblioteca

javascript
Copy code
class Libro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
    }

    obtenerInfo() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Género: ${this.genero}`;
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
    }

    agregarLibro(libro) {
        this.libros.push(libro);
    }

    listarLibros() {
        this.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.obtenerInfo()}`);
        });
    }
}

// Ejemplo de uso
const biblioteca = new Biblioteca();
const libro1 = new Libro("El Principito", "Antoine de Saint-Exupéry", "Infantil");
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", "Realismo mágico");
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.listarLibros();

Ejercicio 6: Cuenta Bancaria //NO HAY

javascript
Copy code
class CuentaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(monto) {
        this.saldo += monto;
    }

    retirar(monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    consultarSaldo() {
        return this.saldo;
    }
}

// Ejemplo de uso
const cuenta = new CuentaBancaria("Juan Pérez", 1000);
console.log(cuenta.consultarSaldo()); // Output: 1000
cuenta.depositar(500);
console.log(cuenta.consultarSaldo()); // Output: 1500
cuenta.retirar(700);
console.log(cuenta.consultarSaldo()); // Output: 800
cuenta.retirar(1000); // Output: Saldo insuficiente.