import { createSelector } from 'reselect'

const getFriends = (state) => state.friend.friends
export const getAgeLimit = (state) => state.friend.ageLimit
export const getShowLimit = (state) => state.friend.showLimit

export const getFriendsWithAgeLimit = createSelector(
  [getFriends, getAgeLimit],
  (friends, ageLimit) => friends.filter((item) => item.age <= ageLimit)
  // 전달 받은 매개변수가 변경되었을 때만 실행된다.
  // 값이 변경되지 않았다면 이전에 사용한 값을 그대로 사용한다.
)

export const getFriendsWithAgeShowLimit = createSelector(
  [getFriendsWithAgeLimit, getShowLimit],
  (friendsWithAgeLimit, showLimit) => friendsWithAgeLimit.slice(0, showLimit)
)
