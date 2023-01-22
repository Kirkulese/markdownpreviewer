import React from 'react'
import { useSelector } from 'react-redux'



function MkdnDisp() {

  const markdown = useSelector((state) => state.markdown)

  return (
    <div>
      <div id="preview">{markdown}</div>
      
    </div>
  )
}

export default MkdnDisp
