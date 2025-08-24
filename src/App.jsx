import { useState } from "react";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import "./index.css";

function App() {
  const [openWindows, setOpenWindows] = useState([]); // ✅ added state
  console.log(openWindows);

  return (
    <>
      <main>
        <Desktop openWindows={openWindows} setOpenWindows={setOpenWindows} />
        <Taskbar openWindows={openWindows} setOpenWindows={setOpenWindows} />
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
