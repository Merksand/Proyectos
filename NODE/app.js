console.log("-------------------------------------------");
const {crearArchivo} = require('./helpers/multiplicar')

console.clear()
// let base = 92

// console.log(process.argv);

const [,,arg3 = 'base=100'] = process.argv
const [,base = 200] = arg3.split('=')



crearArchivo(base)
    .then(archivo => console.log(archivo,"Creado con exito"))
    .catch(err => console.log(err))




//npm i colors@1.0.0     Descargar version especifica
//npm update
//npm update

