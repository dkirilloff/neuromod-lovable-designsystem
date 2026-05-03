import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface TreeSceneProps {
  lightIntensity: number; // 0-100
}

function Tree({ lightIntensity }: TreeSceneProps) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/tree.glb");

  useEffect(() => {
    scene.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (mesh.isMesh) {
        const original = mesh.material as THREE.MeshStandardMaterial;
        if (original) {
          const cloned = original.clone() as THREE.MeshStandardMaterial;
          cloned.fog = false;
          cloned.envMapIntensity = 0;
          if (cloned.emissive) cloned.emissive.set(0x000000);
          cloned.emissiveIntensity = 0;
          mesh.material = cloned;
        }
        mesh.castShadow = false;
        mesh.receiveShadow = false;
      }
    });
  }, [scene]);

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
    <group ref={group} position={[0, -0.5, 0]} scale={1.5}>
      <primitive object={scene} />
    </group>
  );
}

export function TreeScene({ lightIntensity }: TreeSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 2.5], fov: 45 }}
      gl={{ alpha: true }}
      scene={{ background: null }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 5, 2]} intensity={1.2} />
      <Suspense fallback={null}>
        <Tree lightIntensity={lightIntensity} />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/models/tree.glb");
