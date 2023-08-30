let incremento = document.querySelector(".incremento")
let decremento = document.querySelector(".decremento")
let reset = document.querySelector(".reset")
let pant = document.querySelector(".pant")
let x = 0
incremento.addEventListener("click",()=>{
    x++
    pant.innerHTML = x
})
decremento.addEventListener("click",()=>{
    x--
    pant.innerHTML = x
})
reset.addEventListener("click",()=>{
    x =0
    pant.innerHTML = x
})