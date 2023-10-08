console.log("----------------------------");
const deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneracion",
    //edad: 122,
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

console.log(deadpool.getNombre());

// const nombre = deadpool.nombre
// const apellido = deadpool.apellido
// const poder = deadpool.poder

// const { nombre, apellido, poder, edad = 20 } = heroe

// console.log(nombre, apellido, poder, edad);
function imprime({ nombre , apellido, poder, edad = 20 } = heroe){
    console.log(nombre,apellido,poder,edad);
}

imprime(deadpool)


const heroes = ['Deadpool','Batman','Superman']

const [,,h3] = heroes

console.log(h3);