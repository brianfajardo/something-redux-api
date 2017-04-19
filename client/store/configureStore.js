import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../reducers'
import Async from '../middlewares/async'

const createStoreWithMiddleware = applyMiddleware(Async)(createStore)

const configureStore = initialState => {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}

export default configureStore