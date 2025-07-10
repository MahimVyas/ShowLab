import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import SkillShowcase from './components/SkillShowcase';
import HackingBackground from './components/HackingBackground';
import About from "./components/About";
import Tools from './components/Tools';
import MainTitle from './components/MainTitle';
import { playScrapbookFlipInAnimation } from './components/useScrapbookAnimation';

// Context for theme
export const ThemeContext = createContext();

function App() {
  // Move theme state to App so all components can access
  const [darkMode, setDarkMode] = useState(() => {
    // Persist theme in localStorage
    const saved = localStorage.getItem('darkMode');
    return saved === null ? true : saved === 'true';
  });
  const [transparent, setTransparent] = useState(() => {
    const saved = localStorage.getItem('transparent');
    return saved === null ? true : saved === 'true';
  });
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

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
    localStorage.setItem('transparent', transparent);
  }, [transparent]);

  useEffect(() => {
    // Only play animation if canAnimate is true
    if (canAnimate) {
      playScrapbookFlipInAnimation();
    }
  }, [canAnimate]);

  return (
    <ThemeContext.Provider value={{
      darkMode, setDarkMode,
      transparent, setTransparent,
      playScrapbookFlipInAnimation,
      canAnimate, setCanAnimate
    }}>
      <div className="App hacking-font">
        <div className="terminal-animated-bg"></div>
        <div className="terminal-scanlines"></div>
        <HackingBackground />
        <div id="scrapbook-root">
          <MainTitle />
          <Header />
          <About />
          <Content />
          <SkillShowcase />
          <Tools />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
