import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Robot = () => {
  const { scene } = useGLTF("/RobotExpressive.glb");
  const robotRef = useRef();

  useFrame(({ clock }) => {
    if (robotRef.current) {
      robotRef.current.rotation.y += 0.03; // gentle spin
    }
  });

  return (
    <primitive
      object={scene}
      ref={robotRef}
      scale={3}             // ✅ BIGGER robot
      position={[0, -6, 0]}    // ✅ Lowered to show full body
    />
  );
};

export const RobotModel = () => {
  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 2, 13] }}> {/* ✅ Farther away */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={1} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Robot />
      </Canvas>
    </div>
  );
};
