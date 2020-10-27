export default (elem, tag) =>
  Array.from(
    elem.getElementsByTagName(tag)
  )[0]