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
const id = 4
const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id)?.nombre
        empleado
            ? resolve(empleado)
            : reject(`No existe el empleado con id ${id}`)
    })
}
const getSalario = (id) => {
        return new Promise((resolve, reject) => {
            const salario = salarios.find((e) => e.id == id)?.salario
            salario
                ? resolve(salario)
                : reject(`El salario del id ${id} no existe`)
        })
    } 


    /////////////////////
const getUsuario = async(id)=>{
    try {
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)
        return `EL salario del empleado ${empleado} es ${salario}`
    } catch (error) {
        throw error
    }
}
getUsuario(id)
    .then(msg=> {
        console.log(`Todo bien`);
        console.log(msg)
    })
    .catch(err =>{
        console.log(`Todo mal`);
        console.log(err);
    })