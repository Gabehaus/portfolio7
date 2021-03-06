import React, { useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import shallow from "zustand/shallow"
import Aos from "aos"
import { Box, useStore } from "./Box"
// import { BoxIpad } from "./BoxIpad"

// Auto-generated by gltfjsx

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    camera.position.z =
      window.innerWidth > 1600
        ? 3.1
        : window.innerWidth > 1040
        ? 3.6
        : window.innerWidth > 1010
        ? 4.2
        : window.innerWidth > 760
        ? 4.9
        : window.innerWidth > 580
        ? 4
        : 3.6
    camera.position.y = 0
  })

  return null
}

export default function ThreeD1({ x, y, scrollY }) {
  const [boxes, mutate] = useStore(
    state => [state.boxes, state.mutate],
    shallow
  )

  useEffect(() => {
    Aos.init({
      duration: 2000
    }) // initialize animate on scroll
  }, [])

  useEffect(() => {
    function animate() {
      mutate()
      requestAnimationFrame(animate)
    }
    animate()
  }, [mutate])

  return (
    <Canvas className='ThreeD1'>
      {boxes.map(id => (
        <Box key={id} id={id} xMs={x} yMs={y} scrollY={scrollY} color='red' />
      ))}
      <Dolly />
    </Canvas>
  )
}
