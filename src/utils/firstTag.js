const firstTag = (elem, tag) =>
  Array.from(
    elem.getElementsByTagName(tag)
  )[0]


export default firstTag