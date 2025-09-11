import "../utils/css/Window.css";
import { Rnd } from "react-rnd";
import Camera from "./Camera";
import { useEffect, useState } from "react";

const Window = ({ win, openWindows, setOpenWindows }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Center the window on mount
    const width = 800;
    const height = 500;
    const x = Math.max((window.innerWidth - width) / 2, 0);
    const y = Math.max((window.innerHeight - height) / 2, 0);
    setPosition({ x, y });
  }, []);

  const handleClose = () => {
    setOpenWindows(openWindows.filter((w) => w.id !== win.id));
  };

  const handleMinimize = () => {
    setOpenWindows(
      openWindows.map((w) =>
        w.id === win.id ? { ...w, minimized: true, maximized: false } : w
      )
    );
  };

  const handleMaximize = () => {
    setOpenWindows(
      openWindows.map((w) =>
        w.id === win.id ? { ...w, maximized: !w.maximized } : w
      )
    );
  };

  return (
    <Rnd
      size={{
        width: win.maximized ? window.innerWidth : 800,
        height: win.maximized ? window.innerHeight : 500,
      }}
      position={win.maximized ? { x: 0, y: 0 } : position}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      bounds="window"
      dragHandleClassName="window-header"
      enableResizing={!win.maximized}
      className={`border-window ${win.minimized ? "minimized" : ""} ${
        win.maximized ? "maximized" : ""
      }`}
    >
      <div className="window-header">
        <div className="title">
          <img src={win.src} alt="" />
          <p>{win.name}</p>
        </div>
        <div className="window-controls">
          <button onClick={handleMinimize}>
            <img src="/assets/icons/ui/minimize.png" alt="Minimize" />
          </button>
          <button onClick={handleMaximize}>
            <img src="/assets/icons/ui/maximize.png" alt="Maximize" />
          </button>
          <button className="close" onClick={handleClose}>
            <img src="/assets/icons/ui/close.png" alt="Close" />
          </button>
        </div>
      </div>

      <div className="window-content">
        {win.name === "Camera" ? <Camera /> : <p>Welcome to {win.name}!</p>}
      </div>
    </Rnd>
  );
};

export default Window;
