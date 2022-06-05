import { Canvas } from "@react-three/fiber";
import css from "../styles/Home.module.css";
import Floor from "../components/Floor";
import Box from "../components/Box";
import LightBulb from "../components/LightBulb";
import OrbitControls from "../components/OrbitControls";

export default function Home() {
  return (
      <div className={css.scene}>
        <Canvas
            shadows={true}
            className={css.canvas}
            camera={{
              position: [-6, 7, 7],
            }}
        >
            <ambientLight color={"white"} intensity={0.3} />
            <LightBulb position={[0, 3, 0]} />
            <OrbitControls />
            <Box rotateX={3} rotateY={0.2} />
            <Floor/>
        </Canvas>
      </div>
  );
}