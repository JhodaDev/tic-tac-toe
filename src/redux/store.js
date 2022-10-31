import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './slices/playerSlice'
import boardReducer from './slices/boardSlice'

export const store = configureStore({
  reducer: {
    player: playerReducer,
    board: boardReducer
  },
  devTools: true
})
