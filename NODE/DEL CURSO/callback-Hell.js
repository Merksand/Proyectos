console.log("----------------------------");

const empleados = [
    {
        id:1,
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
        id:1,
        salario:1000
    },
    {
        id: 2,
        salario: 1500
    }
]
const id = 3

const getEmpleado = (id,pe)=>{
    const empleado = empleados.find((e)=> e.id === id)?.nombre
    //return empleado ? pe(null,empleado) : pe(`Empleado con id ${id} no existe`) 
    if(empleado){
        pe(null, empleado)
    }else{
        pe(`Empleado con id ${id} no existe`) 
    }
}

const getSalario = (id,callback)=>{
    const salario = salarios.find((e)=> e.id === id)?.salario
    if(salario){
        callback(null,salario);
    }
    else{
        callback(`El salario del id ${id} no existe`)
    }
}
getEmpleado(id,(err, empleado)=>{
    if(err){
        console.log("ERROR!");
        return console.log(err);
    }
    // console.log("Empleado existe");
    // console.log(empleado.nombre);
    getSalario(id, (err, salario) => {
        if (err) {
            console.log("ERROR!!!!!");
            return console.log(err);
        }
        console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
        

    })
})

