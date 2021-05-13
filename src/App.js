import React, { useState } from 'react'
import Title from './Title'

function App() {
  const [color, setColor] = useState('red')
  const [title, setTitle] = useState('red')
  const [state, setState] = useState(false)
  const [count, setCount] = useState(0)

  const setColorClick = () => {
    let currentColor = 'red'
    if (!state) {
      currentColor = 'blue'
    }
    setState(!state)
    setColor(currentColor)
    setTitle(currentColor)
  }

  const onClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <button style={{ backgroundColor: color }} onClick={setColorClick}>
        <Title title={title} />
      </button>
      <button onClick={onClick}>클릭</button>
    </div>
  )
}

export default App
