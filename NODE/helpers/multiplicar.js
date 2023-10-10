const fs = require('fs')

const crearArchivo = async(base = 2) =>{
    try {
        console.log("=======================================");
        console.log("Tabla del ", base);
        console.log("=======================================");
        let salida = ''
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        fs.writeFileSync(`Tabla del ${base}.txt`, salida)

        return salida

    } catch (err) {
        console.log("Hubo un error");
    }
}

module.exports = {
    crearArchivo
}




//const crearArchivo = (base = 2) => {
//     console.log("=======================================");
//     console.log(`Tabla del ${base}`);
//     console.log("=======================================");

//     let salida = ""
//     for (let i = 1; i <= 10; i++) {
//         salida += `${base} x ${i} = ${base * i}\n`
//     }

//     // fs.writeFile(`Tabla del ${base} `,salida,(err)=>{
//     //     if(err) throw err
//     //     console.log(`Tabla del ${base} creado exitosamente`);
//     // })

//     try {
//         fs.writeFileSync(`Tabla del ${base}.txt`, salida)

//         console.log(`Tabla del ${base} creada`);
//         console.log(salida);
//     } catch (error) {
//         console.log("Hubo un error");
//     }
// }