import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const skills = [
	{ name: 'React', level: 90 },
	{ name: 'JavaScript', level: 92 },
	{ name: 'Node.js', level: 80 },
	{ name: 'Python', level: 75 },
	{ name: 'CSS', level: 85 },
	{ name: 'Image/Video Tools', level: 70 },
	{ name: 'PDF Tools', level: 65 },
];

const About = () => {
	const aboutRef = useRef(null);

	useEffect(() => {
		anime({
			targets: aboutRef.current,
			opacity: [0, 1],
			translateY: [50, 0],
			easing: 'easeOutExpo',
			duration: 1200,
			delay: 200,
		});
		anime({
			targets: '.skill-bar-inner',
			width: (el) => el.getAttribute('data-level') + '%',
			easing: 'easeInOutQuad',
			duration: 1200,
			delay: anime.stagger(150, { start: 800 }),
		});
	}, []);

	const [text] = useTypewriter({
		words: ['Hi, I\'m Mahim Vyas.', 'Web Developer.', 'Tool Creator.', 'Welcome to my portfolio!'],
		loop: {},
		typeSpeed: 70,
		deleteSpeed: 50,
		delaySpeed: 1000,
	});

	return (
		<section className="about-section glass-panel hacking-font" ref={aboutRef}>
			<h2 className="about-title hacking-green">
				<span>{text}</span>
				<Cursor />
			</h2>
			<div className="about-content">
				<div className="about-bio">
					<p>
						Hi, I'm <b>Mahim Vyas</b>
						<br />
						I'm a passionate developer who loves building modern web apps, creative tools, and digital experiences.
						<br />
						This website is my digital playground—here you'll find my portfolio, coding projects, and a growing set of tools for images, videos, and PDFs.
					</p>
					<p>
						I enjoy blending design, code, and utility to create things that are both beautiful and useful. Explore my skills below!
					</p>
				</div>
				<div className="about-skills">
					<h3 className="hacking-green">My Skills</h3>
					<ul className="skills-list">
						{skills.map((skill) => (
							<li key={skill.name} className="skill-item">
								<span className="skill-name">{skill.name}</span>
								<div className="skill-bar">
									<div
										className="skill-bar-inner"
										data-level={skill.level}
										style={{ width: 0 }}
									></div>
								</div>
								<span className="skill-level">{skill.level}%</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;