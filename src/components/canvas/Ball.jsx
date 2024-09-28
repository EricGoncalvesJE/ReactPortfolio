import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from 'three';
import StarsCanvas from "./Stars";

const MainBall = () => {
  const { scene } = useGLTF('/text.glb');
  const ref = useRef();

  return <primitive ref={ref} object={scene} scale={0.25} />;
};

const HTMLlogo = ({ radius, speed, height }) => {
  const { scene } = useGLTF('/html5_logo.glb');
  const ref = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    ref.current.position.x = Math.sin(elapsed * speed) * radius;
    ref.current.position.z = Math.cos(elapsed * speed) * radius;
    ref.current.position.y = height;
    ref.current.rotation.y = elapsed;
  });

  return (
    <group ref={ref}>
      <primitive object={scene} />
      <Html position={[0, 1, 0]}>
        <div style={{ color: '#F4BB44', backgroundColor: 'black', padding: '1px 3px', borderRadius: '3px', fontSize: '10px' }}>
          HTML5
        </div>
      </Html>
    </group>
  );
};

const JSLogo = ({ radius, speed, height }) => {
  const { scene } = useGLTF('/jslogo.glb');
  const ref = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    ref.current.position.x = Math.sin(elapsed * speed) * radius;
    ref.current.position.z = Math.cos(elapsed * speed) * radius;
    ref.current.position.y = height;
    ref.current.rotation.y = elapsed * 1;
  });

  return (
    <group ref={ref}>
      <primitive object={scene} scale={0.5} />
      <Html position={[0, 1, 0]}>
        <div style={{ color: 'yellow', backgroundColor: 'black', padding: '1px 3px', borderRadius: '3px', fontSize: '10px' }}>
          JavaScript
        </div>
      </Html>
    </group>
  );
};


const BlenderLogo = ({ radius, speed, height }) => {
  const { scene } = useGLTF('/blenderlogo.glb');
  const ref = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    ref.current.position.x = Math.sin(elapsed * speed) * radius;
    ref.current.position.z = Math.cos(elapsed * speed) * radius;
    ref.current.position.y = height;
    ref.current.rotation.y = elapsed * 2;
  });

  return (
    <group ref={ref}>
      <primitive object={scene} scale={0.25} />
      <Html position={[0, 1, 0]}>
        <div style={{ color: 'orange', backgroundColor: 'black', padding: '1px 3px', borderRadius: '3px', fontSize: '10px' }}>
          Blender
        </div>
      </Html>
    </group>
  );
};

const VisualStudioLogo = ({ radius, speed, height }) => {
  const { scene } = useGLTF('/visual_studio_logo.glb');
  const ref = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    ref.current.position.x = Math.sin(elapsed * speed) * radius;
    ref.current.position.z = Math.cos(elapsed * speed) * radius;
    ref.current.position.y = height;
    ref.current.rotation.y = elapsed * 2.25;
  });

  return (
    <group ref={ref}>
      <primitive object={scene} scale={0.25} />
      <Html position={[0, 0.5, 0]}>
        <div style={{ color: '#ADD8E6', backgroundColor: 'black', padding: '1px 3px', borderRadius: '3px', fontSize: '10px' }}>
          Visual Studio
        </div>
      </Html>
    </group>
  );
};

const ReactLogo = ({ radius, speed, height }) => {
  const { scene } = useGLTF('/react_logo.glb');
  const ref = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    ref.current.position.x = Math.sin(elapsed * speed) * radius;
    ref.current.position.z = Math.cos(elapsed * speed) * radius;
    ref.current.position.y = height;
    ref.current.rotation.y = elapsed * 0.5;
  });

  return (
    <group ref={ref}>
      <primitive object={scene} scale={0.5} />
      <Html position={[0, 0.5, 0]}>
        <div style={{ color: 'white', backgroundColor: 'black', padding: '1px 3px', borderRadius: '3px', fontSize: '10px' }}>
          React
        </div>
      </Html>
    </group>
  );
};

const ThreeJSLogo = ({ radius, speed, height }) => {
  const { scene } = useGLTF('/threejs.glb');
  const ref = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    ref.current.position.x = Math.sin(elapsed * speed) * radius;
    ref.current.position.z = Math.cos(elapsed * speed) * radius;
    ref.current.position.y = height;
    ref.current.rotation.y = elapsed * 3.2;
  });

  return (
    <group ref={ref}>
      <primitive object={scene} scale={0.5} />
      <Html position={[0, 0.5, 0]}>
        <div style={{ color: '#D3D3D3', backgroundColor: 'black', padding: '1px 3px', borderRadius: '3px', fontSize: '10px' }}>
          Three.js
        </div>
      </Html>
    </group>
  );
};


const OrbitalLine = ({ radius, height }) => {
  const points = [];
  for (let i = 0; i <= 100; i++) {
    const angle = (i / 100) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.sin(angle) * radius, height, Math.cos(angle) * radius));
  }
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line>
      <bufferGeometry attach="geometry" {...lineGeometry} />
      <lineBasicMaterial attach="material" color="white" linewidth={0.5} transparent opacity={0.5} />
    </line>
  );
};

const BallCanvas = () => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <MainBall />
        <JSLogo radius={3} speed={0.75} height={2} />
        <HTMLlogo radius={4} speed={0.95} height={0} />
        <ReactLogo radius={5} speed={0.65} height={1} />
        <BlenderLogo radius={6} speed={0.5} height={-1} />
        <VisualStudioLogo radius={3} speed={1.2} height={-2} />
        <ThreeJSLogo radius={8} speed={0.8} height={1.5} />
        <OrbitalLine radius={3} height={2} />
        <OrbitalLine radius={4} height={0.75} />
        <OrbitalLine radius={5} height={1} />
        <OrbitalLine radius={6} height={-1} />
        <OrbitalLine radius={3} height={-2} />
        <OrbitalLine radius={8} height={1.5} />

        <OrbitControls enableZoom={false} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
