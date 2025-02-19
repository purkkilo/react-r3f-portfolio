import React, { useRef, useState } from 'react'
import { useFrame, extend } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { inSphere } from 'maath/random'

extend({ TextGeometry })

const STAR_AMOUNT = 10000 * 3

export const Stars = ({ ...props }) => {
  const ref = useRef()
  const [sphere] = useState(() => inSphere(new Float32Array(STAR_AMOUNT), { radius: 6 }))

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 60
    ref.current.rotation.y -= delta / 80
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]} {...props}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
