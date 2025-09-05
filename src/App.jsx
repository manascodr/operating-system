import { useState } from "react";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import "./index.css";
import Start from "./components/Start";

function App() {
  const [openWindows, setOpenWindows] = useState([]); // ✅ added state
  const [startMenu, setStartMenu] = useState(false);
  const [systemTray, setSystemTray] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [brightness, setBrightness] = useState(100);

  return (
    <>
      <main>
        <div
          className={
            `theme ${theme}` + (brightness !== 100 ? " brightness" : "")
          }
          style={{ filter: `brightness(${Math.max(brightness, 20)}%)` }}
        >
          <Desktop
            openWindows={openWindows}
            setOpenWindows={setOpenWindows}
            startMenu={startMenu}
            setStartMenu={setStartMenu}
            systemTray={systemTray}
            setSystemTray={setSystemTray}
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
    </>
  );
}

export default App;
