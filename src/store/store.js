import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import playerStore from './playerStore'
import boardStore from './boardStore'

export const useStore = create(devtools((set) => ({
  player: playerStore(set),
  board: boardStore(set)
})))
