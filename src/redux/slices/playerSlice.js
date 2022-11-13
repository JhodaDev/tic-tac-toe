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
  isCpu: {
    cpu: false,
    mode: 'easy'
  }
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
    },
    resetWinner: (state) => {
      state.winner = false
    },
    changeMode: (state, action) => {
      state.isCpu.cpu = action.payload.cpu
      state.isCpu.mode = action.payload.mode
    }
  }
})

export const { changeTurn, addWin, reset, resetAllPlayer, changeMode, resetWinner } =
  playerSlice.actions

export default playerSlice.reducer
