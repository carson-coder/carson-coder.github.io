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