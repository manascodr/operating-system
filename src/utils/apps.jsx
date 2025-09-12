// src/utils/apps.js
import Camera from "../components/Camera";
import Notepad from "../components/Notepad";

const apps = {
  settings: {
    name: "Settings",
    icon: "/assets/icons/settings.png",
    component: () => <p>Settings App Coming Soon...</p>,
  },
  explorer: {
    name: "File Explorer",
    icon: "/assets/icons/explorer.png",
    component: () => <p>Explorer Window</p>,
  },
  camera: {
    name: "Camera",
    icon: "/assets/icons/camera.png",
    component: Camera,
  },
  recycleBin: {
    id: "recycle-bin",
    name: "Recycle Bin",
    icon: "/assets/icons/win/bin.png",
    component: () => <p>This is the Recycle Bin</p>,
  },
  thisPC: {
    id: "this-pc",
    name: "This PC",
    icon: "/assets/icons/win/thispc.png",
    component: () => <p>This is This PC</p>,
  },
  notepad: {
    id: "notepad",
    name: "Notepad",
    icon: "/assets/icons/notepad.png",
    component: Notepad,
  },
};

export default apps;
