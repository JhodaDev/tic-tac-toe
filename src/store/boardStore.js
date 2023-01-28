export default function (set) {
  return ({
    board: Array(9).fill(null),
    mode: 'player',
    setBoard: (board) => {
      set((state) => ({
        board: {
          ...state.board,
          board
        }
      }))
    },
    setMode: (mode) => {
      set((state) => ({
        board: {
          ...state.board,
          mode
        }
      }))
    },
    resetGame: () => {
      set(() => ({
        board: {
          board: Array(9).fill(null),
          mode: 'player'
        }
      }))
    }
  })
}
