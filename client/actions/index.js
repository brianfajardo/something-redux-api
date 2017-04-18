import axios from 'axios'

import { FETCH_USERS } from '../constants/actionTypes'

export const fetchUsers = () => {
  // request is a pending Promise that is not yet resolved
  const request = axios.get('https://jsonplaceholder.typicode.com/users')

  return {
    type: FETCH_USERS,
    payload: request
  }
}