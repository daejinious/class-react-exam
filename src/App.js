import React from 'react'
import TimelineMain from './timeline/container/TimelineMain'
import FriendMain from './friend/container/FriendMain'

export default function App() {
  return (
    <div>
      실전 리액트
      <FriendMain />
      <TimelineMain />
    </div>
  )
}
