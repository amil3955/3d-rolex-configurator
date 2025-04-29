import { Canvas } from '@react-three/fiber'
import { Stage, OrbitControls } from '@react-three/drei'
import Scene from './Watch.jsx'
import { useState } from 'react'
import './App.css'


export default function App() {
  return (
    <>
  <div className="app">
     <Canvas shadows camera={{ position:[17, 4.5, 55], fov: 5, near: 0.1, far: 100}}>
     <color attach="background" args={["#787878"]} />


       <Stage
        // preset="portrait"
        environment="sunset"
        intensity={5} 
        shadows="contact" 
        contactShadow
        adjustCamera = {true}
        directionalIntensity={5}
        >

       <Scene />
       </Stage> 
       <OrbitControls />
     </Canvas>
   </div>
   </>
  )
}