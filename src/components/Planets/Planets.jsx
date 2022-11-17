import React from "react";
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
import Planet from "./Planet";
const Planets = () => {
  let posX = 10;
  const data = [Mercury, Venus, Earth, Mars, Jupiter, Saturn, Neptune, Uranus];
  return (
    <>
      {data.map((item, index) => {
        posX += 10;
        return (
          <Planet
            texture={item}
            size={[1, 64, 64]}
            Scale={3}
            Position={[posX, 0, posX]}
            speed={0.008}
            key={index}
          />
        );
      })}
      <Planet
        texture={Sun}
        size={[1, 64, 64]}
        Scale={15}
        Position={[0, 0, 0]}
        speed={0.008}
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
