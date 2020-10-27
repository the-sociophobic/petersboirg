import React from 'react'


export default function insertLineBreaks(text) {
  const lines = text.split("\n")
  const textWithLineBreaks = lines.map((line, index) =>
    <span key={index}>
      {line}{lines.length - 1 > index && <br />}
    </span>
  )
  return textWithLineBreaks
}
