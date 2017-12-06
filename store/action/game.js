import {gameType} from '../reducer/game'

export function moveChange(value) {
  return { 
    type: gameType.NUMBER,
    payload: value 
  }
}