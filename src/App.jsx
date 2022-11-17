import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import SpaceShip from "./components/SpaceShip";
import {
  Sphere,
  OrbitControls,
  Stars,
  Cloud,
  RandomizedLight,
  Sky,
  CameraShake,
  Bounds,
  useBounds,
  // Ring,
  useHelper,
} from "@react-three/drei";

import Planets from "./components/Planets/Planets";

import { AmbientLight, PointLightHelper } from "three";

const App = () => {
  // useHelper(light, PointLightHelper);
  const [day, setDay] = React.useState(false);
  const [shake, setShake] = React.useState(true);

  return (
    <>
      <button
        style={{
          position: "absolute",
          top: 15,
          left: 15,
          width: "90px",
          height: "30px",
          borderRadius: "20px",
          background: "red",
          zIndex: 100,
          color: "white",
          border: "none",
          backgroundImage: "linear-gradient(30deg,red,blue)",
          cursor: "pointer",
        }}
        onClick={() => setDay(!day)}
      >
        {day ? "Day view" : "Night view"}
      </button>
      <button
        style={{
          position: "absolute",
          top: 15,
          left: 125,
          width: "70px",
          height: "30px",
          borderRadius: "20px",
          background: "red",
          zIndex: 101,
          color: "white",
          border: "none",
          backgroundImage: "linear-gradient(30deg,red,blue)",
          cursor: "pointer",
        }}
        onClick={() => setShake(!shake)}
      >
        {shake ? "Shake" : "Move Around"}
      </button>
      <Canvas
        camera={{
          position: [-2, 10, 0],
          fov: 75,
          far: 1000,
          near: 0.1,
          rotation: ["100deg", "40deg", 0],
        }}
        style={{ width: "100vw", height: "100vh", background: "#111" }}
      >
        <Stars
          radius={1000}
          depth={350}
          factor={25}
          //  fade
          speed={2}
        />
        <Bounds fit clip observe margin={1.2}>
          <SelectToZoom>
            <Planets />
            <SpaceShip
              Scale={0.75}
              Pos={[20, 15, 12]}
              pColor={"green"}
              sColor={"orange"}
            />
            <SpaceShip Scale={2} Pos={[0, 15, 0]} />
            <SpaceShip Scale={0.75} Pos={[-20, 15, -12]} />
          </SelectToZoom>
        </Bounds>
        {day && (
          <Sky
            distance={450}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />
        )}

        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.75}
        />
      </Canvas>
    </>
  );
};

// This component wraps children in a group with a click handler
// Clicking any object will refresh and fit bounds
function SelectToZoom({ children }) {
  const api = useBounds();
  return (
    <group
      onClick={(e) => (
        e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit()
      )}
      onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}
    >
      {children}
    </group>
  );
}
export default App;
