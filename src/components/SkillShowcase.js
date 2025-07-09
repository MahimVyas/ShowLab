import React from 'react'

const SkillShowcase = () => {
    return (
        <div className="glass-panel hacking-font" style={{
            maxWidth: 900,
            margin: '70px auto 40px auto',
            padding: '48px 34px',
            borderRadius: 20,
            boxShadow: '0 8px 32px #00ff4130',
            background: 'rgba(20,30,30,0.92)',
            color: '#00ff41'
        }}>
            <h2 className="hacking-green" style={{ marginBottom: 18 }}>💻 Portfolio Skill Showcase</h2>
            <ul style={{ textAlign: 'left', fontSize: '1.1rem', color: '#b6e7c9' }}>
                <li>⚡ React, Node.js, JavaScript, Python</li>
                <li>⚡ Image/Video/PDF Tools Development</li>
                <li>⚡ UI/UX with Glassmorphism & Matrix Effects</li>
                <li>⚡ Fast Prototyping & Modern Web Apps</li>
            </ul>
        </div>
    )
}

export default SkillShowcase
