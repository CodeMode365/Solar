import React from "react";
import SpaceShip from "./SpaceShip";
const SpaceShips = () => {
  return (
    <group>
      <SpaceShip
        Scale={0.75}
        Pos={[20, 15, 12]}
        pColor={"green"}
        sColor={"orange"}
      />
      <SpaceShip Scale={2} Pos={[0, 15, 0]} />
      <SpaceShip Scale={0.75} Pos={[-20, 15, -12]} />
    </group>
  );
};

export default SpaceShips;
