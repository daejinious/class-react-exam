import React, { useEffect, useState } from 'react'

export default function App() {
  return (
    <div>
      실적 리액트
      <Profile />
    </div>
  )
}

function Profile({ userId }) {
  const [user, setUser] = useState()
  const [needDetail, setNeedDetail] = useState(false)

  useEffect(() => {
    fetchUser(userId, needDetail).then((data) => setUser(data))
  }, [userId, needDetail])
  console.log(user, setNeedDetail)
  return null
}

function fetchUser(userId, needDetail) {}
