import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../reducers'
import Async from '../middlewares/async'

const createStoreWithMiddleware = applyMiddleware(Async)(createStore)

export default (initialState) => {
  return createStoreWithMiddleware(rootReducer, initialState)
}