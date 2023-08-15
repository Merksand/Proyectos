let content = document.querySelector(".content");
let emojis = ["😋", "😴", "🤪", "🧐", "👺", "🦴", "🎈", "🔪"];
emojis = emojis.concat(emojis);
emojis.sort(() => {
  return Math.random() - 0.5;
});
console.log(emojis);
emojis.forEach((e) => {
  let nuevo = document.createElement("button");
  nuevo.innerHTML = "<div class='contenido'>" + e + "</div>";
  nuevo.classList.add("caja");
  content.appendChild(nuevo);
});
let botones = document.querySelectorAll(".caja");
let acierto = document.querySelector(".acierto");
let tiempo = document.querySelector(".tiempo");
let movimiento = document.querySelector(".movimientos");
time = 30;
aciertos = 0;
movimientos = 0;
tarjeta1 = 0;
tarjeta2 = 0;
vuelta1 = 0;
vuelta2 = 0;
destapados = 0;
function final(){
    botones.forEach((e)=>{
        e.classList.add("caja3")
        e.style.pointerEvents="none"
        
        movimiento.innerHTML = `Movimientos: ${movimientos}`;
        tiempo.innerHTML = `Tiempo: ${time}`;
        if(aciertos == 8){
            acierto.innerHTML = `Felicidades, obtuviste: ${aciertos} aciertos`;
            movimiento.innerHTML = `Movimientos: ${movimientos} 😎`;
        }else{
            acierto.innerHTML = `Perdiste 💀💀💀`;
        }
    })   
}



function tiempoFuera(){
    let duracion = setInterval(() => {
        time--;
        tiempo.innerHTML = `Tiempo: ${time}`;
        if (time == 0) {
            clearInterval(duracion);
            final()
            stopTime = 1
        }
    }, 1000);
    
}
function iniciar() {
    // stopTime = 0
    if(stopTime == 1){
        tiempoFuera()
        stopTime == 0
    }
  botones.forEach((e) => {
    e.addEventListener("click", () => {
      destapados++;

      e.classList.add("caja2");
      if (destapados == 1) {

        tarjeta1 = e.children[0].innerHTML;
        vuelta1 = e;
        movimientos++
        movimiento.innerHTML = `Movimientos: ${movimientos}`;
      }
      if (destapados == 2) {
        tarjeta2 = e.children[0].innerHTML;
        destapados = 0;
        vuelta2 = e;
        movimientos++
        movimiento.innerHTML = `Movimientos: ${movimientos}`;
      }
      if (tarjeta1 == tarjeta2) {
        vuelta1 = vuelta1.classList.add("caja3");
        vuelta2 = vuelta2.classList.add("caja3");
        aciertos++
        acierto.innerHTML = `Aciertos: ${aciertos}`;
        // console.log("IGUALES");
      }
      if (destapados == 0) {
        setTimeout(() => {
          botones.forEach((e) => {
            e.classList.remove("caja2");
            e.classList.remove("caja2");
            tarjeta1 = "";
            tarjeta2 = "";
          });
        },1000);
      }
    });
  });
}
iniciar()