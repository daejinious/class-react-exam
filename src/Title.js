import React from 'react'

function Title({ title }) {
  console.log('Title Component Rendering')
  return <p>{title}</p>
}

export default React.memo(Title)
