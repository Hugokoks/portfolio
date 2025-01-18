import "./ComputerModel.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import SpinningComputer from "./ComputerSpinning";

function ComputerModel() {
  return (
    <div className="canvasWrapper">
      <Canvas camera={{ position: [0, 2, 5.5] }}>
        <ambientLight intensity={8} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <SpinningComputer />

          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ComputerModel;
