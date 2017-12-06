export const gameType = {
  NUMBER: 'NUMBER'
}

const state = {
  number: [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]
}

export const game = (state, action) => {
  switch (action.type) {
    case gameType.NUMBER:
      return Object.assign({}, state, {
        hotProducts: action.payload
      })
  }
}