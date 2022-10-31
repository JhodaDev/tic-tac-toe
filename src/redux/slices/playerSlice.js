import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  turn: 0,
  gamesWon: {
    x: 0,
    o: 0,
    tie: 0
  },
  winner: false,
  rounds: 0,
  mode: 'single'
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeTurn: (state) => {
      state.turn = state.turn === 0 ? 1 : 0
    },
    addWin: (state, action) => {
      state.gamesWon[action.payload]++
      state.winner = true
    },
    reset: (state) => {
      state.turn = 0
      state.winner = false
      state.rounds++
    },
    resetAllPlayer: (state) => {
      state.gamesWon.x = 0
      state.gamesWon.o = 0
      state.gamesWon.tie = 0
      state.rounds = 0
    }
  }
})

export const { changeTurn, addWin, reset, resetAllPlayer } = playerSlice.actions

export default playerSlice.reducer
