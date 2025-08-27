import React from "react";
import "../utils/css/Taskbar.css";
import "../index.css";
import { nanoid } from "nanoid";

const Taskbar = ({ openWindows, setOpenWindows }) => {
  const handleOpenWindow = (name, src) => {
    // Check if it's already open
    const existing = openWindows.find((win) => win.name === name);

    if (existing) {
      setOpenWindows((prev) =>
        prev.map((win) =>
          win.name === name
            ? { ...win, minimized: false } 
            : win
        )
      );
    } else {
      const newWindow = { id: nanoid(), name, src, minimized: false, maximized: false };
      setOpenWindows([...openWindows, newWindow]);
    }
  };

  const isActive = (name) =>
    openWindows.some((win) => win.name === name);

  return (
    <div className="taskbar">
      <div className="taskbar-icons start">
        <img src="/assets/icons/home.png" alt="Start" />
      </div>

      <div className="taskbar-icons search">
        <img src="/assets/icons/search-svg.svg" alt="Search" />
      </div>

      <div
        className={`taskbar-icons settings ${isActive("Settings") ? "active" : ""}`}
        onClick={() =>
          handleOpenWindow("Settings", "/assets/icons/settings.png")
        }
      >
        <img src="/assets/icons/settings.png" alt="Settings" />
      </div>

      <div
        className={`taskbar-icons file-explorer ${isActive("File Explorer") ? "active" : ""}`}
        onClick={() =>
          handleOpenWindow("File Explorer", "/assets/icons/explorer.png")
        }
      >
        <img src="/assets/icons/explorer.png" alt="File Explorer" />
      </div>

      <div
        className={`taskbar-icons edge ${isActive("Microsoft Edge") ? "active" : ""}`}
        onClick={() =>
          handleOpenWindow("Microsoft Edge", "/assets/icons/edge.png")
        }
      >
        <img src="/assets/icons/edge.png" alt="Edge" />
      </div>

      <div
        className={`taskbar-icons store ${isActive("Microsoft Store") ? "active" : ""}`}
        onClick={() =>
          handleOpenWindow("Microsoft Store", "/assets/icons/store.png")
        }
      >
        <img src="/assets/icons/store.png" alt="Store" />
      </div>

      <div
        className={`taskbar-icons spotify ${isActive("Spotify") ? "active" : ""}`}
        onClick={() => handleOpenWindow("Spotify", "/assets/icons/spotify.png")}
      >
        <img src="/assets/icons/spotify.png" alt="Spotify" />
      </div>
    </div>
  );
};

export default Taskbar;
