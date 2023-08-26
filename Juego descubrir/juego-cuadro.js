let botones= document.getElementsByClassName("boton")
let tiempo = document.querySelector(".tiempo")
let aciertos   = document.querySelector(".aciertos") 
let movimiento = document.querySelector(".movimiento")

let reinicio = document.querySelector(".reinicio")
////////////////////////////////////////////////////////
let numeros =["😛","😛","😂","😂","👿","👿","🤡","🤡","🐶","🐶","🐹","🐹","🤑","🤑","❤","❤"]
numeros = numeros.sort((ran)=>{
    return Math.random()-0.5
})
console.log(numeros)

let tarjeta1=0;
let tarjeta2=0;
let resultado1=0;
let resultado2=0;
let destapados=0;
let movimientos=0
let puntos = 0;
////
let time = 30;
let stopTime=true
let regresivo=null

function temporizador(){
   regresivo= setInterval(()=>{
        time--
        tiempo.innerHTML=`Tiempo: ${time}`
        if(time==0){
            clearInterval(regresivo)
            terminar()
        }
    },1000)
    
}

function terminar(){
    for (let i = 0; i <= 17; i++) {
        todos = document.getElementById(i)
        todos.innerHTML=numeros[i]
        todos.disabled=true
        aciertos.innerHTML=`PERDISTE!!!💀`
        movimiento.innerHTML=`Movimiento: ${movimientos} 🥱🥱`
    }
}

const destapar = ((e)=>{
    if(stopTime==true){
        temporizador()
        stopTime=false
    }



    destapados++
    console.log(destapados)
    
    if(destapados==1){
        tarjeta1 = document.getElementById(e);
        resultado1 = numeros[e]
        tarjeta1.innerHTML=resultado1
        tarjeta1.disabled=true
              
    }
    else if(destapados==2){
        tarjeta2 = document.getElementById(e);
        resultado2 = numeros[e]
        tarjeta2.innerHTML=resultado2
        movimientos++
        movimiento.innerHTML=`Movimiento: ${movimientos}`
        tarjeta2.disabled=true

        if(resultado1==resultado2){
            destapados=0
            puntos++
            aciertos.innerHTML=`Aciertos: ${puntos}`
            if(puntos==8){
                    aciertos.innerHTML=`Felicidades ${puntos} puntos 🥳`
                    movimiento.innerHTML=`Movimiento: ${movimientos} 😎🤙`
                    clearInterval(regresivo)
            }
            

            
        }else{
            setTimeout(()=>{
                tarjeta1.innerHTML=" "
                tarjeta2.innerHTML=" "
                tarjeta1.disabled=false
                tarjeta2.disabled=false
                destapados=0
            },800)
        }

       
    }
    
})
/* reinicio.addEventListener("click",()=>{
    tarjeta1.innerHTML=" "
    tarjeta2.innerHTML=" "
    for (let i = 0; i < 4; i++) {
        
        
    }
    console.log("REINICIO")
}) */





































/* let tarjeta1=null;
let tarjeta2=0;
let resultado1=null;
let resultado2=0;
let destapados=0;
let movimientos=0
let puntos = 0
let boton=Array.from(botones)
boton.forEach((e) => {
    e.addEventListener("click",()=>{
        destapados++
        console.log(destapados)
        
        
        if(destapados == 1){
            tarjeta1=  Math.round(Math.random()*15)
            resultado1=  e.innerHTML=numeros[tarjeta1]
            
            resultado1.disabled=true
        }
        else if(destapados==2){
            tarjeta2=  Math.round(Math.random()*15)
            resultado2=e.innerHTML=numeros[tarjeta2]
            resultado2.disabled=true
            tarjeta1.disabled=true
            resultado2.disabled=true
            movimientos++
            movimiento.innerHTML=`Movimiento: ${movimientos}`
        }
        if(tarjeta1 == tarjeta2){
            puntos++
            aciertos.innerHTML=`Aciertos: ${puntos}`
            destapados=0
        }else{
            setTimeout(()=>{
                resultado1.disabled=false
                resultado2.disabled=false
                e.innerHTML=" "
                destapados=0
            },1000)
        }
    })
}) */
        




////////////////////////////////////////////////////////







/////////////////////////////////////////////
/*let x=4;
let move = 0;
let cont = 0;
let first=0;
let uno=0;
let dos=0;
let boton=Array.from(botones)
boton.forEach(e => {
    e.addEventListener("click",re=()=>{
        
        
        let a=Math.round(Math.random()*7+1)
        //let num = e.innerHTML=a 
        
        
        cont++
        
        console.log(cont)
        if(cont== 1){
            uno=a;
            e.innerHTML=a
            e.style.background="#fff5"
            uno.disabled=true
            console.log(uno)
            let iu=  setInterval(()=>{
                x--;
                tiempo.innerHTML="Tiempo: "+x;
                if(x==0){
                    x=15;
                    tiempo.innerHTML="Tiempo: "+x;
                    
                }
                
                console.log(cont)
                
            },1000)
        }
        if(cont==2){
            dos=a
            e.innerHTML=a
            e.style.background="#fff5"
        }
        if(uno == dos){
            move++;
            movimiento.innerHTML="Movimiento: "+move;

        }
    })
});*/