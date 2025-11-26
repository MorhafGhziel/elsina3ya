"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

function FloatingOrb({ position, color, speed = 1, size = 0.5 }: { position: [number, number, number]; color: string; speed?: number; size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * speed;
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.4;
    meshRef.current.position.x = position[0] + Math.cos(t * 0.7) * 0.2;
    meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.3;
    meshRef.current.rotation.y = Math.cos(t * 0.5) * 0.3;
    meshRef.current.rotation.z = Math.sin(t * 0.3) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={0.6}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          distort={0.5}
          speed={2.5}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
}

function GeometricShape({ position, rotation, color, shape = "octahedron" }: { position: [number, number, number]; rotation: [number, number, number]; color: string; shape?: "octahedron" | "tetrahedron" | "icosahedron" }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = rotation[0] + t * 0.3;
    meshRef.current.rotation.y = rotation[1] + t * 0.4;
    meshRef.current.rotation.z = rotation[2] + t * 0.2;
    
    // Subtle floating
    meshRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.15;
  });

  const geometryProps = {
    octahedron: <octahedronGeometry args={[0.35, 0]} />,
    tetrahedron: <tetrahedronGeometry args={[0.35, 0]} />,
    icosahedron: <icosahedronGeometry args={[0.3, 0]} />,
  };

  return (
    <Float speed={1.2} rotationIntensity={1} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        {geometryProps[shape]}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.15}
          transparent
          opacity={0.5}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Scene3D() {
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useFrame(({ mouse, viewport }) => {
    if (!groupRef.current) return;
    
    // Smooth mouse tracking
    const targetX = (mouse.x * viewport.width) / 3;
    const targetY = (mouse.y * viewport.height) / 3;
    
    mouseRef.current.x += (targetX - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (targetY - mouseRef.current.y) * 0.05;
    
    groupRef.current.rotation.x = mouseRef.current.y * 0.15;
    groupRef.current.rotation.y = mouseRef.current.x * 0.15;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-5, -5, -5]} intensity={0.8} />
      <pointLight position={[-3, 2, -2]} intensity={0.8} color="#ff7d00" distance={10} decay={2} />
      <pointLight position={[3, -2, -2]} intensity={0.8} color="#15616d" distance={10} decay={2} />
      <pointLight position={[0, 3, -4]} intensity={0.6} color="#ffecd1" distance={12} decay={2} />

      {/* Floating orbs - more variety */}
      <FloatingOrb position={[-2.5, 1.5, -2]} color="#ff7d00" speed={0.7} size={0.6} />
      <FloatingOrb position={[2.5, -1.5, -2]} color="#15616d" speed={1.1} size={0.55} />
      <FloatingOrb position={[0, 2.5, -3.5]} color="#ffecd1" speed={0.9} size={0.5} />
      <FloatingOrb position={[-1.5, -2, -2.5]} color="#ff7d00" speed={1.3} size={0.4} />
      <FloatingOrb position={[1.5, 0.5, -1.5]} color="#15616d" speed={0.8} size={0.45} />

      {/* Geometric shapes - more variety */}
      <GeometricShape position={[-2, -1.5, -1]} rotation={[0, 0, 0]} color="#ff7d00" shape="octahedron" />
      <GeometricShape position={[2, 1.5, -1]} rotation={[Math.PI / 4, Math.PI / 4, 0]} color="#15616d" shape="tetrahedron" />
      <GeometricShape position={[0, -2.5, -2]} rotation={[Math.PI / 2, 0, Math.PI / 4]} color="#ffecd1" shape="icosahedron" />
      <GeometricShape position={[-1, 1, -1.5]} rotation={[Math.PI / 3, Math.PI / 6, 0]} color="#ff7d00" shape="tetrahedron" />
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 70 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
        className="opacity-70"
        dpr={[1, 2]}
      >
        <Scene3D />
      </Canvas>
    </div>
  );
}

