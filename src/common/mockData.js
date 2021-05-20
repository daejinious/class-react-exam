const friends = [
  { id: 0, name: '호랑이', age: 15 },
  { id: 1, name: '고양이', age: 16 },
  { id: 2, name: '강아지', age: 17 },
  { id: 3, name: '말', age: 18 },
]

const timelines = [
  { id: 0, desc: '점심이 맛있었다', likes: 0 },
  { id: 1, desc: '나는 멋지다', likes: 10 },
  { id: 2, desc: '점심이 맛있었다2', likes: 150 },
  { id: 3, desc: '점심이 맛있었다3', likes: 60 },
]

function makeDataGenerator(items) {
  let itemIndex = 0
  return function getNextData() {
    const item = items[itemIndex % items.length]
    itemIndex += 1
    return { ...item, id: itemIndex }
  }
}

export const getNextFriend = makeDataGenerator(friends)
export const getNextTimeline = makeDataGenerator(timelines)
