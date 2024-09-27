import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Line, Html, PerformanceMonitor } from "@react-three/drei";
import * as THREE from "three";

const Sun = () => {
  const sunRef = useRef();

  // Animation loop
  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <mesh ref={sunRef} position={[0, 0, 0]} scale={[5, 5, 5]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial emissive="yellow" emissiveIntensity={2} color="orange" />
      </mesh>
      <mesh position={[0, 0, 0]} scale={[5.2, 5.2, 5.2]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color="yellow" transparent opacity={0.5} />
      </mesh>
      <Html position={[0, 5.5, 0]} center>
        <div style={{ color: 'white', backgroundColor: 'black', padding: '1px 2.5px', borderRadius: '3px', fontSize: '0.75em' }}>Sun</div>
      </Html>
    </>
  );
};

const Planet = ({ name, size, distance, speed, color }) => {
  const planetRef = useRef();
  const orbitRef = useRef();

  // Animation loop
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (orbitRef.current) {
      orbitRef.current.rotation.y = elapsedTime * speed;
    }
  });

  // Create points for the orbital line
  const points = [];
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * distance, 0, Math.sin(angle) * distance));
  }

  return (
    <group ref={orbitRef}>
      <Line points={points} color="white" lineWidth={1} transparent opacity={0.3} />
      <mesh ref={planetRef} position={[distance, 0, 0]} scale={[size, size, size]}>
        <sphereGeometry args={[0.5, 12, 12]} />
        <meshStandardMaterial color={color} />
        <Html position={[0, size * 10, 0]} center>
          <div style={{ color: 'white', backgroundColor: 'black', padding: '1px 2.5px', borderRadius: '3px', fontSize: '0.75em' }}>{name}</div>
        </Html>
      </mesh>
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows={false}
      frameloop="demand"
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true, antialias: false }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 20, 40],
      }}
    >
      <PerformanceMonitor />
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 0]} intensity={4} />
        <Sun />
        <Planet name="Mercury" size={0.2} distance={2} speed={4.74} color="gray" />
        <Planet name="Venus" size={0.4} distance={3} speed={3.5} color="orange" />
        <Planet name="Earth" size={0.4} distance={4} speed={2.98} color="blue" />
        <Planet name="Mars" size={0.3} distance={5} speed={2.41} color="red" />
        <Planet name="Jupiter" size={1} distance={8} speed={1.31} color="orange" />
        <Planet name="Saturn" size={0.9} distance={11} speed={0.97} color="yellow" />
        <Planet name="Uranus" size={0.6} distance={14} speed={0.68} color="lightblue" />
        <Planet name="Neptune" size={0.6} distance={17} speed={0.54} color="blue" />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
