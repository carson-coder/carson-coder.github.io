function popup(text) {
  document.getElementById("popup").firstChild.innerHTML = text
  document.getElementById("popup").className = "show popup"
  timer = setTimeout(() => {
    document.getElementById("popup").className = "popup"
  }, 2000)
}

setTimeout(() => {
  document.getElementById("popup").className = "popup"
}, 500)

var scroll = setInterval(() => {
  window.scrollTo(0, 0)
}, 5)

setTimeout(() => {
  clearInterval(scroll)
}, 1000)