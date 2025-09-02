import '../utils/css/Desktop.css'
import '../index.css'
import { nanoid } from 'nanoid';
import RightMenu from './RightMenu';
import { useState } from 'react';

const Desktop = ({ openWindows, setOpenWindows, startMenu, setStartMenu }) => {
    const [rightMenu, setRightMenu] = useState({visibility: false, x: 0, y: 0});

    const handleOpenWindow = (name,src) => {
    const newWindow = { id: nanoid(), name,src }; 
    setOpenWindows([...openWindows, newWindow]);
  };

  const handleDesktopClick = () => {
    setStartMenu(false);
    setRightMenu({visibility: false, x: 0, y: 0});
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setRightMenu({visibility: true, x: e.clientX, y: e.clientY});
  };

  return (
      <div className="desktop" onClick={handleDesktopClick} onContextMenu={(e) => handleRightClick(e)}>
          {rightMenu.visibility && <RightMenu x={rightMenu.x} y={rightMenu.y} />}
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