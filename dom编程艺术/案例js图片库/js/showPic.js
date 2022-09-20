function showPic(whichpic) {
  let source = whichpic.getAttribute("href")
  const placeholder = document.getElementById("placeholder")
  placeholder.setAttribute("src", source)

  const text = whichpic.getAttribute("title")
  const description = document.getElementById("description")
  description.firstChild.nodeValue = text
}

// function countBodyChildren() {
//   const body_elem = document.getElementsByTagName("body")[0]
//   alert(body_elem.nodeType)
// }

//window.onload = countBodyChildren
