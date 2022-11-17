import React, { useRef, forwardRef, useLayoutEffect } from "react";
import { useGLTF, Float, PivotControls } from "@react-three/drei";

// One-click copy/paste from the poimandres market: https://market.pmnd.rs/model/low-poly-spaceship
const Ship = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(`/model.gltf`);
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      material.roughness = 0;
    });
  }, []);
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.Mat0}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Cube005_1.geometry}
        material={materials.Mat1}
        material-color="#fd7acc"
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Cube005_2.geometry}
        material={materials.Mat2}
        material-envMapIntensity={0.2}
        material-color="#559cae"
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Cube005_3.geometry}
        material={materials.Window_Frame}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Cube005_4.geometry}
        material={materials.Mat4}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Cube005_6.geometry}
        material={materials.Window}
      />
    </group>
  );
});

const SpaceShip = ({ Pos,Scale }) => {
  const ship = useRef();
  return (
    <Float scale={Scale} position={Pos} rotation={[0, 0.6, 0]}>
      <PivotControls
        anchor={[0, 0.7, 0.09]}
        depthTest={true}
        scale={0.5}
        lineWidth={2}
      >
        <Ship ref={ship} />
      </PivotControls>
    </Float>
  );
};

export default SpaceShip;
