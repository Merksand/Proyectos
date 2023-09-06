puntos = 0;
let tiempo = 30;
let necesarios = 10;
document.getElementById('player').addEventListener("mouseenter",()=>{
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos:<b>"+puntos+"/"+ necesarios + "</b>";
   randNum =  Math.round(Math.random()*400);
   randNum2 = Math.round(Math.random()*400);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";

   if (puntos == necesarios) {
      tiempo +=8;
   
      necesarios+=15
      document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   }
   if(puntos==100){
      alert("SIGUE ASI🥳🥳🥳")
   }
})
function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (tiempo == 0) {
		alert("PERDEDOR!!!🥱🥱");
		tiempo = 30;
		puntos=0
      necesarios=10
      hasta=10
      document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
	}
}
setInterval(restarTiempo,750)