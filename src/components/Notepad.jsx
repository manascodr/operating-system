
import React from 'react'
import './notepad/Notepad.css'

const Notepad = () => {
  return (<>
    <div className='notepad-header'>
      <div>File</div>
      <div>Edit</div>
      <div>View</div>
    </div>
    <div className='notepad-content'>
      <textarea className='notepad-textarea' placeholder='Start typing...'></textarea>
    </div>
  </>
  )
}

export default Notepad