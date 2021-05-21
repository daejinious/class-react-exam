import React from 'react'
import TimelineMain from './timeline/container/TimelineMain'
import FriendMain from './friend/container/FriendMain'
import { Provider } from 'react-redux'
import store from './common/store'

export default function App() {
  return (
    <Provider store={store}>
      <div>
        실전 리액트
        <FriendMain />
        <TimelineMain />
      </div>
    </Provider>
  )
}
