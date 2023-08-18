/* const boton = document.querySelector(".prueba"); //LOS SENCILLOS

boton.addEventListener("click",()=>{
    alert("Perraaa")
}) */

/* boton.onclick = () =>{
    alert("Me la pelas")
}  */


/* function saludar(){
    respuesta = prompt("Hola we, ¿Como estas");
    if(respuesta == "bien"){
        alert("Me alegro");
   }
   if(respuesta == "mal"){   
       alert('Mejorate');
   }
}
saludar() */
/* const boton = document.querySelector(".prueba");
boton.addEventListener("mouseleave",saludar)
function saludar(){
    alert("HOLAAA");
    boton.removeEventListener("click",saludar) //LO ELIMINA Y ES LA UNICA FORMA PARA ELIMINAR
} */

/* const grande = document.querySelector(".contenedor");
const medio = document.querySelector(".caja");
const peque = document.querySelector(".contenido");


peque.addEventListener("click",(e)=>{
    alert("BOTON")
    e.stopPropagation()//Para detener la propagacion y lo relacionado 
},true); // es para el orden de padres e hijos 
medio.addEventListener("click",(e)=>{
    alert("AZUL")
    e.stopPropagation()//Para detener la propagacion y lo relacionado 
});

grande.addEventListener("click",(e)=>{
    alert("ROJO")
    e.stopPropagation()//Para detener la propagacion y lo relacionado 
}); */

const uno    = document.querySelector(".boton1");
const dos    = document.querySelector(".boton2");
const tres   = document.querySelector(".boton3");
const cuatro = document.querySelector(".boton4");
const cinco  = document.querySelector(".boton5");
const seis   = document.querySelector(".boton6");
const siete  = document.querySelector(".boton7");
const ocho   = document.querySelector(".boton8");
const nueve  = document.querySelector(".boton9");
const diez   = document.querySelector(".boton10");


uno.addEventListener("click",(e)=>{//Reacciona con un click
    uno.style.background="pink";
})
dos.addEventListener("dblclick",(e)=>{//Reacciona con doble click
    dos.style.background="pink";
})
tres.addEventListener("mouseover",(e)=>{//Reacciona cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos
    tres.style.background="pink";
})
cuatro.addEventListener("mouseout",(e)=>{//Reacciona cuando se mueve el puntero fuera de un elemento o de sus elementos
    cuatro.style.background="pink";
})
cinco.addEventListener("contextmenu",(e)=>{//Reacciona cuando dan click al boton derecho del mouse
    cinco.style.background="pink";
})
seis.addEventListener("mouseenter",(e)=>{//Reacciona cuando el puntero se mueve sobre un elemento 
    seis.style.background="pink";
})
siete.addEventListener("mousemove",(e)=>{//Reacciona cuando el puntero se mueve mientras esta sobre un elemento
    siete.style.background="pink"; 
})
ocho.addEventListener("mouseleave",(e)=>{//Reacciona cuando sale del elemento
    ocho.style.background="pink";
})
nueve.addEventListener("mousedown",(e)=>{//Reacciona solo con apretar y no es necesario soltar
    nueve.style.background="pink";
})
diez.addEventListener("mouseup",(e)=>{//Reacciona cual sueltan el boton 
    diez.style.background="pink";
})
//

////////////////////////////////////////////////////////////////
const teclado = document.querySelector(".teclado");

teclado.addEventListener("blur", (e)=>{
    console.log("Salio del elemento ");//Reacciona al salir del input u otro elemento y es del MOUSE
})


teclado.addEventListener("keydown", (e)=>{
    console.log(e.target.value);//La mas utilizada              "Una tecla fue presionada " +  e.key
})
/* teclado.addEventListener("keypress", (e)=>{
    console.log("Una tecla fue presionada y soltada "+ e.key);//No detecta teclas especiales 
})

teclado.addEventListener("keyup", (e)=>{
    console.log("Una tecla fue soltada " + e.key);//Funciona al ser soltada
})
 */

