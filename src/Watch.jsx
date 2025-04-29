import { useControls } from 'leva'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import React, { useEffect } from "react";

export default function Scene() {

    //MODEL LOAD 
   const gltf = useLoader(GLTFLoader, '/assets/rolex oyster perpetual.glb', (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/') // This should point to the DRACO decoder folder
    loader.setDRACOLoader(dracoLoader)
  })
 
    
   //CREATE UI CONTROLS
   const { sideStrap, caseBase, Maindial } = useControls('Customization', {
    sideStrap: {
        value: '#ebebeb',
        label: 'Side Strap'
      },
      caseBase: {
        value: '#ffffff',
        label: 'Case Base'
      },
      Maindial: {
          value: '#ffffff',
          label: 'Main Case'
      }
    })

   //Parts in actuall Model
   const side = gltf.scene.getObjectByName('SIDE_STRAP')
   const caseb = gltf.scene.getObjectByName('CASE')
   const mainc = gltf.scene.getObjectByName('MAIN_DIAL')

   useEffect(() => {
       if (side) side.material.color.set(sideStrap)
       if (caseb) caseb.material.color.set(caseBase)
       if (mainc) mainc.material.color.set(Maindial)
   }, [sideStrap, caseBase, side, caseb, Maindial, mainc])



  return (
     <>
     <primitive object={gltf.scene} />

    </>
  )
}
