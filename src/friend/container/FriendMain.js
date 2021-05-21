import React from 'react'
import { getNextFriend } from '../../common/mockData'
import { addFriend } from '../state'
import FriendList from '../component/FriendList'
import { useDispatch, useSelector } from 'react-redux'

function FriendMain(props) {
  const [friends] = useSelector((state) => [state.friend.friends])
  const dispatch = useDispatch()

  function onAdd() {
    const friend = getNextFriend()
    dispatch(addFriend(friend))
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  )
}

export default FriendMain
