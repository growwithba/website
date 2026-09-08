'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uPointer;

  // Value-noise fbm — cheap enough for a full-screen pass at 60fps.
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = p * 2.02 + vec2(1.7, 9.2);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 p = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);

    float t = uTime * 0.045;
    vec2 drift = vec2(fbm(p * 1.6 + t), fbm(p * 1.6 - t + 4.0));
    float field = fbm(p * 2.1 + drift * 1.4 + vec2(0.0, t * 2.0));

    // Pointer adds a soft, slow-following bloom rather than a hard spotlight.
    float pointer = 1.0 - smoothstep(0.0, 0.75, length(p - uPointer * vec2(aspect, 1.0) * 0.5));

    vec3 ink = vec3(0.020, 0.024, 0.035);
    vec3 blue = vec3(0.357, 0.549, 1.000);
    vec3 violet = vec3(0.655, 0.545, 0.980);
    vec3 teal = vec3(0.176, 0.831, 0.749);

    vec3 col = ink;
    col = mix(col, blue * 0.55, smoothstep(0.36, 0.78, field));
    col = mix(col, violet * 0.62, smoothstep(0.52, 0.92, field + drift.x * 0.28));
    col = mix(col, teal * 0.50, smoothstep(0.70, 1.02, field * 1.15));
    col += blue * pointer * 0.10;

    // Vignette keeps the type area calm.
    float vig = smoothstep(1.15, 0.15, length(p) * 1.15);
    col *= mix(0.35, 1.0, vig);

    // Fade to page background at the bottom so the section joins seamlessly.
    col = mix(ink, col, smoothstep(0.0, 0.42, uv.y));

    gl_FragColor = vec4(col, 1.0);
  }
`;

function Aurora() {
  const material = useRef<THREE.ShaderMaterial>(null);
  const pointer = useRef(new THREE.Vector2(0, 0));
  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uPointer: { value: new THREE.Vector2(0, 0) },
    }),
    [],
  );

  useFrame(({ clock, pointer: p }, delta) => {
    const m = material.current;
    if (!m) return;
    m.uniforms.uTime.value = clock.elapsedTime;
    m.uniforms.uResolution.value.set(size.width, size.height);
    // Lerp toward the cursor so the bloom trails instead of snapping.
    pointer.current.lerp(p, Math.min(1, delta * 2.2));
    m.uniforms.uPointer.value.copy(pointer.current);
  });

  // The vertex shader writes clip space directly, so the 2x2 plane already
  // covers the viewport at any size — no camera or scale maths needed.
  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function HeroCanvas() {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  // Stop rendering once the hero scrolls away — a full-screen fragment shader
  // is not worth the GPU while the user is reading the rest of the page.
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="absolute inset-0">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: false, alpha: false, powerPreference: 'high-performance' }}
        frameloop={active ? 'always' : 'never'}
      >
        <Aurora />
      </Canvas>
    </div>
  );
}
