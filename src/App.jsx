import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import Buttons from "./components/Buttons";
import SpaceShips from "./components/Ships/SpaceShips";
import {
  OrbitControls,
  Stars,
  Sky,
  Bounds,
  useBounds,
  useHelper,
  Text,
} from "@react-three/drei";
import Planets from "./components/Planets/Planets";

const TextFaceCamera = () => {
  const text = useRef();
  useFrame(({ camera }) => {
    text.current.quaternion.copy(camera.quaternion);
  });
  return (
    <Text
      ref={text}
      color={"#aaaaaa"}
      scale={100}
      position={[0, 55, 0]}
      anchorX="center"
      anchorY="middle"
    >
      {` Hello to the Solar ${"   "} \nWorld of BitByte`}
    </Text>
  );
};

const App = () => {
  // useHelper(light, PointLightHelper);
  const [day, setDay] = React.useState(false);
  const [shake, setShake] = React.useState(true);
  //text face the camera

  return (
    <>
      <Buttons day={day} setDay={setDay} shake={shake} setShake={setShake} />
      <Canvas
        camera={{
          position: [30, 30, 150],
          fov: 75,
          far: 1000,
          near: 0.1,
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
            {/* <SpaceShips /> */}

            {/* <lineDashedMaterial/>
            <ellipseCurve args={[   0,0,
      100, 100, 
      0, 2.0 * Math.PI, 
      false]}/> */}

            <TextFaceCamera />
          </SelectToZoom>
        </Bounds>
        {day && (
          <Sky
            distance={450000}
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
