import React from 'react'
import SlotM from './SlotMach'

const App = () => {
  return (
    <div>
      <h1 className='heading-style'>
        🎰 Welcome to
        <span style={{ fontWeight: 'bold' }}>Slot machine game</span>
        🎰
      </h1>
      <div className='slot-machine'>
        <SlotM x='😄' y='😄' z='😄' />
        <SlotM x='😄' y='😆' z='😄' />
        <SlotM x='🍎' y='🍌' z='🍎' />
        <SlotM x='😄' y='😄' z='😄' />
        <SlotM x='😄' y='😄' z='🎅' />
      </div>
    </div>
  )
}

export default App
