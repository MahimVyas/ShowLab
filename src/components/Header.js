import React, { useState, useRef, useContext, useEffect } from 'react';
import Sidebar from './Sidebar';
import SettingsPopup from './SettingsPopup';
import UsernameModal from './UsernameModal';
import { ThemeContext } from '../App';
import anime from 'animejs';

function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days*24*60*60*1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}
function removeCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [canAnimate, setCanAnimate] = useState(false); // NEW
  const settingsBtnRef = useRef(null);

  // Use theme context
  const { darkMode, setDarkMode, transparent, setTransparent, playScrapbookFlipInAnimation } = useContext(ThemeContext);

  useEffect(() => {
    const cookieUser = getCookie('username');
    if (cookieUser) {
      setUsername(cookieUser);
      setCanAnimate(true);
    } else {
      setShowModal(true);
      setCanAnimate(false);
    }
  }, []);

  const handleUsernameSubmit = (name) => {
    setCookie('username', name);
    setUsername(name);
    setShowModal(false);
    setCanAnimate(true);
    // Wait for modal to close and DOM to update, then play animation
    setTimeout(() => {
      if (typeof playScrapbookFlipInAnimation === 'function') {
        playScrapbookFlipInAnimation();
      }
    }, 0);
  };

  const handleDarkMode = (val) => setDarkMode(val);
  const handleTransparency = (val) => setTransparent(val);

  const handleClearUserData = () => {
    removeCookie('username');
    setUsername('');
    setShowModal(true);
    setCanAnimate(false);
    // Optionally clear other localStorage/sessionStorage if needed
    // localStorage.clear();
    // sessionStorage.clear();
  };

  // Scroll to top with animejs animation
  const handleHomeClick = () => {
    if (!canAnimate) return;
    anime({
      targets: [document.scrollingElement || document.documentElement, document.body],
      scrollTop: 0,
      duration: 100,
      easing: 'easeOutCubic',
    });
  };

  // Only allow scrapbook animation if canAnimate is true
  const handleReplayScrapbook = () => {
    if (canAnimate && typeof playScrapbookFlipInAnimation === 'function') {
      playScrapbookFlipInAnimation();
    }
  };

  // Hide settings popup if username modal is open
  const showSettings = settingsOpen && !showModal;

  return (
    <>
      <UsernameModal open={showModal} onSubmit={handleUsernameSubmit} />
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
              <button onClick={handleHomeClick} className="sidebar-btn hacking-font">
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
      {showSettings && (
        <SettingsPopup
          open={settingsOpen}
          darkMode={darkMode}
          transparent={transparent}
          onDarkMode={handleDarkMode}
          onTransparency={handleTransparency}
          onClose={() => setSettingsOpen(false)}
          onClearUserData={handleClearUserData}
          onReplayScrapbook={handleReplayScrapbook}
        />
      )}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} user_name={username || 'Guest'} />
    </>
  );
};

export default Header;