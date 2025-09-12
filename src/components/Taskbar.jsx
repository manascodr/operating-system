import React, { useState } from "react";
import "../utils/css/Taskbar.css";
import "../index.css";
import { nanoid } from "nanoid";
import SystemTray from "./SystemTray";
import apps from "../utils/apps";

const Taskbar = ({
  openWindows,
  setOpenWindows,
  startMenu,
  setStartMenu,
  theme,
  setTheme,
  brightness,
  setBrightness,
  systemTray,
  setSystemTray,
  handleOpenWindow,
}) => {
  const getAppState = (name) => {
    const win = openWindows.find((w) => w.name === name);
    if (!win) return "closed";
    if (win.minimized) return "minimized";
    return "active";
  };

  const isActive = (name) =>
    openWindows.some((win) => win.name === name && !win.minimized);

  return (
    <div className="taskbar">
      <div className="widgets">
        <img src="/assets/icons/widget.png" alt="Widgets" />
      </div>
      <div className="middle">
        <div
          className="taskbar-icons start"
          onClick={() => setStartMenu(!startMenu)}
        >
          <img src="/assets/icons/home.png" alt="Start" />
        </div>

        <div
          className={`taskbar-icons settings ${
            isActive("Settings") ? "active" : ""
          }`}
          onClick={() =>
            handleOpenWindow("settings")
          }
        >
          <img src="/assets/icons/settings.png" alt="Settings" />
        </div>

        <div
          className={`taskbar-icons file-explorer ${
            isActive("File Explorer") ? "active" : ""
          }`}
          onClick={() =>
            handleOpenWindow("explorer")
          }
        >
          <img src="/assets/icons/explorer.png" alt="File Explorer" />
        </div>

        <div
          className={`taskbar-icons edge ${
            isActive("Microsoft Edge") ? "active" : ""
          }`}
        >
          <img src="/assets/icons/edge.png" alt="Edge" />
        </div>

        <div
          className={`taskbar-icons store ${
            isActive("Microsoft Store") ? "active" : ""
          }`}
        >
          <img src="/assets/icons/store.png" alt="Store" />
        </div>

        <div
          className={`taskbar-icons spotify ${
            isActive("Spotify") ? "active" : ""
          }`}
        >
          <img src="/assets/icons/spotify.png" alt="Spotify" />
        </div>

        <div
          className={`taskbar-icons spotify ${
            isActive("Spotify") ? "active" : ""
          }`}
        >
          <img src="/assets/icons/github.png" alt="GitHub" />
        </div>
      </div>
      <div className="right">
        {systemTray && (
          <SystemTray
            theme={theme}
            setTheme={setTheme}
            brightness={brightness}
            setBrightness={setBrightness}
            systemTray={systemTray}
            setSystemTray={setSystemTray}
          />
        )}
        <div className="hidden-icons">
          <img src="/assets/icons/uparrow.svg" alt="Show hidden icons" />
        </div>
        <div className="quick-menu" onClick={() => setSystemTray(!systemTray)}>
          <div className="quick-icons">
            <img src="/assets/icons/ui/wifi.png" alt="Volume" />
          </div>
          <div className="quick-icons">
            <img src="/assets/icons/ui/audio2.png" alt="Audio" />
          </div>
          <div className="quick-icons">
            <img src="/assets/icons/ui/battery.png" alt="Battery" />
          </div>
        </div>
        <div className="time-date">
          <span className="time">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <span className="date">
            {new Date().toLocaleDateString([], {
              month: "numeric",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
