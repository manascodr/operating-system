// src/components/Camera.jsx
import { useEffect, useRef } from "react";

const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
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
    <div
      className="camera-app"
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Camera;
