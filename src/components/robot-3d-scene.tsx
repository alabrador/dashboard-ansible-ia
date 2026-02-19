"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { CameraShake, OrbitControls, Stage, useAnimations, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

type Robot3DSceneProps = {
  lookX: number;
  lookY: number;
  theme: "dark" | "light";
  isSmiling: boolean;
};

type RobotModelProps = {
  lookX: number;
  lookY: number;
  isSmiling: boolean;
};

function RobotModel({ lookX, lookY, isSmiling }: RobotModelProps) {
  const robotRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/models/robot-draco.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const idleAction = actions.Idle;
    if (idleAction) {
      idleAction.reset().fadeIn(0.25).play();
    }

    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });

    return () => {
      if (idleAction) {
        idleAction.fadeOut(0.2);
      }
    };
  }, [actions, scene]);

  useFrame((_, delta) => {
    if (robotRef.current) {
      const targetY = lookX * 0.22;
      const targetX = lookY * -0.14;
      const targetScale = isSmiling ? 1.045 : 1;

      robotRef.current.rotation.y = THREE.MathUtils.lerp(robotRef.current.rotation.y, targetY, delta * 4.5);
      robotRef.current.rotation.x = THREE.MathUtils.lerp(robotRef.current.rotation.x, targetX, delta * 4.5);
      robotRef.current.scale.x = THREE.MathUtils.lerp(robotRef.current.scale.x, targetScale, delta * 8);
      robotRef.current.scale.y = THREE.MathUtils.lerp(robotRef.current.scale.y, targetScale, delta * 8);
      robotRef.current.scale.z = THREE.MathUtils.lerp(robotRef.current.scale.z, targetScale, delta * 8);
    }
  });

  return <primitive ref={robotRef} object={scene} position={[0, -0.12, 0]} scale={0.8} />;
}

useGLTF.preload("/models/robot-draco.glb");

export function Robot3DScene({ lookX, lookY, theme, isSmiling }: Robot3DSceneProps) {
  return (
    <Canvas
      dpr={[2, 3]}
      shadows
      camera={{ position: [0, 0.2, 3.8], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="h-full w-full"
    >
      <Suspense fallback={null}>
        <Stage
          adjustCamera={1.15}
          intensity={theme === "dark" ? 1.1 : 0.95}
          environment={theme === "dark" ? "city" : "studio"}
          contactShadow={false}
        >
          <RobotModel lookX={lookX} lookY={lookY} isSmiling={isSmiling} />
        </Stage>
      </Suspense>

      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 1.8}
        minAzimuthAngle={-0.65}
        maxAzimuthAngle={0.65}
      />

      <CameraShake
        maxYaw={0.1}
        maxPitch={0.05}
        maxRoll={0.05}
        yawFrequency={0.05}
        pitchFrequency={0.2}
        rollFrequency={0.2}
        intensity={0.55}
        decayRate={0.65}
      />
    </Canvas>
  );
}