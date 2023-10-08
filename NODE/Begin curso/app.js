console.log("-------------------------------------------");
// console.clear()
let base = 1
console.log("=======================================");
console.log(`Tabla del ${base}`);
console.log("=======================================");
let salida = ""
for (let i = 1 ; i <= 10; i++) {
    salida += `${ base } x ${ i } = ${ base * i}\n` 
} 
console.log(salida);
const fs = require('fs')

fs.writeFile(`Tabla del ${base} `,salida,(err)=>{
    if(err) throw err
    console.log(`Tabla del ${base} creado exitosamente`);
})
