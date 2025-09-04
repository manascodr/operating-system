import "../utils/css/Window.css";
import Draggable from "react-draggable";
import { useRef } from "react";
import Camera from "./Camera";

const Window = ({ win, openWindows, setOpenWindows }) => {
  const nodeRef = useRef(null); // 👈 create a ref

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
    <Draggable
      nodeRef={nodeRef} // 👈 pass it here
      handle=".window-header"
      cancel=".window-controls"
      disabled={win.maximized}
    >
      <div
        ref={nodeRef} // 👈 attach to your window div
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
          <div className="window-content">
            {win.name === "Camera" ? <Camera /> : <p>Welcome to {win.name}!</p>}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
