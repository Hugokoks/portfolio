import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Computer3D from "../../../public/Computer3D";

export default function SpinningComputer() {
  const modelRef = useRef();

  useFrame((state) => {
    // Rotate the model around the Y axis
    if (modelRef.current) {
      modelRef.current.rotation.y = 0.2 * state.clock.getElapsedTime();
    }
  });

  return (
    <group ref={modelRef}>
      <Computer3D />
    </group>
  );
}
