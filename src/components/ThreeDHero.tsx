"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Mouse tracker helper
const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

function MouseTracker() {
  useFrame(() => {
    // Smooth transition (lerp)
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;
  });
  return null;
}

// 1. Brain Point Cloud (Synapse Network)
function BrainModel({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsCount = 450;
  
  const [positions, connections] = React.useMemo(() => {
    const pos = new Float32Array(pointsCount * 3);
    const connArr: THREE.Vector3[] = [];
    
    for (let i = 0; i < pointsCount; i++) {
      // Create two lobes of the brain (hemispheres)
      const isLeftLobe = Math.random() > 0.5;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      // Lobe centers and shapes
      const lobeOffsetX = isLeftLobe ? -0.4 : 0.4;
      const r = 0.5 + Math.random() * 0.3; // thickness
      
      const x = r * Math.sin(phi) * Math.cos(theta) * 0.8 + lobeOffsetX;
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      const z = r * Math.cos(phi) * 0.6;
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Randomly select indices to draw connecting neural paths
      if (i > 0 && Math.random() > 0.94) {
        connArr.push(new THREE.Vector3(x, y, z));
        // connect back to some nearby point
        const prevIdx = Math.floor(Math.random() * i);
        connArr.push(new THREE.Vector3(
          pos[prevIdx * 3],
          pos[prevIdx * 3 + 1],
          pos[prevIdx * 3 + 2]
        ));
      }
    }
    return [pos, connArr];
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Rotation and parallax movement based on state clock & mouse tracker
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15 + mouse.x * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1 + mouse.y * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Neural Synapses Points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#14b8a6" // Teal
          size={0.04}
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>

      {/* Internal Core Glow Sphere */}
      <mesh>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshBasicMaterial
          color="#0ea5e9" // Blue core
          transparent
          opacity={0.15}
          wireframe
        />
      </mesh>

      {/* Connection Lines (Synaptic Paths) */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(connections.flatMap(v => [v.x, v.y, v.z])), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#10b981" // Green
          transparent
          opacity={0.35}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}

// 2. Heart Model (Pulsating wireframe)
function HeartModel({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Custom mathematical parametric heart geometry
  const heartGeometry = React.useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const count = 300;

    for (let i = 0; i < count; i++) {
      const u = (i / count) * Math.PI; // 0 to pi
      for (let j = 0; j < 30; j++) {
        const v = (j / 30) * 2 * Math.PI - Math.PI; // -pi to pi
        
        // Parametric equations for a 3D heart
        const x = 16 * Math.pow(Math.sin(u), 3) * Math.sin(v);
        const y = 13 * Math.cos(u) - 5 * Math.cos(2*u) - 2 * Math.cos(3*u) - Math.cos(4*u);
        const z = 16 * Math.pow(Math.sin(u), 3) * Math.cos(v);

        // Normalize size down to scale around 0.8
        vertices.push(x * 0.045, y * 0.045, z * 0.045);
      }
    }
    geom.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    return geom;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Emotional heartbeat pulse calculation
      const pulseSpeed = 4.5; // Heart rate speed
      const scale = 1.0 + Math.sin(state.clock.getElapsedTime() * pulseSpeed) * 0.07;
      meshRef.current.scale.set(scale, scale, scale);
      
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2 + mouse.x * 0.3;
      meshRef.current.rotation.x = mouse.y * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} geometry={heartGeometry}>
      <meshBasicMaterial
        color="#ec4899" // Premium Pink-Rose
        wireframe
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

// 3. Leaf Model (Organic Growth Wireframe)
function LeafModel({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const leafGeometry = React.useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const uSteps = 40;
    const vSteps = 20;

    for (let i = 0; i <= uSteps; i++) {
      const u = (i / uSteps) * Math.PI; // 0 to pi
      for (let j = 0; j <= vSteps; j++) {
        const v = (j / vSteps) * Math.PI - Math.PI/2; // -pi/2 to pi/2
        
        // Mathematical leaf formulation: double curved shape
        const x = Math.sin(u) * Math.cos(v) * 0.8;
        const y = Math.sin(u) * Math.sin(v) * (1 - Math.cos(u)) * 0.8;
        const z = Math.cos(u) * 0.7;
        
        vertices.push(x, y, z);
      }
    }
    geom.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    return geom;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Calm, slow swaying/breathing motion
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1 + mouse.x * 0.3;
      meshRef.current.rotation.x = Math.PI / 4 + mouse.y * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} geometry={leafGeometry}>
      <meshBasicMaterial
        color="#10b981" // Calm emerald green
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

// 4. Background Drifting Particles (Wellness Data Flow)
function BackgroundParticles() {
  const count = 300;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03 + mouse.x * 0.05;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.015 + mouse.y * 0.05;
      
      // Slowly float particles upwards
      const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        positionsArray[i * 3 + 1] += 0.003; // move y up
        if (positionsArray[i * 3 + 1] > 5) {
          positionsArray[i * 3 + 1] = -5; // wrap around
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <PointMaterial
        color="#0ea5e9"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.4}
        depthWrite={false}
      />
    </Points>
  );
}

// 5. Connective lines between floating objects
function ObjectConnections({ p1, p2, p3 }: { p1: [number, number, number], p2: [number, number, number], p3: [number, number, number] }) {
  const lineRef = useRef<THREE.LineSegments>(null);

  const connectionPositions = React.useMemo(() => {
    const pos = new Float32Array(18); // 3 lines = 6 vertices = 18 coords
    // p1 to p2
    pos[0] = p1[0]; pos[1] = p1[1]; pos[2] = p1[2];
    pos[3] = p2[0]; pos[4] = p2[1]; pos[5] = p2[2];
    // p2 to p3
    pos[6] = p2[0]; pos[7] = p2[1]; pos[8] = p2[2];
    pos[9] = p3[0]; pos[10] = p3[1]; pos[11] = p3[2];
    // p3 to p1
    pos[12] = p3[0]; pos[13] = p3[1]; pos[14] = p3[2];
    pos[15] = p1[0]; pos[16] = p1[1]; pos[17] = p1[2];
    return pos;
  }, [p1, p2, p3]);

  useFrame((state) => {
    if (lineRef.current) {
      // Pulse opacity to simulate wellness data flowing
      const material = lineRef.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.15 + Math.sin(state.clock.getElapsedTime() * 3) * 0.1;
    }
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[connectionPositions, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#14b8a6"
        transparent
        opacity={0.2}
        linewidth={1.5}
      />
    </lineSegments>
  );
}

export default function ThreeDHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to [-1, 1]
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-transparent">
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 rounded-full border-4 border-teal-500/10 animate-pulse-slow"></div>
          <div className="absolute inset-2 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 animate-spin"></div>
        </div>
      </div>
    );
  }

  // Float coordinates for objects
  const brainPos: [number, number, number] = [0, 1.4, 0];
  const heartPos: [number, number, number] = [-1.5, -0.8, 0.5];
  const leafPos: [number, number, number] = [1.5, -0.8, -0.5];

  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-transparent">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 3, 2]} intensity={1.5} />
        <pointLight position={[-3, -3, 3]} intensity={1.2} color="#14b8a6" />
        <pointLight position={[3, 3, 3]} intensity={1.2} color="#0ea5e9" />
        
        <MouseTracker />
        <BrainModel position={brainPos} />
        <HeartModel position={heartPos} />
        <LeafModel position={leafPos} />
        <ObjectConnections p1={brainPos} p2={heartPos} p3={leafPos} />
        <BackgroundParticles />
      </Canvas>
    </div>
  );
}
