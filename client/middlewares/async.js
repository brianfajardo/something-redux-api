// This file returns three functions.
// Invoking `next` sends the action to the next middleware
// in the stack, or, if there are no more middlewares, forward to reducers.

export default ({ dispatch }) => {
  return next => action => {
    console.log(action)

    next(action)
  }
}

// ES5 equivalent:
// export default function ({ dispatch }) {
//   return function (next) {
//     return function (action) {
//       console.log(action)
//       next(action)
//     }
//   }
// }