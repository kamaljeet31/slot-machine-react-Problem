import React from 'react'
import Matching from './Matching'
import NotM from './NotMatching'

const SlotM = (props) => {
  // let x = '😄'
  // let y = '😄'
  // let z = '😂'

  const { x, y, z } = props
  if (x === y && y === z) {
    return <Matching />
  } else {
    return <NotM />
  }

  // x === y && y === z ? <Matching /> : <NotM />
}

export default SlotM