///////////////////////////////////////////////////////////////////////////
const contenedor = document.querySelector(".sele");
const inter      = document.querySelector(".interfaz");
/* EVENTOS DE INPUT CON TECLADO Y MOUSE */
inter.addEventListener('copy', ()=>{
    console.log("COPIO ALGOOOOOOOOOOOOOO");//Reacciona se copia algo escrito y es del MOUSE
})
inter.addEventListener("paste", (e)=>{
    console.log("PEGOOOOOO");//Reacciona se pega algo escrito y es del MOUSE
})
inter.addEventListener("cut", (e)=>{
    console.log("COOOORTOOOO");//Reacciona se CORTA algo escrito y es del MOUSE
})
inter.addEventListener("input", (e)=>{
    console.log("COMBINACION");//Es una combinacion de los 3 anteriores + EL KEYDOWN
})

inter.addEventListener("keyup", (e)=>{ //La mas utilizada                         
    let tecla = e.key;
    denuevo =tecla 
    contenedor.innerHTML = denuevo;
})


/////////////////////PRACTICA///////////////////////////
/////////////////////PRACTICA///////////////////////////
/////////////////////PRACTICA///////////////////////////
const newBotones = document.getElementsByClassName("cal");
const display    = document.querySelector(".panti")

const array = Array.from(newBotones);
array.forEach((e) => {
    e.addEventListener("click", ()=>{
        display.innerHTML = e.innerHTML
    })
    
});



const sietes = document.querySelector(".siete");
const ocha = document.querySelector(".ocho");
const inne = document.querySelector(".inner");
const reinicio = document.querySelector(".root");
const pantalla = document.querySelector(".sele");
const otro = document.querySelector(".salo");
const chau = document.querySelector(".chau");

let x  = 0;
let y = 0;
sietes.addEventListener("click", ()=>{    
    pantalla.innerHTML = x++
})
ocha.addEventListener("click", ()=>{    
    otro.innerHTML = y--
})

function insert(insert){
    var numero = chau.innerHTML
    chau.innerHTML  = numero + insert;
}
reinicio.addEventListener("click", ()=>{
    pantalla.innerHTML = x = ""
    otro.innerHTML = y = "";
    chau.innerHTML = numero = ""
    teclado.innerHTML=""
    inter.innerHTML=""
})

const persona = {
    nombre: "Roberto",
    edad: 32,
    hobbit: ["Jugar", "correr","saltar", ],
    hijos: 0,
    direccion:{
        barrio: "El palmar",
        calle: "#2"
    },
    nepe(){
    console.log(this)
    return "Papaya de celaya"
   }
}
console.log(persona)

function people() {
    "use strict"
    this.nombre = "Miguel"
    this.apellido = "Montero"
    this.hobbit = "Jugar"
 }
 console.log(people.name)

 const izqui = window.screenLeft;
 const dere  = window.screenTop;
 document.write(izqui+"<br>")
 document.write(dere)
////////////////////////////////////////////
///////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/* -error = Ocurre cuando sucede un error durante la carga de un archivo multimedia.
-load = Ocurre cuando un objeto se ha cargado
-beforeunload = Ocurre antes de que el documento este a punto de descargarse 
-unload = Ocurre una vez que se ha descargado una pagina
-resize = Ocurre cuando se cambia el tamaño de la  vista del documento
-scroll = Ocurre cuando  se desplaza la barra de desplazamiento de un elemento
-select = Ocurre despues de que el usuario selecciona algun texto de input o textarea  */
////////////////////////////////////////////////////////////////////////////////
/* const temporizador = setTimeout(()=>{
    document.write("Temporizador");
},1000)//Mas utilizada

const saludar = ()=>{
    document.write("dldldldl")
}
const te = setTimeout(saludar,2000 )//Mas rancio

clearTimeout(temporizador);
clearTimeout(te);


const again = setInterval(()=>{
    document.write("TE AMO"  + "</br>")
},800)




//clearInterval(again); //Para detener el tempporizador
setInterval(()=>{
    clearInterval(again)
},10000)// //Para detener el tempporizador
 */

/* for (let i = 0; i <= 100; i++) {
    setTimeout(()=>{
        document.write(i + "</br>");
    })
} */