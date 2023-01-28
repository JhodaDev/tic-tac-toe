import { useEffect } from 'react'
import { checkWinner } from '../helpers/checkWinner'
import { genRandomMove } from '../helpers/randomMode'
import { useStore } from '../store/store'
import { useMinimax } from './useMinimax'

export const useCpu = () => {
  const { board, player } = useStore(state => state)
  const [bestMove, setBestValue, minimax] = useMinimax()

  useEffect(() => {
    if (board.mode === 'player') {
      const winner = checkWinner(board.board)
      if (winner) player.setWinner(winner)
    } else {
      const winner = checkWinner(board.board)
      if (winner) return player.setWinner(winner)

      if (player.currentPlayer === 'O') {
        const isEmpty = board.board.includes(null)
        if (!isEmpty) return

        const newBoard = [...board.board]
        const bestMove = minimax(newBoard, 'O')
        if (!bestMove) {
          setBestValue(genRandomMove(newBoard))
        } else {
          setBestValue(bestMove)
        }
      }
    }
  }, [player.currentPlayer])

  return { bestMove, newBoard: [...board.board] }
}
