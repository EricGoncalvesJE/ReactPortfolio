import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Squares = () => {
  const squaresRef = useRef([]);
  const [visibleSquares, setVisibleSquares] = useState([]);
  const [opacitySquares, setOpacitySquares] = useState([]);
  const wobbleOffsets = useRef([]);

  useEffect(() => {
    const initialSquares = [];
    const initialWobbleOffsets = [];
    const gridSizeX = 16; // Adjust the grid size horizontally
    const gridSizeY = 8; // Adjust the grid size vertically to make it smaller from top and bottom
    const spacing = 1.75; // Adjust the spacing between squares

    for (let x = -gridSizeX; x <= gridSizeX; x++) {
      for (let y = -gridSizeY; y <= gridSizeY; y++) {
        const square = {
          position: new THREE.Vector3(x * spacing, y * spacing, 0),
          mesh: null,
          color: Math.random() < 0.1 ? `hsl(200, 100%, ${Math.random() * 50 + 50}%)` : "#ffffff", // Random color for a few tiles
        };
        initialSquares.push(square);
        initialWobbleOffsets.push({
          x: Math.random() * 2 * Math.PI,
          y: Math.random() * 2 * Math.PI,
          speed: Math.random() * 0.01 + 0.005, // Reduced wobble speed
        });
      }
    }
    squaresRef.current = initialSquares;
    wobbleOffsets.current = initialWobbleOffsets;
    setVisibleSquares(initialSquares.map(() => true));
    setOpacitySquares(initialSquares.map(() => 1));
  }, []);

  const handlePointerOver = (index) => {
    const affectedIndices = [];
    const radius = 3; // Radius to affect 3 by 3 squares

    squaresRef.current.forEach((square, i) => {
      const distance = squaresRef.current[index].position.distanceTo(square.position);
      if (distance <= radius * 1.75) { // Adjust the multiplier based on spacing
        affectedIndices.push(i);
      }
    });

    setVisibleSquares((prev) => {
      const newVisibleSquares = [...prev];
      affectedIndices.forEach((i) => {
        newVisibleSquares[i] = false;
      });
      return newVisibleSquares;
    });

    affectedIndices.forEach((i) => {
      const randomTime = Math.random() * 4000 + 3000; // Random time between 3 and 7 seconds
      setTimeout(() => {
        setVisibleSquares((prev) => {
          const newVisibleSquares = [...prev];
          newVisibleSquares[i] = true;
          return newVisibleSquares;
        });
        setOpacitySquares((prev) => {
          const newOpacitySquares = [...prev];
          newOpacitySquares[i] = 0;
          return newOpacitySquares;
        });
        let opacity = 0;
        const fadeIn = setInterval(() => {
          opacity += 0.1; // Faster increase in opacity
          setOpacitySquares((prev) => {
            const newOpacitySquares = [...prev];
            newOpacitySquares[i] = opacity;
            return newOpacitySquares;
          });
          if (opacity >= 1) {
            clearInterval(fadeIn);
            setOpacitySquares((prev) => {
              const newOpacitySquares = [...prev];
              newOpacitySquares[i] = 1;
              return newOpacitySquares;
            });
          }
        }, 50); // Smaller interval for smoother transition
      }, randomTime);
    });
  };

  useFrame(() => {
    squaresRef.current.forEach((square, index) => {
      const offset = wobbleOffsets.current[index];
      square.position.x += Math.sin(offset.x + performance.now() * offset.speed) * 0.005; // Reduced wobble amount
      square.position.y += Math.cos(offset.y + performance.now() * offset.speed) * 0.005; // Reduced wobble amount

      if (square.mesh) {
        square.mesh.position.copy(square.position);
      }
    });
  });

  return (
    <>
      {squaresRef.current.map((square, index) => (
        <mesh
          key={index}
          ref={(mesh) => (square.mesh = mesh)}
          position={square.position}
          rotation={[0, 0, 0]}
          onPointerOver={() => handlePointerOver(index)}
          visible={visibleSquares[index]}
        >
          <planeGeometry args={[1.5, 1.5]} /> {/* Half the size of the original squares */}
          <meshStandardMaterial
            color={square.color}
            opacity={opacitySquares[index]}
            transparent
          />
        </mesh>
      ))}
    </>
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
      <Squares />
    </Canvas>
  );
};

export default MainPageCanvas;
