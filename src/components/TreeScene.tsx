import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface TreeSceneProps {
  lightIntensity: number; // 0-100
}

function Tree({ lightIntensity }: TreeSceneProps) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/tree.glb");

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
    const emissive =
      lightIntensity > 50 ? ((lightIntensity - 50) / 50) * 0.3 : 0;
    scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.isMesh) {
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat && "emissiveIntensity" in mat) {
          mat.emissiveIntensity = emissive;
          if (mat.emissive && emissive > 0) {
            mat.emissive.set("#22c55e");
          }
        }
      }
    });
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

export function TreeScene({ lightIntensity }: TreeSceneProps) {
  const dirIntensity = 0.2 + (lightIntensity / 100) * 1.3;
  return (
    <Canvas
      camera={{ position: [0, 1, 4], fov: 45 }}
      gl={{ alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[-5, 5, 3]} intensity={dirIntensity} />
      <Suspense fallback={null}>
        <Tree lightIntensity={lightIntensity} />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/models/tree.glb");
