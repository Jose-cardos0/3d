//criando objeto 3d
// function Box() {
//   return (
//     <mesh>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshBasicMaterial attach="material" color="hotpink" />
//     </mesh>
//   );
// }

//react
import { useRef } from "react";

//importando canvas
import { Canvas, useFrame } from "@react-three/fiber";

//estrutura de ceu background
import { Stars, OrbitControls, useGLTF } from "@react-three/drei";

function Helmet() {
  const { scene } = useGLTF("helmet.gltf");
  const helmetRef = useRef();

  useFrame(() => {
    helmetRef.current.rotation.y += 0.01;
  });

  return <primitive ref={helmetRef} object={scene} scale={0.1} />;
}

export function Helmet3d() {
  return (
    <Canvas style={{ height: "100%", width: "30%" }}>
      {/*controle da câmera */}
      <OrbitControls />
      <Stars />
      {/* intensidade da luz no ambiente */}
      <ambientLight intensity={5} />
      {/* moveu a luz para mais perto e aumentou a intensidade*/}
      <spotLight position={[5, 10, 5]} angle={0.3} intensity={25} />{" "}
      {/* adicionando direção da luz */}
      <directionalLight
        position={[10, 10, 0]}
        intensity={1}
        color="white"
      />{" "}
      {/* adicionando ponto de luz */}
      <pointLight position={[10, 10, 10]} intensity={12} color="white" />{" "}
      <Helmet style={{ textShadow: "2px 2px 10px white" }} />
    </Canvas>
  );
}
