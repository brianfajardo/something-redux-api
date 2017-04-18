import { FETCH_USERS } from '../constants/actionTypes'

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
    console.log(action.payload.data)
      return [...state, ...action.payload.data]
    default:
      return state
  }
}