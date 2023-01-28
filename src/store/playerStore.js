export default function (set) {
  return ({
    currentPlayer: 'X',
    winners: {
      X: 0,
      O: 0,
      tie: 0
    },
    winner: null,
    setPlayer: (player) => {
      set((state) => ({
        player: {
          ...state.player,
          currentPlayer: player
        }
      }))
    },
    setWinner: (winner) => {
      set((state) => ({
        player: {
          ...state.player,
          winners: {
            ...state.player.winners,
            [winner]: state.player.winners[winner] + 1
          },
          winner
        }
      }))
    },
    setOnlyWinner: (winner) => {
      set((state) => ({
        player: {
          ...state.player,
          winner
        }
      }))
    },
    resetGame: () => {
      set(() => ({
        player: {
          currentPlayer: 'X',
          winner: null,
          winners: {
            X: 0,
            O: 0,
            tie: 0

          }
        }
      }))
    }
  })
}
