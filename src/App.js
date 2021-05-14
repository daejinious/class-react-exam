import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const onClick = () => {
    setCount(count + 1)
    setCount(count + 1)
  }
  /*
    useState => 비동기이며 배치로 동작하기 때문에
    위 동작은 처리 되지 않는다.
    이를 가능하게 하려면 아래와 같이 작성한다.
   */

  const funcClick = () => {
    setCount((v) => v + 1)
    setCount((v) => v + 1)
  }

  console.log('render called')

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
      <button onClick={funcClick}>증가</button>
    </div>
  )
}

export default App
