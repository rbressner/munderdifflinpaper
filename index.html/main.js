function paperInfoButton() {
  let paper = document.getElementById("paper-info")
  if (paper.style.visibility === "hidden") {
    paper.style.visibility = "visible"
  } else {
    paper.style.visibility = "hidden"
  }
}
