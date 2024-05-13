import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Color, Mesh } from "three";
import GUI from "lil-gui";

interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export function Model(props: ModelProps) {
  const gltfResult = useGLTF("./models/AjaarWatch.glb") as any;
  const { nodes, materials } = gltfResult;
  const { camera } = useThree();
  const guiRef = useRef<GUI | null>(null);

  useEffect(() => {
    const gui = new GUI({ autoPlace: false });
    guiRef.current = gui;
    document.body.appendChild(gui.domElement);

    Object.keys(materials).forEach((m) => {
      const material = materials[m];
      if (material && material.color) {
        // Here, we name the control based on the material's name
        const colorControl = gui
          .addColor({ color: "#" + material.color.getHexString() }, "color")
          .name(m); // Sets a custom name for the control
        colorControl.onChange((newColor: string) => {
          material.color = new Color(newColor);
        });
      }
    });

    gui.domElement.style.position = "absolute";
    gui.domElement.style.top = "190px";
    gui.domElement.style.right = "80px";

    return () => {
      if (gui) {
        gui.destroy();
        if (gui.domElement) {
          document.body.removeChild(gui.domElement);
        }
      }
    };
  }, [materials, camera]);

  return (
    <group {...props} dispose={null}>
      <group
        position={props.position || [0, 0, 0]}
        rotation={props.rotation || [Math.PI / 2, -0.087, 0]}
      >
        {Object.keys(nodes).map((key) => {
          const node = nodes[key];
          if (node instanceof Mesh) {
            return (
              <mesh
                key={key}
                geometry={node.geometry}
                material={materials[node.material.name]}
              />
            );
          }
          return null;
        })}
      </group>
    </group>
  );
}

useGLTF.preload("./models/AjaarWatch.glb");
