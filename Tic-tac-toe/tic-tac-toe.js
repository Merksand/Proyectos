let ope = document.querySelectorAll(".caja")
let turno = 1;

function checkWinner() {
  const wins = [    
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], // horizontal
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], // vertical
    [0, 4, 8], 
    [2, 4, 6] // diagonal
  ];
  for (let i = 0; i < wins.length; i++) {
    const [a, b, c] = wins[i];
    if (ope[a].innerHTML && ope[a].innerHTML === ope[b].innerHTML && ope[b].innerHTML === ope[c].innerHTML) {
      return ope[a].innerHTML;
    }
  }
  return null;
}
let cambio = true
acep = false
ope.forEach((e) => {
  e.addEventListener("click", function () {
	if(acep){
		return
	}
    if (e.innerHTML === "") {
      if (turno === 1) {
        e.innerHTML = "X";
        turno = 0;
      } else {
        e.innerHTML = "O";
        turno = 1;
      }

      const winner = checkWinner();
      if (winner && cambio == true) {
        alert(`¡${winner} ha ganado!`);
		cambio = false
		acep = true
      }
    }
  })
})
let boton = document.querySelector(".boton")
boton.addEventListener("click",reestar)
function reestar(){
	ope.forEach((e)=>{
		e.innerHTML=""
		cambio = true
		acep =false
	})
}