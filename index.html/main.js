let paper = document.getElementById("paper-info")
window.addEventListener('click', (clickEvent) => {
  paper.classList.add("show")
})
function clickPaper() {
  if (paper.style.visibility === "visible") {
    paper.style.visibility = "hidden"
  } else {
    paper.style.visibility = "visible"
  }
}
