import { useEffect, useRef, memo } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import './ParticleSphere.css';

const N = 2000; // particle count — constant across all shapes

// ─── Shape Generators ─────────────────────────────────────────────────────────
// Each returns Float32Array of length N*3

function makeSphere() {
  const buf = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const phi = Math.acos(1 - 2 * (i / N));
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const r = 2.0 + (Math.random() - 0.5) * 0.15;
    buf[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    buf[i * 3 + 1] = r * Math.cos(phi);
    buf[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
  }
  return buf;
}

// [ ] Square brackets — two vertical bars each with two horizontal serifs
function makeBrackets() {
  const buf = new Float32Array(N * 3);
  // Six line segments (3 per bracket)
  // Left bracket: top serif, vertical bar, bottom serif
  // Right bracket: top serif, vertical bar, bottom serif
  const segs = [
    // Left [
    { x0: -0.8, y0: 1.6, x1: -1.6, y1: 1.6 }, // top serif
    { x0: -1.6, y0: 1.6, x1: -1.6, y1: -1.6 }, // vertical bar
    { x0: -1.6, y0: -1.6, x1: -0.8, y1: -1.6 }, // bottom serif
    // Right ]
    { x0: 0.8, y0: 1.6, x1: 1.6, y1: 1.6 }, // top serif
    { x0: 1.6, y0: 1.6, x1: 1.6, y1: -1.6 }, // vertical bar
    { x0: 1.6, y0: -1.6, x1: 0.8, y1: -1.6 }, // bottom serif
  ];
  // Weight vertical bars more (they're longer)
  const weights = [1, 4, 1, 1, 4, 1];
  const totalW = weights.reduce((a, b) => a + b, 0);
  let idx = 0;
  segs.forEach((seg, si) => {
    const count = Math.round((weights[si] / totalW) * N);
    for (let j = 0; j < count && idx < N; j++, idx++) {
      const t = j / count;
      buf[idx * 3] = seg.x0 + (seg.x1 - seg.x0) * t + (Math.random() - 0.5) * 0.06;
      buf[idx * 3 + 1] = seg.y0 + (seg.y1 - seg.y0) * t + (Math.random() - 0.5) * 0.06;
      buf[idx * 3 + 2] = (Math.random() - 0.5) * 0.3;
    }
  });
  // Fill any leftover with last segment
  while (idx < N) {
    buf[idx * 3] = (Math.random() - 0.5) * 0.1 + 1.6;
    buf[idx * 3 + 1] = (Math.random() - 0.5) * 3.2;
    buf[idx * 3 + 2] = (Math.random() - 0.5) * 0.3;
    idx++;
  }
  return buf;
}

// </> Code tag — left chevron <, center slash /, right chevron >
function makeChevrons() {
  const buf = new Float32Array(N * 3);
  const segs = [
    { x0: -0.30, y0: 0.90, x1: -2.0, y1: 0.0 }, // upper arm left
    { x0: -2.0, y0: 0.0, x1: -0.30, y1: -0.90 }, // lower arm left
    { x0: -0.22, y0: -1.4, x1: 0.22, y1: 1.4 }, // slash
    { x0: 0.30, y0: 0.90, x1: 2.0, y1: 0.0 }, // upper arm right
    { x0: 2.0, y0: 0.0, x1: 0.30, y1: -0.90 }, // lower arm right
  ];
  const weights = [1.76, 1.76, 3.2, 1.76, 1.76];
  const totalW = weights.reduce((a, b) => a + b, 0);
  let idx = 0;
  segs.forEach((seg, si) => {
    const count = Math.round((weights[si] / totalW) * N);
    for (let j = 0; j < count && idx < N; j++) {
      const t = j / count;
      buf[idx * 3] = seg.x0 + (seg.x1 - seg.x0) * t + (Math.random() - 0.5) * 0.07;
      buf[idx * 3 + 1] = seg.y0 + (seg.y1 - seg.y0) * t + (Math.random() - 0.5) * 0.07;
      buf[idx * 3 + 2] = (Math.random() - 0.5) * 0.3;
      idx++;
    }
  });

  // Fill any leftover to prevent center dots
  while (idx < N) {
    const seg = segs[Math.floor(Math.random() * segs.length)];
    const t = Math.random();
    buf[idx * 3] = seg.x0 + (seg.x1 - seg.x0) * t;
    buf[idx * 3 + 1] = seg.y0 + (seg.y1 - seg.y0) * t;
    buf[idx * 3 + 2] = (Math.random() - 0.5) * 0.3;
    idx++;
  }
  return buf;
}

// Rectangle with a centered dot — represents a mobile phone/app screen
function makeRectDot() {
  const buf = new Float32Array(N * 3);
  const W2 = 1.1, H2 = 1.8; // half-width, half-height (portrait)
  const dotCount = Math.floor(N * 0.08);
  const rectCount = N - dotCount;

  // Rectangle perimeter — 4 sides weighted by length
  const sides = [
    { x0: -W2, y0: H2, x1: W2, y1: H2, len: W2 * 2 }, // top
    { x0: W2, y0: H2, x1: W2, y1: -H2, len: H2 * 2 }, // right
    { x0: W2, y0: -H2, x1: -W2, y1: -H2, len: W2 * 2 }, // bottom
    { x0: -W2, y0: -H2, x1: -W2, y1: H2, len: H2 * 2 }, // left
  ];
  const totalLen = sides.reduce((s, side) => s + side.len, 0);
  let idx = 0;
  sides.forEach(side => {
    const count = Math.round((side.len / totalLen) * rectCount);
    for (let j = 0; j < count && idx < (N - dotCount); j++, idx++) {
      const t = j / count;
      buf[idx * 3] = side.x0 + (side.x1 - side.x0) * t + (Math.random() - 0.5) * 0.06;
      buf[idx * 3 + 1] = side.y0 + (side.y1 - side.y0) * t + (Math.random() - 0.5) * 0.06;
      buf[idx * 3 + 2] = (Math.random() - 0.5) * 0.25;
    }
  });

  // Centered dot
  const dotY = -H2 + 0.32; 
  while (idx < N) {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * 0.16;
    buf[idx * 3] = Math.cos(angle) * r;
    buf[idx * 3 + 1] = dotY + Math.sin(angle) * r;
    buf[idx * 3 + 2] = (Math.random() - 0.5) * 0.1;
    idx++;
  }
  return buf;
}

// Speech bubble — cloud-like bumpy outline + a pointed tail at bottom-right
function makeSpeechBubble() {
  const buf = new Float32Array(N * 3);
  const tailCount = Math.floor(N * 0.12);
  const mainCount = N - tailCount;

  const baseR = 1.35;
  const lobes = 7;
  const amplitude = 0.28;

  let idx = 0;
  // Gap angles for tail connection — even narrower for a sharper tip
  const tStart = 5.28, tEnd = 5.62;

  for (let i = 0; i < mainCount; i++) {
    const t = (i / mainCount) * Math.PI * 2;
    // Skip the gap area
    if (t > tStart && t < tEnd) continue;

    const r = baseR + amplitude * Math.abs(Math.sin(lobes * t * 0.5));
    buf[idx * 3] = r * Math.cos(t) + (Math.random() - 0.5) * 0.05;
    buf[idx * 3 + 1] = r * Math.sin(t) * 0.9 + 0.2 + (Math.random() - 0.5) * 0.05;
    buf[idx * 3 + 2] = (Math.random() - 0.5) * 0.25;
    idx++;
  }

  // Tail: two segments meeting at a tip (triangular look)
  // We use the exact intersection points of the gap to join the tail perfectly
  const r1 = baseR + amplitude * Math.abs(Math.sin(lobes * tStart * 0.5));
  const r2 = baseR + amplitude * Math.abs(Math.sin(lobes * tEnd * 0.5));
  
  const start1X = r1 * Math.cos(tStart), start1Y = r1 * Math.sin(tStart) * 0.9 + 0.2;
  const start2X = r2 * Math.cos(tEnd), start2Y = r2 * Math.sin(tEnd) * 0.9 + 0.2;
  const tipX = 1.65, tipY = -2.0;

  const particlesPerSide = Math.floor((N - idx) / 2);
  const halfTail = idx + particlesPerSide;

  while (idx < N) {
    const isFirstSide = idx < halfTail;
    const t = isFirstSide ? (idx - (N - tailCount * 2)) / particlesPerSide : (idx - halfTail) / (N - halfTail);
    // Use a clean progress variable for the lerp
    const progress = Math.random(); 

    if (isFirstSide) {
      buf[idx * 3] = start1X + (tipX - start1X) * progress + (Math.random() - 0.5) * 0.05;
      buf[idx * 3 + 1] = start1Y + (tipY - start1Y) * progress + (Math.random() - 0.5) * 0.05;
    } else {
      buf[idx * 3] = start2X + (tipX - start2X) * progress + (Math.random() - 0.5) * 0.05;
      buf[idx * 3 + 1] = start2Y + (tipY - start2Y) * progress + (Math.random() - 0.5) * 0.05;
    }
    buf[idx * 3 + 2] = (Math.random() - 0.5) * 0.2;
    idx++;
  }
  return buf;
}

// Diamond — 4-pointed star / rotated square
function makeDiamond() {
  const buf = new Float32Array(N * 3);
  const tips = [[0, 2.0], [1.5, 0], [0, -2.0], [-1.5, 0]];
  let idx = 0;
  for (let s = 0; s < 4; s++) {
    const a = tips[s], b = tips[(s + 1) % 4];
    const perSide = Math.floor(N / 4);
    for (let j = 0; j < perSide && idx < N; j++) {
      const t = j / perSide;
      buf[idx * 3] = a[0] + (b[0] - a[0]) * t + (Math.random() - 0.5) * 0.07;
      buf[idx * 3 + 1] = a[1] + (b[1] - a[1]) * t + (Math.random() - 0.5) * 0.07;
      buf[idx * 3 + 2] = (Math.random() - 0.5) * 0.3;
      idx++;
    }
  }
  while (idx < N) {
    const s = Math.floor(Math.random() * 4);
    const a = tips[s], b = tips[(s + 1) % 4];
    const t = Math.random();
    buf[idx * 3] = a[0] + (b[0] - a[0]) * t;
    buf[idx * 3 + 1] = a[1] + (b[1] - a[1]) * t;
    buf[idx * 3 + 2] = (Math.random() - 0.5) * 0.3;
    idx++;
  }
  return buf;
}

// Hexagon — 6 equal sides
function makeHexagon() {
  const buf = new Float32Array(N * 3);
  let idx = 0;
  const R = 1.9;
  for (let s = 0; s < 6; s++) {
    const aA = (s / 6) * Math.PI * 2 + Math.PI / 6;
    const bA = ((s + 1) / 6) * Math.PI * 2 + Math.PI / 6;
    const ax = Math.cos(aA) * R, ay = Math.sin(aA) * R;
    const bx = Math.cos(bA) * R, by = Math.sin(bA) * R;
    const perSide = Math.floor(N / 6);
    for (let j = 0; j < perSide && idx < N; j++) {
      const t = j / perSide;
      buf[idx * 3] = ax + (bx - ax) * t + (Math.random() - 0.5) * 0.07;
      buf[idx * 3 + 1] = ay + (by - ay) * t + (Math.random() - 0.5) * 0.07;
      buf[idx * 3 + 2] = (Math.random() - 0.5) * 0.3;
      idx++;
    }
  }
  while (idx < N) {
    const s = Math.floor(Math.random() * 6);
    const aA = (s / 6) * Math.PI * 2 + Math.PI / 6;
    const bA = ((s + 1) / 6) * Math.PI * 2 + Math.PI / 6;
    const t = Math.random();
    buf[idx * 3] = Math.cos(aA) * R + (Math.cos(bA) * R - Math.cos(aA) * R) * t;
    buf[idx * 3 + 1] = Math.sin(aA) * R + (Math.sin(bA) * R - Math.sin(aA) * R) * t;
    buf[idx * 3 + 2] = (Math.random() - 0.5) * 0.3;
    idx++;
  }
  return buf;
}

// 3D Cube — 12 edges sampled with particles
function makeCube() {
  const buf = new Float32Array(N * 3);
  const size = 1.35; // Half-size of the cube
  const edges = [
    { a: [-size, size, size], b: [size, size, size] },
    { a: [size, size, size], b: [size, size, -size] },
    { a: [size, size, -size], b: [-size, size, -size] },
    { a: [-size, size, -size], b: [-size, size, size] },
    { a: [-size, -size, size], b: [size, -size, size] },
    { a: [size, -size, size], b: [size, -size, -size] },
    { a: [size, -size, -size], b: [-size, -size, -size] },
    { a: [-size, -size, -size], b: [-size, -size, size] },
    { a: [-size, size, size], b: [-size, -size, size] },
    { a: [size, size, size], b: [size, -size, size] },
    { a: [size, size, -size], b: [size, -size, -size] },
    { a: [-size, size, -size], b: [-size, -size, -size] }
  ];
  let idx = 0;
  const perEdge = Math.floor(N / 12);
  edges.forEach(edge => {
    for (let j = 0; j < perEdge && idx < N; j++, idx++) {
      const t = j / perEdge;
      buf[idx * 3] = edge.a[0] + (edge.b[0] - edge.a[0]) * t + (Math.random() - 0.5) * 0.05;
      buf[idx * 3 + 1] = edge.a[1] + (edge.b[1] - edge.a[1]) * t + (Math.random() - 0.5) * 0.05;
      buf[idx * 3 + 2] = edge.a[2] + (edge.b[2] - edge.a[2]) * t + (Math.random() - 0.5) * 0.05;
    }
  });
  while (idx < N) {
    const edge = edges[Math.floor(Math.random() * edges.length)];
    const t = Math.random();
    buf[idx * 3] = edge.a[0] + (edge.b[0] - edge.a[0]) * t;
    buf[idx * 3 + 1] = edge.a[1] + (edge.b[1] - edge.a[1]) * t;
    buf[idx * 3 + 2] = edge.a[2] + (edge.b[2] - edge.a[2]) * t;
    idx++;
  }
  return buf;
}

// ─── Shaders ──────────────────────────────────────────────────────────────────
const vertexShader = `
  uniform float uTime;
  attribute float aRand;
  void main() {
    vec3 pos = position;
    // Gentle per-particle floating
    pos.y += sin(uTime * 1.4 + aRand * 62.8) * 0.06;
    pos.x += cos(uTime * 1.1 + aRand * 62.8) * 0.06;

    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
    // Small, crisp particles — size 2 to 4.5px, depth-scaled
    gl_PointSize = (2.0 + aRand * 2.5) * (14.0 / -mvPos.z);
    gl_Position  = projectionMatrix * mvPos;
  }
`;

const fragmentShader = `
  uniform vec3  uColor;
  uniform float uOpacity;
  void main() {
    vec2  uv = gl_PointCoord - 0.5;
    float d  = length(uv);
    if (d > 0.5) discard;

    // Outer soft halo — very faint, only in outer 40% of the point
    float halo = smoothstep(0.5, 0.25, d) * 0.18 * uOpacity;

    // Crisp bright core — tight, lives in inner 20% of the point
    float core = smoothstep(0.22, 0.0, d) * 0.92 * uOpacity;

    // Hot white-purple centre pinprick
    float pinprick = smoothstep(0.07, 0.0, d) * 0.6 * uOpacity;

    float alpha = halo + core + pinprick;
    // Slightly cool the halo colour toward white at the core
    vec3 col = mix(uColor, vec3(0.93, 0.87, 1.0), smoothstep(0.22, 0.0, d));
    gl_FragColor = vec4(col, alpha);
  }
`;

// ─── Component ───────────────────────────────────────────────────────────────
const ParticleSphere = memo(function ParticleSphere({ activeCard = null }) {
  const mountRef = useRef(null);
  const stateRef = useRef({
    points: null,
    material: null,
    geometry: null,
    renderer: null,
    currentKey: '00',
    morphTween: null,
    fadeTween: null,
    shapes: null,
    animId: null,
  });

  // Build Three.js scene once
  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const W = el.clientWidth;
    const H = el.clientHeight;

    // Scene / camera / renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    // Pre-compute all shape buffers
    const shapes = {
      '00': makeSphere(),
      '01': makeCube(),
      '02': makeChevrons(),
      '03': makeRectDot(),
      '04': makeSpeechBubble(),
      '05': makeDiamond(),
      '06': makeHexagon(),
    };

    // Geometry — start with sphere
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shapes['00']), 3));
    const rands = new Float32Array(N);
    for (let i = 0; i < N; i++) rands[i] = Math.random();
    geo.setAttribute('aRand', new THREE.BufferAttribute(rands, 1));

    // Material — additive blending for the glow stacking effect
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#a78bfa') },
        uOpacity: { value: 1.0 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // Save to ref
    Object.assign(stateRef.current, { points, material: mat, geometry: geo, renderer, shapes });

    // Mouse parallax — kept very subtle as requested
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      mouse.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
      mouse.ty = ((e.clientY - r.top) / r.height) * -2 + 1;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    // Resize
    const onResize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize, { passive: true });

    const clock = new THREE.Clock();
    const tick = () => {
      stateRef.current.animId = requestAnimationFrame(tick);
      const time = clock.getElapsedTime();
      mat.uniforms.uTime.value = time;

      // Smoothly interpolate mouse movement for extremely subtle parallax
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      // Slow, living sway instead of continuous rotation to prevent flipping
      // This keeps the shapes face-on and stable
      points.rotation.y = Math.sin(time * 0.2) * 0.08;
      points.rotation.x = Math.cos(time * 0.15) * 0.05;

      // Extremely subtle mouse tilt for depth
      points.rotation.y += mouse.x * 0.02;
      points.rotation.x += mouse.y * 0.01;

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(stateRef.current.animId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  // Morph whenever activeCard changes
  useEffect(() => {
    const st = stateRef.current;
    if (!st.geometry || !st.shapes) return;

    const key = activeCard || '00';
    if (key === st.currentKey) return;

    const targetBuf = st.shapes[key];
    const posAttr = st.geometry.attributes.position;
    const fromBuf = new Float32Array(posAttr.array); // snapshot current positions

    // Kill any running tweens
    st.morphTween?.kill();
    st.fadeTween?.kill();

    // Restore full opacity if it was faded
    if (st.material.uniforms.uOpacity.value < 1) {
      gsap.to(st.material.uniforms.uOpacity, { value: 1, duration: 0.3 });
    }

    // Smooth swarm interpolation — snappy but fluid for all shapes
    const proxy = { t: 0 };
    st.morphTween = gsap.to(proxy, {
      t: 1, duration: 1.5, ease: 'power2.inOut',
      onUpdate: () => {
        for (let i = 0; i < fromBuf.length; i++) {
          posAttr.array[i] = fromBuf[i] + (targetBuf[i] - fromBuf[i]) * proxy.t;
        }
        posAttr.needsUpdate = true;
      },
    });

    st.currentKey = key;
  }, [activeCard]);

  const LABELS = {
    '00': '',
    '01': '[ product design ]',
    '02': '< front-end />',
    '03': 'mobile ui',
    '04': 'social & brand',
    '05': 'corporate',
    '06': '{ strategy }',
  };

  return (
    <div className="particle-sphere-wrapper">
      {/* Atmospheric background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '420px',
        height: '420px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.04) 55%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Three.js canvas mount */}
      <div ref={mountRef} style={{ width: '100%', height: '100%', zIndex: 1, position: 'relative' }} />

      {/* Shape label */}
      <div style={{
        position: 'absolute',
        bottom: '8%',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '11px',
        fontFamily: "'Inter', sans-serif",
        textTransform: 'uppercase',
        letterSpacing: '3px',
        color: 'rgba(200,180,255,0.45)',
        opacity: activeCard && activeCard !== '00' ? 1 : 0,
        transition: 'opacity 0.6s ease',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        zIndex: 2,
      }}>
        {LABELS[activeCard] ?? ''}
      </div>
    </div>
  );
});

export default ParticleSphere;
