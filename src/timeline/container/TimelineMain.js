import React, { useEffect, useReducer } from 'react'
import store from '../../common/store'
import { getNextTimeline } from '../../common/mockData'
import { addTimeline } from '../state'
import TimelineList from '../component/TimelineList'

function TimelineMain() {
  const [, forceUpdate] = useReducer((v) => v + 1, 0)
  useEffect(() => {
    /**
      store subscribe 동작 시 강제로 다른 store 값까지
     읽어들이고 있기 때문에 불필요한 rendering 발생

      */
    let prevTimelines = store.getState().timeline.timelines
    const unsubscribe = store.subscribe(() => {
      const timelines = store.getState().timeline.timelines
      if (prevTimelines !== timelines) {
        forceUpdate()
        prevTimelines = timelines
      }
    })
    return () => unsubscribe()
  }, [])

  function onAdd() {
    const timeline = getNextTimeline()
    store.dispatch(addTimeline(timeline))
  }
  console.log('TimelineMain render')
  const timelines = store.getState().timeline.timelines

  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} />
    </div>
  )
}

export default TimelineMain
