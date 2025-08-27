import '../utils/css/Desktop.css'
import '../index.css'
import { useState } from 'react';
import { nanoid } from 'nanoid';

const Desktop = ({ openWindows, setOpenWindows }) => {
  
    const handleOpenWindow = (name,src) => {
    const newWindow = { id: nanoid(), name,src }; 
    setOpenWindows([...openWindows, newWindow]);
  };

  return (
      <div className="desktop">   
      
          <div className="desktop-icons">
            <div className="thisPC" name="thispc" onClick={() => handleOpenWindow('This Pc','/assets/icons/win/thispc.png')}>
              <img src="/assets/icons/win/thispc.png" name="thispc" alt="My Computer" />
              <label htmlFor="thispc">This pc</label>
            </div>
            <div className="bin" name="bin" onClick={() => handleOpenWindow('Recycle Bin','/assets/icons/win/bin.png')}>
              <img src="/assets/icons/win/bin.png" name="bin" alt="Recycle Bin" />
              <label htmlFor="bin">Recycle Bin</label>
            </div>
          </div>
        </div>
  )
}

export default Desktop