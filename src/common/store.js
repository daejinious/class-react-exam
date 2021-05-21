import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import timelineReducer from '../timeline/state'
import friendReducer from '../friend/state'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import timelineSaga from '../timeline/state/saga'

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

function* rootSaga() {
  yield all([timelineSaga()])
}

sagaMiddleware.run(rootSaga)

export default store
