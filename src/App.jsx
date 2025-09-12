import { useState } from "react";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import Start from "./components/Start";
import apps from "./utils/apps"; // 

function App() {
  const [openWindows, setOpenWindows] = useState([]);
  const [startMenu, setStartMenu] = useState(false);
  const [systemTray, setSystemTray] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [brightness, setBrightness] = useState(100);

  const handleOpenWindow = (appKey) => {
    const app = apps[appKey];
    if (!app) return;

    setOpenWindows((prev) => {
      const existing = prev.find((w) => w.id === app.id);

      if (existing) {
        // toggle minimize
        return prev.map((w) =>
          w.id === app.id ? { ...w, minimized: !w.minimized } : w
        );
      }

      return [
        ...prev,
        {
          id: app.id,
          name: app.name,
          icon: app.icon,
          component: app.component,
          minimized: false,
          maximized: false,
        },
      ];
    });
  };

  return (
    <main>
      <div
        className={`theme ${theme}` + (brightness !== 100 ? " brightness" : "")}
        style={{ filter: `brightness(${Math.max(brightness, 20)}%)` }}
      >
        <Desktop
          openWindows={openWindows}
          setOpenWindows={setOpenWindows}
          startMenu={startMenu}
          setStartMenu={setStartMenu}
          systemTray={systemTray}
          setSystemTray={setSystemTray}
          handleOpenWindow={handleOpenWindow} // ✅ pass function
        />

        <Taskbar
          openWindows={openWindows}
          setOpenWindows={setOpenWindows}
          startMenu={startMenu}
          setStartMenu={setStartMenu}
          theme={theme}
          setTheme={setTheme}
          brightness={brightness}
          setBrightness={setBrightness}
          systemTray={systemTray}
          setSystemTray={setSystemTray}
          handleOpenWindow={handleOpenWindow} // ✅ pass function
        />

        {startMenu && <Start />}
        {openWindows.map((win) => (
          <Window
            key={win.id}
            win={win}
            openWindows={openWindows}
            setOpenWindows={setOpenWindows}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
