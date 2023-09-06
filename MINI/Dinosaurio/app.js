let dino = document.querySelector(".dino")

window.addEventListener("keydown",saltar)
function saltar(e){
    console.log(e.keyCode);
    if(e.keyCode == 32){
        dino.classList.remove("dino-corriendo"); 
        dino.style.bottom="115px "
        tiempoSalto()
    }
}
function tiempoSalto(){
    setTimeout(()=>{
        dino.style.bottom ="22px"
        dino.classList.add("dino-corriendo"); 
        console.log(123) 
    },500)
}




function HandleKeyDown(ev){
    if(ev.keyCode == 32){
        Saltar();
    }
}

function Saltar(){
    if(dinoPosY === sueloY){
        saltando = true;
        velY = impulso;
        dino.classList.remove("dino-corriendo");
    }
}
