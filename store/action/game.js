import gameType from '../reducer/game'

export function moveChange(text) {
  return { 
    type: gameType.NUMBER,
    payload: text 
  }
}