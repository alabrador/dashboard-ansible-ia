"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
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
  const headRef = useRef<THREE.Group>(null);
  const eyesRef = useRef<THREE.Group>(null);
  const smileRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (headRef.current) {
      const targetY = lookX * 0.35;
      const targetX = lookY * -0.25;
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetY, delta * 5);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetX, delta * 5);
    }

    if (eyesRef.current) {
      const targetEyeX = lookX * 0.08;
      const targetEyeY = lookY * -0.05;
      eyesRef.current.position.x = THREE.MathUtils.lerp(eyesRef.current.position.x, targetEyeX, delta * 8);
      eyesRef.current.position.y = THREE.MathUtils.lerp(eyesRef.current.position.y, targetEyeY, delta * 8);
    }

    if (smileRef.current) {
      const targetScale = isSmiling ? 1 : 0.2;
      const targetOpacity = isSmiling ? 1 : 0;
      smileRef.current.scale.x = THREE.MathUtils.lerp(smileRef.current.scale.x, targetScale, delta * 9);
      smileRef.current.scale.y = THREE.MathUtils.lerp(smileRef.current.scale.y, targetScale, delta * 9);
      const material = smileRef.current.material as THREE.MeshStandardMaterial;
      material.opacity = THREE.MathUtils.lerp(material.opacity, targetOpacity, delta * 9);
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.35}>
      <group ref={headRef} position={[0, -0.06, 0]}>
        <RoundedBox args={[1.45, 1.2, 1.1]} radius={0.25} smoothness={4}>
          <meshStandardMaterial color="#3b82f6" roughness={0.3} metalness={0.35} />
        </RoundedBox>

        <RoundedBox args={[1.02, 0.5, 0.08]} radius={0.18} smoothness={4} position={[0, 0.07, 0.58]}>
          <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.25} />
        </RoundedBox>

        <group ref={eyesRef} position={[0, 0.07, 0.63]}>
          <RoundedBox args={[0.12, 0.18, 0.04]} radius={0.05} smoothness={4} position={[-0.21, 0, 0]}>
            <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.2} />
          </RoundedBox>
          <RoundedBox args={[0.12, 0.18, 0.04]} radius={0.05} smoothness={4} position={[0.21, 0, 0]}>
            <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.2} />
          </RoundedBox>
        </group>

        <mesh ref={smileRef} position={[0, -0.1, 0.63]} scale={[0.2, 0.2, 0.2]}>
          <torusGeometry args={[0.14, 0.02, 20, 60, Math.PI]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.95} transparent opacity={0} />
        </mesh>

        <mesh position={[-0.82, -0.02, 0]}>
          <sphereGeometry args={[0.17, 24, 24]} />
          <meshStandardMaterial color="#60a5fa" roughness={0.35} metalness={0.25} />
        </mesh>

        <mesh position={[0.82, -0.02, 0]}>
          <sphereGeometry args={[0.17, 24, 24]} />
          <meshStandardMaterial color="#60a5fa" roughness={0.35} metalness={0.25} />
        </mesh>

        <mesh position={[0, 0.66, 0.1]} rotation={[0.2, 0, -0.25]}>
          <torusGeometry args={[0.28, 0.07, 24, 50]} />
          <meshStandardMaterial color="#38bdf8" roughness={0.25} metalness={0.45} />
        </mesh>

      </group>
    </Float>
  );
}

export function Robot3DScene({ lookX, lookY, theme, isSmiling }: Robot3DSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.7]}
      camera={{ position: [0, 0.06, 3.85], fov: 30 }}
      gl={{ antialias: true, alpha: true }}
      className="h-full w-full"
    >
      <ambientLight intensity={theme === "dark" ? 1.3 : 1.15} />
      <directionalLight position={[2.4, 3.2, 4]} intensity={1.7} color="#93c5fd" />
      <pointLight position={[-2.3, -1, 2]} intensity={1.1} color="#22d3ee" />
      <pointLight position={[0, 1.8, 2.2]} intensity={0.9} color="#bfdbfe" />
      <RobotModel lookX={lookX} lookY={lookY} isSmiling={isSmiling} />
    </Canvas>
  );
}