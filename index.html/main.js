function paperInfoButton() {
  let paper = document.getElementById("paper-info")
  if (paper.style.visibility === "visible") {
    paper.style.visibility = "hidden"
  } else {
    paper.style.visibility = "visible"
  }
}

function paperInfoDropDown() {
  let paperItems = document.getElementById("plus-sign")
  if (paperItems.style.visibility === "visible") {
    paperItems.style.visibility = "hidden"
  } else {
    paperItems.style.visibility = "visible"
  }
}
