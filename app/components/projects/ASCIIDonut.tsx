'use client';

import React, { useEffect, useRef } from 'react';

interface ASCIIDonutProps {
  width?: number;
  height?: number;
  speed?: number;
  className?: string;
}

const ASCIIDonut: React.FC<ASCIIDonutProps> = ({
  width = 80,
  height = 22,
  speed = 0.03,
  className = '',
}) => {
  const canvasRef = useRef<HTMLPreElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let A = 0; // rotation around x-axis
    let B = 0; // rotation around z-axis

    const animate = (): void => {
      const output: string[] = [];
      const zbuffer: number[] = [];

      // Initialize arrays
      for (let i = 0; i < width * height; i++) {
        output[i] = ' ';
        zbuffer[i] = 0;
      }

      // Generate the donut
      for (let theta = 0; theta < 6.28; theta += 0.07) {
        // theta goes around the cross-sectional circle of a torus
        for (let phi = 0; phi < 6.28; phi += 0.02) {
          // phi goes around the center of revolution of a torus
          const cosA = Math.cos(A);
          const sinA = Math.sin(A);
          const cosB = Math.cos(B);
          const sinB = Math.sin(B);
          const cosTheta = Math.cos(theta);
          const sinTheta = Math.sin(theta);
          const cosPhi = Math.cos(phi);
          const sinPhi = Math.sin(phi);

          // 3D coordinates of the point on the torus
          const circleX = cosTheta + 2;
          const circleY = sinTheta;

          // 3D coordinates after rotation
          const x = circleX * (cosB * cosPhi + sinA * sinB * sinPhi) - circleY * cosA * sinB;
          const y = circleX * (sinB * cosPhi - sinA * cosB * sinPhi) + circleY * cosA * cosB;
          const z = 5 + cosA * circleX * sinPhi + circleY * sinA;
          const ooz = 1 / z; // one over z

          // 2D projection
          const xp = Math.floor(width / 2 + 30 * ooz * x);
          const yp = Math.floor(height / 2 + 15 * ooz * y);

          // Calculate luminance
          const L =
            cosPhi * cosTheta * sinB -
            cosA * cosTheta * sinPhi -
            sinA * sinTheta +
            cosB * (cosA * sinTheta - cosTheta * sinA * sinPhi);

          if (L > 0) {
            const idx = xp + yp * width;
            if (idx >= 0 && idx < width * height && ooz > zbuffer[idx]) {
              zbuffer[idx] = ooz;
              const luminanceIndex = Math.floor(L * 8);
              output[idx] = '.,-~:;=!*#$@'[luminanceIndex] || '@';
            }
          }
        }
      }

      // Convert output array to string
      let result = '';
      for (let k = 0; k < height; k++) {
        for (let j = 0; j < width; j++) {
          result += output[k * width + j];
        }
        result += '\n';
      }

      canvas.textContent = result;

      // Update rotation angles
      A += speed;
      B += speed * 0.5;

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [width, height, speed]);

  return (
    <div className={`flex justify-center items-center w-full h-full ${className}`}>
      <pre
        ref={canvasRef}
        className="overflow-hidden p-4 mt-12 font-mono text-xs leading-none select-none text-text-tertiary"
      />
    </div>
  );
};

export default ASCIIDonut;
