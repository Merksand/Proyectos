let ref = document.querySelector("form");
let addNota = document.querySelector(".nota");
let lista = document.querySelector(".lista");

ref.addEventListener("submit", (e) => {
  e.preventDefault();
  if (addNota.value) {
    let salida = e.target.children[0].value;
    let nuevo = document.createElement("li");
    nuevo.innerHTML =
      "<li class='lis'>" +
      "<span>" +
      salida +
      "</span>" +
      "<button class='eliminar'>" +"Eliminar"+
      "</button>" +
      "</li>";
    console.log();
    lista.appendChild(nuevo);
    addNota.value = "";
  }
});
