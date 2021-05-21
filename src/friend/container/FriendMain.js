import React from 'react'
import { getNextFriend } from '../../common/mockData'
import { addFriend, setAgeLimit, setShowLimit } from '../state'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import NumberSelect from '../component/NumberSelect'
import FriendList from '../component/FriendList'
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common'

function FriendMain() {
  const [ageLimit, showLimit, friendsWithAgeLimit, friendsWithAgeShowLimit] =
    useSelector((state) => {
      const { ageLimit, showLimit, friends } = state.friend
      const friendsWithAgeLimit = friends.filter((item) => item.age <= ageLimit)

      return [
        ageLimit,
        showLimit,
        friendsWithAgeLimit,
        friendsWithAgeLimit.slice(0, showLimit),
      ]
    }, shallowEqual)
  const dispatch = useDispatch()

  function onAdd() {
    const friend = getNextFriend()
    dispatch(addFriend(friend))
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        onChange={(v) => dispatch(setAgeLimit(v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={(v) => dispatch(setShowLimit(v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기 (연령 제한 적용)"
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  )
}

export default FriendMain

// filter option
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT]
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT]
