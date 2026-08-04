import { useEffect, useRef } from 'react';

// Replaces ClickSpark: a compact expanding ring with a soft glow — reads as a
// "contact point" on the console rather than a firework. Fixed full-viewport
// overlay listening on window, so it works anywhere without a huge canvas.
const ClickRipple = ({ color = '255, 180, 84', duration = 520, maxRadius = 26 }) => {
  const canvasRef = useRef(null);
  const ripplesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let rafId;

    const draw = now => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ripplesRef.current = ripplesRef.current.filter(r => {
        const t = (now - r.start) / duration;
        if (t >= 1) return false;
        const ease = 1 - Math.pow(1 - t, 3);
        const alpha = (1 - t) * 0.85;

        // main ring
        ctx.beginPath();
        ctx.arc(r.x, r.y, 3 + ease * maxRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${color}, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 1.5 * (1 - t) + 0.4;
        ctx.shadowColor = `rgba(${color}, ${(alpha * 0.9).toFixed(3)})`;
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // trailing inner ring
        if (t > 0.18) {
          const t2 = (t - 0.18) / 0.82;
          const ease2 = 1 - Math.pow(1 - t2, 3);
          ctx.beginPath();
          ctx.arc(r.x, r.y, 2 + ease2 * maxRadius * 0.55, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${color}, ${((1 - t2) * 0.4).toFixed(3)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // brief center dot flash
        if (t < 0.3) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, 1.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${((1 - t / 0.3) * 0.9).toFixed(3)})`;
          ctx.fill();
        }
        return true;
      });
      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, [color, duration, maxRadius]);

  useEffect(() => {
    const onClick = e => {
      ripplesRef.current.push({ x: e.clientX, y: e.clientY, start: performance.now() });
    };
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', userSelect: 'none', zIndex: 9998 }}
    />
  );
};

export default ClickRipple;
