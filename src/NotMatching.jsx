import React from 'react'

const NotM = (props) => {
  let { x, y, z } = props
  if (x === y && y === z) {
    return (
      <div>
        <h1>
          {x} {y} {z}
        </h1>
        <h1>This is not Matching</h1>
        <hr />
      </div>
    )
  }
}

export default NotM
