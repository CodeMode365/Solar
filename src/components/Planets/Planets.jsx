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
  const data = [Mercury, Venus, Earth, Mars, Jupiter, Saturn, Neptune, Uranus];
  return (
    <>
      {data.map((item, index) => {
        posX += 25;
        return (
          <Planet
            texture={item}
            size={[1, 64, 64]}
            Scale={3}
            Position={[0, 0, posX]}
            speed={0.004}
            key={index}
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
