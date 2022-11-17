import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three";

const Planet = ({ texture, Position, size, speed, Scale }) => {
  const colorMap = useLoader(TextureLoader, texture);
  const planet = useRef(null);
  useFrame(() => {
    planet.current.rotation.y += speed;
  });
  return (
    <mesh ref={planet} scale={Scale} position={Position} rotation={[0, 0, 0]}>
      <sphereGeometry size={size} />
      <meshStandardMaterial
        attach="material"

        opacity={0.7}
        map={colorMap}
      />
    </mesh>
  );
};

export default Planet;