let canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
let lastX = 0;
let lastY = 0;
let dibujando = false;
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

///////////////////////////////////////////////
let canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
let inicialX;
let inicialY;
let dibujar = false
canvas.addEventListener("mousedown",(e)=>{
  dibujar = true
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
  console.log("MOVE"+e.offsetX, e.offsetY);
  
})

canvas.addEventListener("mousemove",(e)=>{;
  if(dibujar){
  console.log("LINE"+e.offsetX, e.offsetY);
  ctx.lineTo(e.offsetX,e.offsetY );
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#332";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
  }
})
canvas.addEventListener("mouseup",()=>{
  dibujar = false
})