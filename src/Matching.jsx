import React from 'react'

const Matching = (props) => {
  let { x, y, z } = props

  if (x === y && y === z) {
    return (
      <div>
        <h1>
          {x} {y} {z}
        </h1>
        <h1>This is Matching</h1>
        <hr />
      </div>
    )
  }
}

export default Matching
