/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 3d_room.glb --transform 
Files: 3d_room.glb [35.9MB] > E:\Brocamp\Projects\My-Portfolio\public\models\3d_room-transformed.glb [3.25MB] (91%)
Author: Shabeer Ahmed (https://sketchfab.com/shabeer113ahmed)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/3d-gaming-room-with-gaming-setup-384791b92d55408baa9361628744c3f4
Title: 3d Gaming Room with Gaming Setup
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function RoomModel(props) {
  const { nodes, materials } = useGLTF('/models/3d_room-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_9.geometry} material={materials.PaletteMaterial001} position={[-0.453, 2.523, -3.1]} rotation={[0, 0.303, 0]} scale={0.032} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.PaletteMaterial002} position={[-4.378, 0.412, -4.378]} scale={[0.19, 3.985, 0.19]} />
      <mesh geometry={nodes.Object_54.geometry} material={materials['Material.007']} position={[-4.198, 2.456, -2.386]} rotation={[0, -Math.PI / 2, 0]} scale={[1, 1, 2.57]} />
      <mesh geometry={nodes.Object_60.geometry} material={materials['Material.009']} position={[-1.688, 2.565, -3.051]} rotation={[-Math.PI / 2, 0, 0]} scale={0.4} />
      <mesh geometry={nodes.Object_66.geometry} material={materials.phong1} position={[-1.41, 2.469, -4.016]} scale={0.242} />
      <mesh geometry={nodes.Object_68.geometry} material={materials['Material.017']} position={[-1.41, 2.469, -4.016]} scale={0.242} />
      <mesh geometry={nodes.Object_75.geometry} material={materials.aiStandardSurface3SG} position={[-0.144, 5.957, -3.997]} scale={0.341} />
      <mesh geometry={nodes.Object_77.geometry} material={materials.aiStandardSurface2SG} position={[-0.144, 5.957, -3.997]} scale={0.341} />
      <mesh geometry={nodes.Object_78.geometry} material={materials.aiStandardSurface1SG} position={[-0.144, 5.957, -3.997]} scale={0.341} />
      <mesh geometry={nodes.Object_101.geometry} material={materials.Lens} position={[-1.51, 5.632, -3.955]} scale={0.043} />
      <mesh geometry={nodes.Object_103.geometry} material={materials.Dial} position={[-1.51, 5.632, -3.955]} scale={0.043} />
      <mesh geometry={nodes.Object_105.geometry} material={materials.Lens_Outer} position={[-1.51, 5.632, -3.955]} scale={0.043} />
      <mesh geometry={nodes.Object_129.geometry} material={materials.PaletteMaterial003} position={[1.655, 2.506, -3.442]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Object_130.geometry} material={materials.PaletteMaterial004} position={[1.655, 2.506, -3.442]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Object_132.geometry} material={materials.Material_26} position={[1.655, 2.506, -3.442]} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
      <mesh geometry={nodes.Object_140.geometry} material={materials.Plastic} position={[-3.527, 1.608, -2.039]} rotation={[-Math.PI, 0.622, -Math.PI]} scale={0.032} />
      <mesh geometry={nodes.Object_141.geometry} material={materials.ShinyPlastic} position={[-3.527, 1.608, -2.039]} rotation={[-Math.PI, 0.622, -Math.PI]} scale={0.032} />
      <mesh geometry={nodes.Object_142.geometry} material={materials.LeatherCougar2} position={[-3.527, 1.608, -2.039]} rotation={[-Math.PI, 0.622, -Math.PI]} scale={0.032} />
      <mesh geometry={nodes.Object_143.geometry} material={materials.LeatherCougar} position={[-3.527, 1.608, -2.039]} rotation={[-Math.PI, 0.622, -Math.PI]} scale={0.032} />
      <mesh geometry={nodes.Object_145.geometry} material={materials.Leather} position={[-3.527, 1.608, -2.039]} rotation={[-Math.PI, 0.622, -Math.PI]} scale={0.032} />
      <mesh geometry={nodes.Object_147.geometry} material={materials['Leather.001']} position={[-3.527, 1.608, -2.039]} rotation={[-Math.PI, 0.622, -Math.PI]} scale={0.032} />
      <mesh geometry={nodes.Object_148.geometry} material={materials['Leather.002']} position={[-3.527, 1.608, -2.039]} rotation={[-Math.PI, 0.622, -Math.PI]} scale={0.032} />
      <mesh geometry={nodes.Object_149.geometry} material={materials.Belt} position={[-3.527, 1.608, -2.039]} rotation={[-Math.PI, 0.622, -Math.PI]} scale={0.032} />
    </group>
  )
}

useGLTF.preload('/models/3d_room-transformed.glb')
