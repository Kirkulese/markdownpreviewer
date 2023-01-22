import React from 'react'
import { useSelector } from 'react-redux'
import { marked } from 'marked';


function MkdnDisp() {

  const markdown = useSelector((state) => state.markdown)

  let parsed = marked.parse(markdown)

  return (
    <div>
      <div id="preview" dangerouslySetInnerHTML={{__html: parsed}}>
      </div>
      
      
    </div>
  )
}

export default MkdnDisp
