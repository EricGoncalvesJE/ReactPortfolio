import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const RotatingTorus = () => {
  const torusRef = useRef();

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={torusRef} position={[15, 0, 0]}>
      <torusGeometry args={[8, 4, 16, 24]} />
      <meshStandardMaterial color="#ffffff" wireframe />
    </mesh>
  );
};

const MainPageCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 40], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <RotatingTorus />
    </Canvas>
  );
};

export default MainPageCanvas;
