import React, { useEffect, useState } from 'react'

export default function App() {
  return (
    <div>
      실적 리액트
      <SelectFruit />
    </div>
  )
}

function SelectFruit() {
  const [fruits, setFruits] = useState(['apple', 'banana', 'orange'])
  const [newFruit, setNewFruit] = useState([''])

  function addNewFruit() {
    // fruits.push(newFruit)
    setFruits([...fruits, newFruit])
    setNewFruit('')
  }

  return (
    <div>
      <Select options={fruits} />
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
      />
      <button onClick={addNewFruit}>추가하기</button>
    </div>
  )
}

const Select = React.memo(({ options }) => (
  <div>
    {options.map((item, index) => (
      <p key={index}>{item}</p>
    ))}
  </div>
))
