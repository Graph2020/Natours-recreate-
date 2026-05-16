import type { ComponentType } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, Float, OrbitControls } from "@react-three/drei";

interface ModelCardProps {
  scale: number;
  position?: [number, number, number];
  model: ComponentType<{ scale?: number }>;
}

const ModelCard = ({
  scale,
  model: Model,
  position = [0, 0, 0],
}: ModelCardProps) => {
  return (
    <div className="relative h-32 w-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />

        <Suspense fallback={null}>
          <group position={position}>
            <Center>
              <Float speed={1} rotationIntensity={1} floatIntensity={2}>
                <Model scale={scale} />
              </Float>
            </Center>
          </group>
          <Environment preset="city" />
        </Suspense>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ModelCard;
