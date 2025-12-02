"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial
          color="#ff7d00"
          attach="material"
          distort={0.2}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          emissive="#ff7d00"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.075;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ff9d33"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function TwistedTorus() {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      torusRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
      <mesh ref={torusRef} position={[3, -2, 1]} scale={0.8}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.3}
          emissive="#ff7d00"
          emissiveIntensity={0.2}
          depthWrite={false}
        />
      </mesh>
    </Float>
  );
}

function Rings() {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.x = state.clock.getElapsedTime() * 0.08;
      ringsRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
      ringsRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.2}>
      <group ref={ringsRef} position={[-3, 1, -3]}>
        {[1.2, 1.8, 2.5].map((radius, i) => (
          <mesh key={i} rotation={[Math.PI / 2.5, 0, Math.PI / 6 * i]}>
            <torusGeometry args={[radius, 0.015, 32, 100]} />
            <meshStandardMaterial
              color="#ffffff"
              wireframe
              transparent
              opacity={0.3 - i * 0.05}
              emissive="#ff7d00"
              emissiveIntensity={0.2}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <ringGeometry args={[2.6, 2.8, 64]} />
          <meshStandardMaterial
            color="#ffffff"
            wireframe
            transparent
            opacity={0.2}
            emissive="#ff7d00"
            emissiveIntensity={0.2}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff9d33" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        <spotLight
          position={[0, 5, 5]}
          angle={0.5}
          penumbra={1}
          intensity={2}
          color="#ff7d00"
        />

        <AnimatedSphere />
        <Particles />
        <TwistedTorus />
        <Rings />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

