import { FETCH_USERS } from '../constants/actionTypes'

// Temporarily use dummy data
export const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: [
    { name: 'Brian' },
    { name: 'Tommy' },
    { name: 'Ali' }
  ],
})