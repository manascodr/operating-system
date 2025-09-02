import { useState } from "react";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import "./index.css";
import Start from "./components/Start";

function App() {
  const [openWindows, setOpenWindows] = useState([]); // ✅ added state
  const [startMenu, setStartMenu] = useState(false);
  console.log(openWindows);

  return (
    <>
      <main>
        <Desktop openWindows={openWindows} setOpenWindows={setOpenWindows} startMenu={startMenu} setStartMenu={setStartMenu} />
        <Taskbar openWindows={openWindows} setOpenWindows={setOpenWindows} startMenu={startMenu} setStartMenu={setStartMenu} />
        {startMenu && <Start />}
        {openWindows.map((win) => (
          <Window
            key={win.id}
            win={win}
            openWindows={openWindows}
            setOpenWindows={setOpenWindows}
          />
        ))}
      </main>
    </>
  );
}

export default App;
