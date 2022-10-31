import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  board: Array(3).fill().map(() => Array(3).fill(null))
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    updateCell: (state, action) => {
      const { row, col, value } = action.payload
      if (state.board[row][col] !== null) return state
      state.board[row][col] = value
    },
    resetBoard: (state) => {
      state.board = initialState.board
    },
    resetAllBoard: (state) => {
      state = initialState
    }
  }
})

export const { updateCell, resetBoard, resetAllBoard } = boardSlice.actions
export default boardSlice.reducer
