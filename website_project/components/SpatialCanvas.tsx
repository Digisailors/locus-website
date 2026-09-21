import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Grid, Box, Sphere } from '@react-three/drei'
import * as THREE from 'three'

// Floor Plan Component
function FloorPlan() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  // Create wireframe floor
  const gridLines = useMemo(() => {
    const lines = []
    for (let i = -10; i <= 10; i += 2) {
      lines.push(
        <line key={`h-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([-10, 0, i, 10, 0, i])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#0099FF" opacity={0.3} transparent />
        </line>,
        <line key={`v-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([i, 0, -10, i, 0, 10])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#0099FF" opacity={0.3} transparent />
        </line>
      )
    }
    return lines
  }, [])

  return (
    <group>
      {gridLines}
    </group>
  )
}

// Floating Data Points (representing trackers/assets)
function DataPoints() {
  const pointsRef = useRef<THREE.Group>(null)
  
  const points = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 16,
      y: Math.random() * 3 + 1,
      z: (Math.random() - 0.5) * 16,
      color: Math.random() > 0.5 ? '#0099FF' : '#1E8E3E',
      size: Math.random() * 0.3 + 0.2,
    }))
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={pointsRef}>
      {points.map((point) => (
        <mesh key={point.id} position={[point.x, point.y, point.z]}>
          <sphereGeometry args={[point.size, 16, 16]} />
          <meshStandardMaterial 
            color={point.color} 
            emissive={point.color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  )
}

// Connection Lines between data points
function ConnectionLines() {
  const lines = useMemo(() => {
    const connections = [
      { start: [-5, 2, -5], end: [0, 3, 0], color: '#0099FF' },
      { start: [2, 1, -3], end: [5, 2, 2], color: '#1E8E3E' },
      { start: [-3, 2.5, 4], end: [1, 1.5, 5], color: '#0099FF' },
      { start: [4, 3, -2], end: [-2, 2, 3], color: '#F9AB00' },
    ]
    return connections
  }, [])

  return (
    <group>
      {lines.map((line, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                ...line.start,
                ...line.end
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color={line.color} 
            opacity={0.5} 
            transparent 
            linewidth={2}
          />
        </line>
      ))}
    </group>
  )
}

// Geofence Zones
function GeofenceZones() {
  return (
    <group>
      {/* Zone 1 - Cyan safety zone */}
      <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3, 4, 64]} />
        <meshBasicMaterial 
          color="#0099FF" 
          transparent 
          opacity={0.2} 
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Zone 2 - Warning zone */}
      <mesh position={[4, 0.1, -4]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2, 2.5, 64]} />
        <meshBasicMaterial 
          color="#F9AB00" 
          transparent 
          opacity={0.2} 
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Zone 3 - Restricted zone */}
      <mesh position={[-5, 0.1, 3]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 2, 64]} />
        <meshBasicMaterial 
          color="#D93025" 
          transparent 
          opacity={0.2} 
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

// Building outline
function BuildingOutline() {
  return (
    <group>
      {/* Main building block */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[8, 2, 8]} />
        <meshStandardMaterial 
          color="#001F5C" 
          transparent 
          opacity={0.1}
          wireframe
        />
      </mesh>
      
      {/* Wing 1 */}
      <mesh position={[-8, 1, 2]}>
        <boxGeometry args={[6, 1.5, 4]} />
        <meshStandardMaterial 
          color="#001F5C" 
          transparent 
          opacity={0.08}
          wireframe
        />
      </mesh>
      
      {/* Wing 2 */}
      <mesh position={[7, 0.75, -3]}>
        <boxGeometry args={[4, 1.5, 6]} />
        <meshStandardMaterial 
          color="#001F5C" 
          transparent 
          opacity={0.08}
          wireframe
        />
      </mesh>
    </group>
  )
}

// Main Scene
function Scene() {
  return (
    <>
      <color attach="background" args={['#F4F6F9']} />
      <fog attach="fog" args={['#F4F6F9', 10, 30]} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#0099FF" />
      
      <Grid 
        args={[20, 20]} 
        cellSize={2} 
        cellThickness={0.5} 
        cellColor="#E8EAED"
        sectionSize={10}
        sectionThickness={1}
        sectionColor="#0099FF"
        fadeDistance={25}
        fadeStrength={1}
        followCamera={false}
        infiniteGrid={false}
        position={[0, -0.1, 0]}
      />
      
      <FloorPlan />
      <BuildingOutline />
      <DataPoints />
      <ConnectionLines />
      <GeofenceZones />
      
      <OrbitControls 
        enablePan={true} 
        enableZoom={true} 
        enableRotate={true}
        maxDistance={20}
        minDistance={5}
        target={[0, 2, 0]}
      />
    </>
  )
}

export default function SpatialCanvas() {
  return (
    <div className="hero-canvas">
      <Canvas
        camera={{ position: [15, 10, 15], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}