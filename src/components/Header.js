import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './Sidebar';
import SettingsPopup from './SettingsPopup';

const Header = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [transparent, setTransparent] = useState(true);
  const settingsBtnRef = useRef(null);

  // Apply dark/light mode to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Apply/remove transparency
  useEffect(() => {
    if (transparent) {
      document.documentElement.style.setProperty('--main-header-bg', '#1e1f207b');
      document.documentElement.style.setProperty('--sidebar-bg', '#1313144d');
      document.documentElement.style.setProperty('--settings-bg', '#222c');
      document.documentElement.style.setProperty('--main-header-blur', 'blur(15px)');
      document.documentElement.style.setProperty('--sidebar-blur', 'blur(25px)');
      document.documentElement.style.setProperty('--settings-blur', 'blur(10px)');
    } else {
      document.documentElement.style.setProperty('--main-header-bg', '#1e1f20');
      document.documentElement.style.setProperty('--sidebar-bg', '#131314');
      document.documentElement.style.setProperty('--settings-bg', '#222');
      document.documentElement.style.setProperty('--main-header-blur', 'none');
      document.documentElement.style.setProperty('--sidebar-blur', 'none');
      document.documentElement.style.setProperty('--settings-blur', 'none');
    }
  }, [transparent]);

  const handleDarkMode = () => setDarkMode((prev) => !prev);
  const handleTransparency = () => setTransparent((prev) => !prev);

  return (
    <>
      <button className="sidebar-btn Sidebar-open-btn" onClick={() => setSidebarOpen(true)}>
        <span className="material-symbols-rounded" alt="more info">double_arrow</span>
      </button>
      <div className="main-header">
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
              <button className="sidebar-btn">
                <span className="material-symbols-rounded">home</span>
                <h3>Home</h3>
              </button>
            </li>
            <li className="sidebar-btn-hover-ani">
              <button
                className="sidebar-btn"
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