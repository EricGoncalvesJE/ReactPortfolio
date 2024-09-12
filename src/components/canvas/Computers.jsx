import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const DonutParticles = ({ isMobile }) => {
  const torusRef = useRef();
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const vertices = [];
  const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
  const positions = torusGeometry.attributes.position.array;
  vertices.push(...positions);

  const p_geom = new THREE.BufferGeometry();
  p_geom.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  const p_material = new THREE.PointsMaterial({
    size: 0.08,
    transparent: true,
    opacity: 1,
  });
  const particles = new THREE.Points(p_geom, p_material);
  particles.scale.set(isMobile ? 2.1 : 2.25, isMobile ? 2.1 : 2.25, isMobile ? 2.1 : 2.25);
  particles.position.set(0, 0, -3);
  particles.rotation.set(0, 0, 0);
  torusRef.current = particles;

  useFrame(({ camera }) => {
    if (torusRef.current) {
      torusRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
      raycaster.current.setFromCamera(mouse.current, camera);
      const intersects = raycaster.current.intersectObject(torusRef.current);

      const targetScale = intersects.length > 0 ? 1.0 : (isMobile ? 2.1 : 2.25);
      const targetSize = intersects.length > 0 ? 0.05 : 0.15;

      // Smoothly interpolate the scale and size
      torusRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05); // Slower transition
      p_material.size = THREE.MathUtils.lerp(p_material.size, targetSize, 0.05); // Slower transition
    }
  });

  // Handle mouse move
  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <primitive object={particles} ref={torusRef} />;
};

const MainPageCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always" // Ensure the canvas updates continuously
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} // Disable zoom
          maxPolarAngle={Math.PI} // Allow full rotation
          minPolarAngle={0} // Allow full rotation
          enableRotate={true} // Enable manual rotation
        />
        <DonutParticles isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default MainPageCanvas;
