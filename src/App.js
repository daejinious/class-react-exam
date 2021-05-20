import React from 'react'
import produce from 'immer'

const prevState = {
  user: {
    name: 'mike',
    friends: [
      {
        name: 'jane',
        age: 23,
      },
      {
        name: 'jake',
        age: 24,
      },
    ],
  },
  products: [],
}

const nextState = produce(prevState, (draft) => {
  draft.user.friends[0].age = 33
})
console.log('prevState === nextState', prevState === nextState)
console.log(
  'prevState.user.friends[0] === nextState.user.friends[0]',
  prevState.user.friends[0] === nextState.user.friends[0]
)

console.log(
  'prevState.user.friends[1] === nextState.user.friends[1]',
  prevState.user.friends[1] === nextState.user.friends[1]
)

console.log(
  'prevState.products === nextState.products',
  prevState.products === nextState.products
)

function App() {
  return <div>실전 리액트</div>
}

export default App
