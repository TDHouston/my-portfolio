"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model } from "./Watch";
import { Environment, OrbitControls } from "@react-three/drei";

const HeroCanvas = () => {
  return (
    <div className="h-[100%] w-[100%]">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model />
        <Environment preset="forest" />
        <OrbitControls autoRotate autoRotateSpeed={0.1} />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
