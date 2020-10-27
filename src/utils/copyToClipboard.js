export default str => {
  const el = document.createElement('textarea')
  // el.style.display = "none"
  el.value = str
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}
