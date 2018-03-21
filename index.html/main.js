let paper = document.getElementById("paper-info")
function clickPaper() {
  if (paper.style.visibility === "visible") {
    paper.style.visibility = "hidden"
  } else {
    paper.style.visibility = "visible"
  }
}
window.addEventListener('click', (clickEvent) => {
  paper.classList.add("show")
})

let placement1 = document.getElementsByClassName("home-page")[0]
let placement2 = document.getElementsByClassName("products-sec")[0]
let placement3 = document.getElementsByClassName("about-us")[0]
let placement4 = document.getElementsByClassName("meet-team")[0]
let placement5 = document.getElementsByClassName("contact-info")[0]

window.addEventListener('scroll', (event) => {
if (window.scrollY > 0) {
  placement1.classList.add("menu")
}
if (window.scrollY > 200) {
  placement2.classList.add("menu")
}
if (window.scrollY > 650) {
  placement3.classList.add("menu")
}
if (window.scrollY > 1150) {
  placement4.classList.add("menu")
}
if (window.scrollY > 2300) {
  placement5.classList.add("menu")
}
})
window.addEventListener('scroll', (event) => {
if (window.scrollY > 200) {
  placement1.classList.remove("menu")
}
if (window.scrollY > 800 || window.scrollY < 200) {
  placement2.classList.remove("menu")
}
if (window.scrollY < 800 || window.scrollY > 1150) {
  placement3.classList.remove("menu")
}
if (window.scrollY < 1150 || window.scrollY > 2300) {
  placement4.classList.remove("menu")
}
if (window.scrollY > 2700 || window.scrollY < 2300) {
  placement5.classList.remove("menu")
}
})
