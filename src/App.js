import React from 'react'
import { applyMiddleware, createStore } from 'redux'

const delayAction = (store) => (next) => (action) => {
  const delay = action.meta?.delay // action.meta && action.meta.delay
  if (!delay) {
    return next(action)
  }

  const timeoutId = setTimeout(() => next(action), delay)
  return function cancel() {
    clearTimeout(timeoutId)
  }
}

const myReducer = (state = { name: 'mike' }, action) => {
  console.log('myReducer')
  if (action.type === 'someAction') {
    return { name: 'mike2' }
  }
  return state
}

const store = createStore(myReducer, applyMiddleware(delayAction))
store.dispatch({ type: 'someAction', meta: { delay: 3000 } })

export default function App() {
  return <div>실전 리액트</div>
}
