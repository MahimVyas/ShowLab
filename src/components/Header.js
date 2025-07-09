import React, { useState, useRef, useContext } from 'react';
import Sidebar from './Sidebar';
import SettingsPopup from './SettingsPopup';
import { ThemeContext } from '../App';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsBtnRef = useRef(null);

  // Use theme context
  const { darkMode, setDarkMode, transparent, setTransparent } = useContext(ThemeContext);

  const handleDarkMode = (val) => setDarkMode(val);
  const handleTransparency = (val) => setTransparent(val);

  return (
    <>
      <button className="Sidebar-open-btn" onClick={() => setSidebarOpen(true)}>
        <span className="material-symbols-rounded" alt="more info">double_arrow</span>
      </button>
      <div className="main-header hacking-font glass-panel">
        <div className="left-header">
          <h2>
            <img 
              src="https://media.istockphoto.com/id/1481522352/vector/professional-innovative-initial-am-logo-and-ma-logo-letter-am-or-ma-minimal-elegant-monogram.jpg?s=612x612&w=0&k=20&c=sE1RioqsRpx3OIDvkNACMYF4sYhlCCYLTJKmifMTeS0="
              alt="Logo" className="logo" />
          </h2>
        </div>
        <div className="right-header">
          <ul className="right-header-ul">
            <li className="sidebar-btn-hover-ani">
              <button className="sidebar-btn hacking-font">
                <span className="material-symbols-rounded">home</span>
                <h3>Home</h3>
              </button>
            </li>
            <li className="sidebar-btn-hover-ani">
              <button
                className="sidebar-btn hacking-font"
                onClick={() => setSettingsOpen((open) => !open)}
                ref={settingsBtnRef}
                style={{ position: "relative", zIndex: 2 }}
              >
                <span className="material-symbols-rounded">settings</span>
                <h3>Settings</h3>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <SettingsPopup
        open={settingsOpen}
        darkMode={darkMode}
        transparent={transparent}
        onDarkMode={handleDarkMode}
        onTransparency={handleTransparency}
        onClose={() => setSettingsOpen(false)}
      />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} user_name="mahimvyas" />
    </>
  );
};

export default Header;