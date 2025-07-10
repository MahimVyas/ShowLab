import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ThemeContext } from "../App";

const SettingsPopup = ({
  open,
  darkMode,
  transparent,
  onDarkMode,
  onTransparency,
  onClose,
  onClearUserData,
  onReplayScrapbook, // NEW
}) => {
  const { playScrapbookFlipInAnimation } = useContext(ThemeContext);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      className="settings-popup-container glass-panel hacking-font"
      onClick={onClose}
    >
      <div
        className="settings-popup-card"
        onClick={(e) => e.stopPropagation()}
      >
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={e => onDarkMode(e.target.checked)}
          />
          Dark Mode
        </label>
        <label>
          <input
            type="checkbox"
            checked={transparent}
            onChange={e => onTransparency(e.target.checked)}
          />
          Transparency
        </label>
        <button
          className="hacking-font glass-panel"
          style={{
            marginTop: 18,
            background: "#00ff41",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "8px 18px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 0 12px #00ff41cc"
          }}
          onClick={onReplayScrapbook}
        >
          Replay Scrapbook Animation
        </button>
        <button
          className="hacking-font glass-panel"
          style={{
            marginTop: 18,
            background: "#ff0041",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "8px 18px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 0 12px #ff0041cc"
          }}
          onClick={onClearUserData}
        >
          Remove cache/cookie data
        </button>
      </div>
    </div>,
    document.getElementById("settings-portal-root")
  );
};

export default SettingsPopup;