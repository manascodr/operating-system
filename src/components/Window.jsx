import "../utils/css/Window.css";

const Window = ({ win, openWindows, setOpenWindows }) => {

  // Close function
  const handleClose = () => {
    setOpenWindows(openWindows.filter((w) => w.id !== win.id));
  };

  return (
    <div className="border-window">
      <div className="window-header">
        <div className="title">
          <img src={win.src} alt="" />
          <p>{win.name}</p>
        </div>
        <div className="window-controls">
          <button>-</button>
          <button>+</button>
          <button className="close" onClick={handleClose}>X</button>
        </div>
      </div>
      <div className="window-content">
        <p>Welcome to {win.name}!</p>
      </div>
    </div>
  );
};

export default Window;
