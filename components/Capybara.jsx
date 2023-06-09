/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 capybara.gltf --transform
Author: Nyilonelycompany (https://sketchfab.com/Nyilonelycompany)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/capybara-low-poly-2b9e0100da7245079fa3d54eedd81030
Title: Capybara (Low Poly)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/capybara-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.22}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.Capybara_mesh_Capybara_mat_0.geometry}
            material={materials.Capybara_mat}
            position={[-0.43, 0.36, -0.08]}
            rotation={[-0.49, 1.3, 0.5]}
            scale={300}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/capybara-transformed.glb");
