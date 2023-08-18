let card = document.querySelectorAll(".card")
let pri = document.querySelector(".pri")
let h2 = document.getElementsByTagName("h2")
card.forEach(e => {
    e.addEventListener("click", () => {
        card.forEach(e => e.classList.remove("cards"))
        e.classList.add("cards")
        pri.classList.remove("pri")
        // h22.style.display = "block";
        h2.style.opacity = h2.style.opacity === "0" ? "1" : "0";
    })
})