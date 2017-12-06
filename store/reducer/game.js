export const gameType = {
  NUMBER: 'NUMBER'
}

export const game = (state = {
  number: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
}, action) => {
  switch (action.type) {
    case gameType.NUMBER:
      return Object.assign({}, state, {
        number: action.payload
      })
    default:
      return state
  }
}