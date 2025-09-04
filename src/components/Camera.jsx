// src/components/Camera.jsx
import { useEffect, useRef } from "react";

const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ask for camera access
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Error accessing camera:", err);
      });
  }, []);

  return (
    <div className="camera-app">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: "100%", borderRadius: "8px" }}
      />
    </div>
  );
};

export default Camera;
