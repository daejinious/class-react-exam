import React, { createContext, useContext } from 'react'

const UserContext = createContext('unknown')

export default function App() {
  return (
    <div>
      <UserContext.Provider value="jane">
        <Profile />
      </UserContext.Provider>
    </div>
  )
}

function Profile() {
  return (
    <div>
      <Greeting />
    </div>
  )
}

function Greeting() {
  const username = useContext(UserContext)
  return <p>{`${username}님 안녕하세요`}</p>
}
