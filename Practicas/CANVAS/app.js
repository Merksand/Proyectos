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

canvas.addEventListener("mousedown",(e)=>{
    // alert(223)
    // console.log(e);
    inicialX = e.offsetX
    inicialY = e.offsetY

    ctx.beginPath();
    ctx.moveTo(inicialX,inicialY)
    ctx.lineWith = 60
    ctx.strokeStyle = "#332"
    ctx.lineCap = "round"
    ctx.lineJoin ="round"
    ctx.lineTo(inicialX,inicialY)
    ctx.stroke();
    // inicialX = CursorX
    // inicialY = CursorY
})
