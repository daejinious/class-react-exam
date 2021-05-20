import React, { useEffect, useReducer } from 'react'
import store from '../../common/store'
import { getNextFriend } from '../../common/mockData'
import { addFriend } from '../state'
import FriendList from '../component/FriendList'

function FriendMain(props) {
  const [, forceUpdate] = useReducer((v) => v + 1, 0)
  useEffect(() => {
    let prevFriends = store.getState().friend.friends
    const unsubscribe = store.subscribe(() => {
      const friends = store.getState().friend.friends

      if (prevFriends !== friends) {
        forceUpdate()
      }
    })
    return () => unsubscribe()
  })
  function onAdd() {
    const friend = getNextFriend()
    store.dispatch(addFriend(friend))
  }

  console.log('FriendMain Render')
  const friends = store.getState().friend.friends

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  )
}

export default FriendMain
