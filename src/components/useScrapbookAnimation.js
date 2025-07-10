import anime from 'animejs';

export function playScrapbookFlipInAnimation() {
  const root = document.getElementById('scrapbook-root');
  if (!root) return;
  const children = Array.from(root.children);

  anime.set(children, {
    opacity: 0,
    rotateY: -90,
    translateY: 40,
    filter: 'blur(15px)',
  });

  anime.timeline()
    .add({
      targets: children,
      opacity: [0, 1],
      rotateY: [-90, 0],
      translateY: [40, 0],
      easing: 'easeOutCubic',
      duration: 1200,
      filter: 'blur(0px)',
      delay: anime.stagger(160)
    });
}