import React, { useState } from 'react'
import Title from './Title'

function App() {
  const [color, setColor] = useState('red')
  const [title, setTitle] = useState('red')
  const [state, setState] = useState(false)

  const setColorClick = () => {
    let currentColor = 'red'
    if (!state) {
      currentColor = 'blue'
    }
    setState(!state)
    setColor(currentColor)
    setTitle(currentColor)
  }

  return (
    <button style={{ backgroundColor: color }} onClick={setColorClick}>
      <Title title={title} />
    </button>
  )
}

export default App
