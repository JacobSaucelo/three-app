import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./importtt.css";
import Plant from "./Plant";
import Capybara from "./Capybara";

function Importtt() {
  return (
    <section className="canvasContainer">
      <Canvas>
        {/* <Plant /> */}
        <Capybara />
        <ambientLight intensity={1} />
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={20}
          enableZoom={false}
        />
      </Canvas>
    </section>
  );
}

export default Importtt;
