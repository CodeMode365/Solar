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
// import FlatEarth from "./assets/FlatEarth.jpg";
// import Mars from "./assets/Mars.jpg";
// import Venus from "./assets/Venus.jpg";
// import Saturn from "./assets/Saturn.jpg";
// import Pluto from "./assets/Pluto.jpg";
// import Em from "./assets/Em.png";
// import Neptune from "./assets/Neptune.jpg";
// import Mercury from "./assets/Mercury.jpg";
// import Jupiter from "./assets/Jupiter.jpg";

import Planets from "./components/Planets/Planets";

import { AmbientLight, PointLightHelper } from "three";

const config = {
  maxYaw: 0.1, // Max amount camera can yaw in either direction
  maxPitch: 0.1, // Max amount camera can pitch in either direction
  maxRoll: 0.1, // Max amount camera can roll in either direction
  yawFrequency: 0.1, // Frequency of the the yaw rotation
  pitchFrequency: 0.1, // Frequency of the pitch rotation
  rollFrequency: 0.1, // Frequency of the roll rotation
  intensity: 1, // initial intensity of the shake
  decay: true, // should the intensity decay over time
  decayRate: 0.65, // if decay = true this is the rate at which intensity will reduce at
  controls: undefined, // if using orbit controls, pass a ref here so we can update the rotation
};

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
        {/* <Helper /> */}
        {/* <Sphere>
        <meshStandardMaterial color="#d0a0cd" />
      </Sphere> */}
        <Stars
          radius={100}
          depth={50}
          factor={4}
          //  fade
          speed={2}
        />
        {/* <Ring position={[0, 0, 0]} raidus={5} color="red" /> */}
        {shake && <CameraShake {...config} />}
        <Bounds fit clip observe margin={1.2}>
          {/* <directionalLight intensity={1} position={[0, 4, 5]} /> */}
          <poin intensity={1} position={[0, 0, 0]} />
          <SelectToZoom>
            <Planets />
            <SpaceShip
              Scale={0.75}
              Pos={[-5, 0, -12]}
              pColor={"green"}
              sColor={"orange"}
            />
            <SpaceShip Scale={0.75} Pos={[5, 0, -12]} />
            <SpaceShip Scale={2} Pos={[0, 7, -12]} />
          </SelectToZoom>
        </Bounds>
        {day && (
          <Sky
            distance={450}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
            // {...props}
          />
        )}

        {/* <RandomizedLight frames={1} color={["green", "blue", "yellow"]} /> */}
        {/* <OrbitControls /> */}

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
