import { useEffect, useRef } from 'react';

// Site-wide animated background: a drifting circuit-node field that reacts to
// the cursor. Nodes inside the cursor's radius get pulled toward it and link
// to it with bright amber lines, so the pointer feels physically connected to
// the page. Pairs with TargetCursor, which replaces the visible cursor.
const CursorField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles = [];
    let rafId = null;

    const mouse = { x: -9999, y: -9999, active: false };

    const LINK_DIST = 130;
    const CURSOR_DIST = 210;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(Math.floor((width * height) / 16000), 110);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1 + Math.random() * 1.6
      }));
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      // move + wrap
      if (!reduceMotion) {
        for (const p of particles) {
          // gentle pull toward the cursor inside its field
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < CURSOR_DIST * CURSOR_DIST && d2 > 1) {
              const d = Math.sqrt(d2);
              const force = ((CURSOR_DIST - d) / CURSOR_DIST) * 0.02;
              p.vx += (dx / d) * force;
              p.vy += (dy / d) * force;
            }
          }
          // clamp speed so the pull never turns into a swarm
          const speed = Math.hypot(p.vx, p.vy);
          const maxSpeed = 0.9;
          if (speed > maxSpeed) {
            p.vx = (p.vx / speed) * maxSpeed;
            p.vy = (p.vy / speed) * maxSpeed;
          }
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }
      }

      // node-to-node links
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.14;
            ctx.strokeStyle = `rgba(140, 160, 190, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // cursor-to-node links, brighter and warmer
      if (mouse.active) {
        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < CURSOR_DIST * CURSOR_DIST) {
            const alpha = (1 - Math.sqrt(d2) / CURSOR_DIST) * 0.4;
            ctx.strokeStyle = `rgba(255, 180, 84, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const p of particles) {
        let glow = 0;
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < CURSOR_DIST) glow = 1 - d / CURSOR_DIST;
        }
        const r = p.r + glow * 1.4;
        ctx.fillStyle =
          glow > 0
            ? `rgba(255, ${Math.round(190 + glow * 40)}, ${Math.round(100 + glow * 60)}, ${(0.35 + glow * 0.6).toFixed(3)})`
            : 'rgba(150, 168, 195, 0.35)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) rafId = requestAnimationFrame(drawFrame);
    };

    const onMove = e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      if (reduceMotion) {
        // static field still lights up around the cursor
        drawFrame();
      }
    };
    const onLeave = () => {
      mouse.active = false;
      if (reduceMotion) drawFrame();
    };

    resize();
    drawFrame();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);

    return () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default CursorField;
