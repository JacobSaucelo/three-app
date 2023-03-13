import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./herro.css";

function Herro() {
  return (
    <section className="herroContainer">
      <Canvas>
        <mesh>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#665a2c" />
        </mesh>
      </Canvas>
    </section>
  );
}

export default Herro;
