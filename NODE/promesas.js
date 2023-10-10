console.log("----------------------------");

const empleados = [
    {
        id: 1,
        nombre: "Miguel"
    },
    {
        id: 2,
        nombre: "Fernando"
    },
    {
        id: 3,
        nombre: "Paul"
    }

]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]
const id = 3
const getEmpleado = (id) => {
    return new Promise ((resolve,reject)=>{
        const empleado = empleados.find((e) => e.id === id)?.nombre
        empleado 
        ? resolve(empleado) 
        : reject(`No existe el empleado con id ${id}`)
    })
}
const getSalario = (id)=>{
    return new Promise ((resolve,reject)=>{
        const salario = salarios.find((e)=> e.id == id)?.salario
        salario
        ? resolve(salario)
        : reject(`El salario del id ${id} no existe`)
    })
} 
//resolve es un callback que se va a llamar si todo funciona bien y reject arrojara si hay error

// getEmpleado(id)
//     .then(empleado =>{
    
//         getSalario(id)
//         .then(salario => {
//             console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
//         })
//         .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err))
let nombre;
getEmpleado(id)
    .then((empleado)=>{
        nombre = empleado
        return getSalario(id)
    })
    .then(salario =>{
        console.log(`EL empleado con el nombre ${nombre} tiene un salario de ${salario}`)
    })
    .catch((err)=>console.log(err))



