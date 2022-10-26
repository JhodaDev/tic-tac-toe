import { useEffect, useState } from 'react'
import { useChangeTurn } from './useChangeTurn'
import { useValidateWinner } from './useValidateWinner'

export const useBoard = ({ rows, cols }) => {
  const [countTurn, setCountTurn] = useState(0)

  const [board, setBoard] = useState(() => {
    return Array(rows).fill().map(() => Array(cols).fill(null))
  })

  const [turn, changeTurn] = useChangeTurn()
  const [checkWinner, isWinner] = useValidateWinner(board, rows, cols)

  const changeCell = (row, col) => {
    setCountTurn(countTurn + 1)
    const newBoard = [...board]

    if (newBoard[row][col] !== null) return

    setBoard(() => {
      newBoard[row][col] = turn
      return newBoard
    })

    changeTurn()
  }

  useEffect(() => {
    if (countTurn > 4) {
      checkWinner()
    }
  }, [countTurn, isWinner])

  return [board, changeCell, turn, isWinner]
}
