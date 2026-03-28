import React from 'react';
import clsx from 'clsx';
import { Canvas } from "@react-three/fiber";
import useMacBookStore from "../store/index.js";
import {Box, Circle, OrbitControls, Polyhedron} from "@react-three/drei";
import MacbookModel14 from "./models/Macbook-14.jsx";
import StudioLights from "./studioLights.jsx";

const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacBookStore();

    return (
        <section id="product-viewer" className="text-white">
            <h2>Take a closer Look</h2>

            <div className="controls">
                <p className="info">
                    MacbookPro {scale === 0.08 ? "16'" : "14'"} in {color === '#2e2c2e' ? 'Space Black' : 'Silver'}
                </p>

                <div className="flex-center gap-5 mt-5">
                    {/* Color Selection */}
                    <div className="color-control flex gap-3">
                        <div
                            onClick={() => setColor('#adb5db')}
                            className={clsx(color === '#adb5db' && 'active', "w-6 h-6 bg-[#adb5db] cursor-pointer rounded-full")}
                        />
                        <div
                            onClick={() => setColor('#2e2c2e')}
                            className={clsx(color === '#2e2c2e' && 'active', "w-6 h-6 bg-[#2e2c2e] cursor-pointer rounded-full")}
                        />
                    </div>

                    {/* Size Selection */}
                    <div className="size-control flex gap-4">
                        <div onClick={() => setScale(0.06)} className="cursor-pointer">
                            <p className={clsx('px-3 py-1 rounded-md transition-all', scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}>14'</p>
                        </div>
                        <div onClick={() => setScale(0.08)} className="cursor-pointer">
                            <p className={clsx('px-3 py-1 rounded-md transition-all', scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}>16'</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Give the Canvas container a height or it won't show up! */}

                <Canvas id="canvas" camera={{position:[0,2,5],fov:50, near:0.1,far:100}} >
                    <StudioLights />
                 <MacbookModel14 scale={0.06} position={[0,0.5,0]} />
                    <OrbitControls enableZoom={false}/>
                </Canvas>

        </section>
    );
};

export default ProductViewer;