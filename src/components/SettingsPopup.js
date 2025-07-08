import React from "react";
import ReactDOM from "react-dom";

const SettingsPopup = ({
  open,
//   top = 600,
//   right = 90,
  darkMode,
  transparent,
  onDarkMode,
  onTransparency,
  onClose,
}) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      className="settings-popup-container"
    //   style={{ top, right }}
      onClick={onClose}
    >
      <div
        className="settings-popup-card"
        onClick={(e) => e.stopPropagation()}
      >
        <label>
          <input
            type="checkbox"
            checked={!darkMode}
            onChange={onDarkMode}
          />
          Light Mode
        </label>
        <label>
          <input
            type="checkbox"
            checked={!transparent}
            onChange={onTransparency}
          />
        Transparency
        </label>
      </div>
    </div>,
    document.getElementById("settings-portal-root")
  );
};

export default SettingsPopup;