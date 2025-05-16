import confetti from 'canvas-confetti';

export const runConfetti = (): void => {
  const duration = 8 * 1000;
  const end = Date.now() + duration;

  const colors = ['#00d5f6', '#007397', '#ffffff']; // You can customize the colors

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
