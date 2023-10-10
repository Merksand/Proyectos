// setTimeout(()=>{
//     console.log("Hola mundo");
// },3000);
console.log("----------------------------");
const getUsuario = (id,pene) =>{

    const usuario ={
        id,
        nombre: "Fernando"
    }
    setTimeout(()=>{
        pene(usuario);
    },2000)
}
getUsuario(20 , (Peneuser)=>{
    console.log (Peneuser.id)
    console.log(Peneuser.nombre.toUpperCase());
});