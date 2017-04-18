// This file returns three functions.
// Invoking `next` sends the action to the next middleware
// in the stack, or, if there are no more middlewares, forward to reducers.

export default ({ dispatch }) => {
  return next => action => {
    // If action does not have a payload or a .then property,
    // this middleware won't care about it
    if (!action.payload || !action.payload.then) {
      return next(action)
    }

    // Resolving payload Promise
    action.payload
      .then(res => {
        // Create a new action with the old type,
        // but replace the Promise with the response data
        const newAction = { ...action, payload: res }
        // Dispatch newAction to the top of the middleware stack.
        // Since we've resolved this Promise, it will not be changed
        // again by this middleware (above catch case)
        dispatch(newAction)
      })
  }
}