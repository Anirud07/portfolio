import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, MeshDistortMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

const GlowingObjects = () => {
    return (
        <>
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[-2, 1, -2]}>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <MeshDistortMaterial
                        color="#4b5563"
                        emissive="#1f2937"
                        speed={3}
                        distort={0.4}
                        radius={1}
                    />
                </mesh>
            </Float>
            <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
                <mesh position={[2, -1, -3]}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <MeshDistortMaterial
                        color="#64748b"
                        emissive="#334155"
                        speed={2}
                        distort={0.3}
                        radius={1}
                    />
                </mesh>
            </Float>
            <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
                <mesh position={[-1, -1.5, -2]}>
                    <octahedronGeometry args={[0.3]} />
                    <MeshDistortMaterial
                        color="#94a3b8"
                        emissive="#475569"
                        speed={4}
                        distort={0.5}
                        radius={1}
                    />
                </mesh>
            </Float>
        </>
    );
};

const ParticleField = (props: any) => {
    const ref = useRef<THREE.Points>(null!);

    const sphere = useMemo(() => {
        return random.inSphere(new Float32Array(3000), { radius: 1.5 }) as Float32Array;
    }, []);

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 35;
            ref.current.rotation.y -= delta / 45;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    opacity={0.4}
                />
            </Points>
        </group>
    );
};

const Background3D: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 bg-black">
            <Canvas camera={{ position: [0, 0, 1.5] }}>
                <color attach="background" args={['#000000']} />
                <ParticleField />
                <GlowingObjects />
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />
                <fog attach="fog" args={['#000000', 1, 3.5]} />
            </Canvas>
        </div>
    );
};

export default Background3D;
