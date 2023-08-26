let canvas = document.querySelector(".canvas")
const ctx = canvas.getContext("2d")
// ctx.fillRect(50, 50, 100, 100);
ctx.strokeRect(50, 50, 100, 100);
ctx.arc(100, 100, 50, 0, Math.PI * 2, false);
ctx.moveTo(50, 50);
ctx.lineTo(150, 150);
ctx.stroke();

let inicialX;
let inicialY;

canvas.addEventListener("mousemove",(e)=>{
    // console.log(e.x);
    // alert(223)
    inicialX = e.offsetX
    inicialY = e.offsetY
    CursorX = e.x
    CursorY = e.y
    // dibujar(inicialX,inicialY)

      ctx.beginPath();
    ctx.moveTo(inicialX,inicialY)
    ctx.lineWidth = 20
    ctx.strokeStyle = "#332"
    ctx.lineCap = "round"
    ctx.lineJoin ="round"
    ctx.lineTo(CursorX,CursorY)
    ctx.stroke();
    inicialX = CursorX
    inicialY = CursorY

})
function dibujar(CursorX, CursorY){

  
}
