let paper = document.getElementById("paper-info")
function paperInfoButton() {
  window.addEventListener('click', (clickEvent) => {
    paper.classList.add("show")
  })
  if (paper.style.visibility === "visible") {
    paper.style.visibility = "hidden"
  } else {
    paper.style.visibility = "visible"
  }
}
