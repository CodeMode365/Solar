import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { MeshBasicMaterial, TextureLoader } from "three";
import { Data } from "./Planets_Data";
const Planet = ({ texture, Position, size, roS, Scale, reS }) => {
  const colorMap = useLoader(TextureLoader, texture);
  const planet = useRef(null);
  const rotator = useRef(null);
  useFrame(() => {
    planet.current.rotation.y += roS; //rotation on own axis
    rotator.current.rotation.y += reS; //revolution around sun
  });
  return (
    <mesh ref={rotator} position={[0, 0, 0]}>
      <mesh ref={planet} scale={Scale} position={Position} rotation={[0, 0, 0]}>
        <sphereGeometry args={size} />
        {texture.indexOf("Sun") > -1 ? (
          <meshToonMaterial attach="material" opacity={0.7} map={colorMap} />
        ) : (
          <meshPhysicalMaterial
            attach="material"
            opacity={0.7}
            map={colorMap}
          />
        )}
      </mesh>
    </mesh>
  );
};

export default Planet;
