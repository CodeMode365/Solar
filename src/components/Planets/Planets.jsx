import React, { useRef } from "react";
import {
  Mercury,
  Venus,
  Earth,
  Mars,
  Moon,
  Sun,
  Neptune,
  Uranus,
  Jupiter,
  Saturn,
} from "../../assets/Planets";

import { useHelper } from "@react-three/drei";
import Planet from "./Planet";
import { PointLightHelper } from "three";
const Planets = () => {
  const lit = useRef();
  useHelper(lit, PointLightHelper);
  let posX = 10;
  const data = [
    { texture: Mercury, revolutionSpeed: 0.003, rotationSpeed: 0.004,radius:15 },
    { texture: Venus, revolutionSpeed: 0.0005, rotationSpeed: 0.004,radius:30 },
    { texture: Earth, revolutionSpeed: 0.0003, rotationSpeed: 0.004,radius:45 },
    { texture: Mars, revolutionSpeed: 0.0002, rotationSpeed: 0.004,radius:60 },
    { texture: Jupiter, revolutionSpeed: 0.0004, rotationSpeed: 0.004,radius:75 },
    { texture: Saturn, revolutionSpeed: 0.0007, rotationSpeed: 0.004,radius:90 },
    { texture: Uranus, revolutionSpeed: 0.0002, rotationSpeed: 0.004,radius:105 },
    { texture: Neptune, revolutionSpeed: 0.0001, rotationSpeed: 0.004,radius:120 },
  ];
  return (
    <>
      {data.map((item, index) => {
        posX += 25;
        return (
          <Planet
            texture={item.texture}
            size={[1, 64, 64]}
            Scale={3}
            Position={[0, 0, posX]}
            Radius={posX}
            reS={item.revolutionSpeed}
            roS={item.rotationSpeed}
            key={index}
            Index={index}
          />
        );
      })}
      <pointLight intensity={2} position={[0, 0, 0]} ref={lit} />
      <directionalLight intensity={1} position={[0, 0, 0]} ref={lit} />
      <Planet
        texture={Sun}
        size={[1, 64, 64]}
        Scale={15}
        Position={[0, 0, 0]}
        speed={0.005}
        roS={0.0005}
        reS={0.0003}
      />
      {/* <Planet
        texture={Moon}
        size={[1, 64, 64]}
        Scale={2}
        Position={[0, 0, 0]}
        speed={0.008}
      /> */}
    </>
  );
};

export default Planets;
