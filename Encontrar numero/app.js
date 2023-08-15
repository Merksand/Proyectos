let entrada = document.querySelector("#entrada");
let form = document.querySelector("form");
let salida = document.querySelector(".salida");
let contador = document.querySelector(".contador");

let plet = Math.round(Math.random() * 50);
console.log(plet);
let x = 0;
let endGame = true;
salida.style.fontSize = "2rem";
const event = form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (endGame) {
      if (entrada.value) {
          contador.textContent = "Intentos: " + x;
          x++;
      if (entrada.value == plet) {
        salida.innerHTML = "FELICIDADES POR ENCONTRAR EL NUMERO ";
        endGame = false;
        entrada.disabled = true;
      } else if (entrada.value > plet) {
        salida.innerHTML = "Es un numero menor";
      } else {
        salida.innerHTML = "Es un numero mayor";
      }
      entrada.value = "";
    }
  }
});
