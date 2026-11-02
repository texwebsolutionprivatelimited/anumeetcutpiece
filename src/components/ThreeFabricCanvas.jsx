import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeFabricCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Dynamic 3D Silk Fabric Cloth Wave
    const width = 28;
    const height = 18;
    const widthSegments = 40;
    const heightSegments = 30;
    const geometry = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);

    // Custom silk-like material with royal navy & gold highlights
    const material = new THREE.MeshStandardMaterial({
      color: 0x0e2246,
      roughness: 0.25,
      metalness: 0.85,
      side: THREE.DoubleSide,
      wireframe: false,
    });

    const cloth = new THREE.Mesh(geometry, material);
    cloth.rotation.x = -0.4;
    cloth.rotation.y = 0.2;
    cloth.position.set(2, 0, -2);
    scene.add(cloth);

    // Floating Golden Zari Dust Particles
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      particleSpeeds[i] = 0.005 + Math.random() * 0.015;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.18,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lighting (Warm Gold Ambient + Navy Rim Lights)
    const ambientLight = new THREE.AmbientLight(0xfff1dc, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffd700, 2.8);
    dirLight1.position.set(10, 15, 12);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x801438, 2.2);
    dirLight2.position.set(-15, -10, 8);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffe28a, 3.5, 30);
    pointLight.position.set(0, 5, 8);
    scene.add(pointLight);

    // Mouse / Touch Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const rect = container.getBoundingClientRect();
      targetX = ((clientX - rect.left) / container.clientWidth - 0.5) * 2;
      targetY = -((clientY - rect.top) / container.clientHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // Window Resize Handling
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();
    const pos = geometry.attributes.position;
    const initialZ = new Float32Array(pos.count);
    for (let i = 0; i < pos.count; i++) {
      initialZ[i] = pos.getZ(i);
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      cloth.rotation.y = 0.2 + mouseX * 0.25;
      cloth.rotation.x = -0.4 - mouseY * 0.15;

      // Realistic silky cloth fluid wave simulation
      for (let i = 0; i < pos.count; i++) {
        const u = pos.getX(i);
        const v = pos.getY(i);
        const zWave =
          Math.sin(u * 0.35 + elapsedTime * 1.8) * 1.1 +
          Math.cos(v * 0.45 + elapsedTime * 1.4) * 0.9 +
          Math.sin((u + v) * 0.2 + elapsedTime * 2.2) * 0.6;
        pos.setZ(i, initialZ[i] + zWave);
      }
      pos.needsUpdate = true;
      geometry.computeVertexNormals();

      // Animate floating gold particles
      const pPositions = particleGeometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pPositions[i * 3 + 1] += particleSpeeds[i];
        if (pPositions[i * 3 + 1] > 12) {
          pPositions[i * 3 + 1] = -12;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-90"
      aria-hidden="true"
    />
  );
}
