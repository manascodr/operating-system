// src/components/Edge.jsx
import React, { useRef, useState } from "react";
import "./Edge/edge.css";

const normalizeUrl = (input) => {
  if (!input) return "about:blank";
  const trimmed = input.trim();
  // if it looks like a URL, ensure protocol
  if (/^(https?:\/\/)/i.test(trimmed)) return trimmed;
  if (/\s/.test(trimmed) || !/\./.test(trimmed)) {
    // treat as search
    return `https://www.bing.com/search?q=${encodeURIComponent(trimmed)}`;
  }
  return `https://${trimmed}`;
};

const Edge = () => {
  const iframeRef = useRef(null);
  const [address, setAddress] = useState("https://www.bing.com");
  const [history, setHistory] = useState(["https://www.bing.com"]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = (targetUrl, addToHistory = true) => {
    const url = normalizeUrl(targetUrl);
    setAddress(url);
    if (addToHistory) {
      const newHistory = history.slice(0, index + 1).concat(url);
      setHistory(newHistory);
      setIndex(newHistory.length - 1);
    }
    setLoading(true);
    // set iframe src via state/address; iframe onLoad will clear loading
  };

  const goBack = () => {
    if (index > 0) {
      const newIndex = index - 1;
      setIndex(newIndex);
      setAddress(history[newIndex]);
      setLoading(true);
    }
  };

  const goForward = () => {
    if (index < history.length - 1) {
      const newIndex = index + 1;
      setIndex(newIndex);
      setAddress(history[newIndex]);
      setLoading(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(address, true);
  };

  const handleReload = () => {
    // reload iframe by resetting src
    if (iframeRef.current) {
      setLoading(true);
      // force reload
      iframeRef.current.src = address;
    }
  };

  // when iframe finishes loading, set loading false
  const onLoad = () => {
    setLoading(false);
  };

  return (
    <div className="edge-app">
      <div className="edge-toolbar">
        <div className="nav-buttons">
          <button onClick={goBack} disabled={index <= 0} title="Back">◀</button>
          <button onClick={goForward} disabled={index >= history.length - 1} title="Forward">▶</button>
          <button onClick={handleReload} title="Reload">⟳</button>
        </div>

        <form className="address-bar" onSubmit={handleSubmit}>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Search or enter web address"
            aria-label="Address"
          />
        </form>

        <div className="toolbar-right">
          <button
            className="new-tab"
            onClick={() => {
              // open blank new tab (we'll just navigate to bing)
              navigate("https://www.bing.com", true);
            }}
            title="New tab"
          >
            ➕
          </button>
        </div>
      </div>

      <div className="edge-content">
        {loading && <div className="loading-indicator">Loading…</div>}
        <iframe
          ref={iframeRef}
          title="Edge Webview"
          src={address}
          onLoad={onLoad}
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </div>
  );
};

export default Edge;
