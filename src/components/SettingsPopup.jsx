import React from "react";
import ReactDOM from "react-dom";

const SettingsPopup = ({
  open,
  darkMode,
  transparent,
  onDarkMode,
  onTransparency,
  onClose,
}) => {
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
      </div>
    </div>,
    document.getElementById("settings-portal-root")
  );
};

export default SettingsPopup;