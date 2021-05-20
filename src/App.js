import React from 'react'
import {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPage,
} from './timeline/state'
import { addFriend, removeFriend, editFriend } from './friend/state'
import store from './common/store'

store.dispatch(addTimeline({ id: 1, desc: '코딩은 절거워' }))
store.dispatch(addTimeline({ id: 2, desc: 'Redux 좋아' }))
store.dispatch(increaseNextPage())
store.dispatch(editTimeline({ id: 2, desc: 'redux 너무 좋아' }))
store.dispatch(removeTimeline({ id: 1, desc: '코딩은 절거워' }))

store.dispatch(addFriend({ id: 1, name: '김대진' }))
store.dispatch(addFriend({ id: 2, name: '호랑이' }))
store.dispatch(editFriend({ id: 1, name: '꾸꾸까까' }))
store.dispatch(removeFriend({ id: 1, name: '꾸꾸까까' }))

export default function App() {
  return <div>실전 리액트</div>
}
