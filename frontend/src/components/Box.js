import React, { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import useMousePosition from "../hooks/useMousePosition"
import create from "zustand"

const BOX_COUNT = 6

const boxIds = new Array(BOX_COUNT).fill().map((_, idx) => idx)
const boxIdsCoordinates = boxIds.reduce(
  (acc, id) => ({
    ...acc,
    [id]: [Math.random(), Math.random(), Math.random()]
  }),
  0
)

export const useStore = create(set => ({
  boxes: boxIds,
  coordinates: boxIdsCoordinates,

  mutate: () => {
    set(state => {
      const coordinates = {}
      for (let i = 0; i < state.boxes.length; i++) {
        const id = state.boxes[i]
        const [x, y, z] = state.coordinates[id]
        coordinates[id] = [x + 0.00035, y + 0.00035, z + 0.00295]
      }
      return { ...state, coordinates }
    })
  }
}))

export function Box({ id, xMs, yMs, scrollY }) {
  const sizeFactor = 1.5
  const mesh = useRef()
  const coordinates = useRef([0, 0, 1])
  useEffect(() =>
    useStore.subscribe(
      xyz => (coordinates.current = xyz),
      state => state.coordinates[id]
    )
  )

  useFrame(
    () => mesh.current && mesh.current.rotation.set(...coordinates.current)
  )

  useFrame(() => {
    mesh.current.rotation.x += xMs / 500
  })

  useFrame(() => {
    mesh.current.rotation.y += scrollY / 300
  })

  useFrame(() => {
    mesh.current.rotation.y += yMs / 500
  })
  return (
    <mesh ref={mesh} style={{ opacity: 0.2 }}>
      <icosahedronBufferGeometry attach='geometry' args={[1.5, 0]} />
      <meshNormalMaterial attach='material' />
      {/* <meshStandardMaterial attach='material' color={"white"} /> */}
      <directionalLight color='#310fd9' intensity={3} position={[2, 2, 2]} />
      {/* <directionalLight color='blue' intensity={0.8} position={[yMs, xMs, 1]} /> */}
    </mesh>
  )
}
