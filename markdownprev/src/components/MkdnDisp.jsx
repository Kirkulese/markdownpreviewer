import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { marked } from 'marked';


function MkdnDisp() {

  marked.setOptions({
    gfm: true,
    breaks: true,
  });

  const markdown = useSelector((state) => state.markdown)
  let parsed = marked.parse(markdown)
  return (
    <div id="preview-container">
      <div className="title">Preview</div>
      <div id="preview" dangerouslySetInnerHTML={{__html: parsed}}></div>     
    </div>
  )
}

export default MkdnDisp
