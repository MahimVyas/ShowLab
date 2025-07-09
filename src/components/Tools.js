// src/components/Tools.js
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const tools = [
  { name: 'Image Converter', desc: 'Convert and compress images', icon: '🖼️' },
  { name: 'Video Compressor', desc: 'Compress videos easily', icon: '🎬' },
  { name: 'PDF Merger', desc: 'Merge or split PDFs', icon: '📄' },
];

const Tools = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    anime({
      targets: cardsRef.current,
      opacity: [0, 1],
      translateY: [40, 0],
      delay: anime.stagger(200),
      easing: 'easeOutExpo',
      duration: 900,
    });
  }, []);

  return (
    <section id="tools" className="tools-section">
      <h2>🛠️ Tools</h2>
      <div className="tools-cards">
        {tools.map((tool, i) => (
          <div
            className="tool-card"
            key={tool.name}
            ref={el => cardsRef.current[i] = el}
          >
            <div className="tool-icon">{tool.icon}</div>
            <h3>{tool.name}</h3>
            <p>{tool.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;