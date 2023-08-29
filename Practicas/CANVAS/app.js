let canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
// ctx.fillRect(50, 50, 100, 100);
ctx.strokeRect(50, 50, 100, 100);
ctx.arc(100, 100, 50, 0, Math.PI * 2, false);
ctx.moveTo(50, 50);
ctx.lineTo(150, 150);
ctx.stroke();

let inicialX;
let inicialY;

canvas.addEventListener("mousemove", (e) => {
  // console.log(e);
  inicialX = e.offsetX;
  inicialY = e.offsetY;
  CursorX = e.x;
  CursorY = e.y;
  // dibujar(inicialX,inicialY)

  ctx.beginPath();
  ctx.moveTo(inicialX, inicialY);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#332";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineTo(CursorX, CursorY);
  ctx.stroke();
  // inicialX = CursorX;
  // inicialY = inicialY;

});






function dibujar(CursorX, CursorY) {

}



/* 
let canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

let dibujando = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", (e) => {
  dibujando = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
});

canvas.addEventListener("mousemove", (e) => {
  if (!dibujando) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#02f";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  dibujando = false;
  ctx.beginPath();
});

*/







