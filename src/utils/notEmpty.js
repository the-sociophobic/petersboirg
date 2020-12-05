const notEmpty = smthg =>
  smthg && (typeof smthg !== "string" || smthg.length > 0)


export default notEmpty