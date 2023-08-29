let canvas = document.querySelector(".canvas")
let ctx = canvas.getContext("2d")
let draw = false
canvas.addEventListener("mousedown", (e) => {
  draw = true
  ctx.beginPath()
  ctx.moveTo(e.offsetX, e.offsetY)
})
canvas.addEventListener("mousemove", (e) => {
  if (draw) {
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.lineWidth = x
    ctx.strokeStyle = col
    ctx.lineJoin = "round"
    ctx.lineCap = "round"
    ctx.stroke();
  }
})
canvas.addEventListener("mouseup", () => {
  draw = false
})
let less = document.querySelector(".less")
let number = document.querySelector(".number")
let more = document.querySelector(".more")
let delet = document.querySelector(".delete")
let color = document.querySelector(".color")
let x = 80;
function show() {
  number.innerHTML = x
}
less.addEventListener("click", () => {
  if (x > 5) x -= 5
  show()
})
more.addEventListener("click", () => {

  if (x < 100) x += 5
  show()
})
let col;
color.addEventListener("change", (e) => {
  col = e.target.value
})
delet.addEventListener("click",()=>{
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})



















/* 
// ctx.fillRect(50, 50, 100, 100);
ctx.strokeRect(50, 50, 100, 100);
ctx.arc(100, 100, 50, 0, Math.PI * 2, false);
ctx.moveTo(50, 50);
ctx.lineTo(150, 150);
ctx.stroke();
*/