import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateState } from '../features/markdown/mkdnSlice'

function MkdnEntry() {
  const [text, setText] = useState('')
  const markdown = useSelector((state) => state.markdown)
  // useEffect to update local state from redux state
  useEffect(() => {
    setText(markdown)
  })
  

  const dispatch = useDispatch()

  const mkdnHandler = (event) => {
    event.preventDefault()
    dispatch(updateState(text))
  }


  return (
    <div className="editor-container">
      <div id="editor-title">Editor</div>
      <form onChange={mkdnHandler}>
          <textarea id="editor" onChange={(e) => setText(e.target.value)} value={text}></textarea>
      </form>
    </div>
  )
}

export default MkdnEntry

