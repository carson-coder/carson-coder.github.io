function popup(text) {
  document.getElementById("popup").firstChild.innerHTML = text
  document.getElementById("popup").className = "popup"
  timer = setTimeout(() => {
    document.getElementById("popup").className = "transparent popup"
  }, 2000)
}