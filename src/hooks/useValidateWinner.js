import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWin } from '../redux/slices/playerSlice'

export const useValidateWinner = (board, rows, cols) => {
  const dispatch = useDispatch()
  const { turn } = useSelector((state) => state.player)
  const [isWinner, setIsWinner] = useState(false)

  const checkWinner = () => {
    checkRows() || checkCols() || checkDiagonals() || checkTie()
  }

  const checkRows = () => {
    for (let i = 0; i < rows; i++) {
      const row = board[i]
      if (row.every(cell => cell === row[0] && cell !== null)) {
        const winner = turn === 0 ? 'o' : 'x'
        dispatch(addWin(winner))
        setIsWinner(true)
      }
    }
  }

  const checkCols = () => {
    for (let i = 0; i < cols; i++) {
      const col = board.map(row => row[i])
      if (col.every(cell => cell === col[0] && cell !== null)) {
        const winner = turn === 0 ? 'o' : 'x'
        dispatch(addWin(winner))
        setIsWinner(true)
      }
    }
  }

  const checkDiagonals = () => {
    const diagonal1 = board.map((row, i) => row[i])
    const diagonal2 = board.map((row, i) => row[cols - i - 1])

    if (diagonal1.every(cell => cell === diagonal1[0] && cell !== null)) {
      const winner = turn === 0 ? 'o' : 'x'
      dispatch(addWin(winner))
      setIsWinner(true)
    }
    if (diagonal2.every(cell => cell === diagonal2[0] && cell !== null)) {
      const winner = turn === 0 ? 'o' : 'x'
      dispatch(addWin(winner))
      setIsWinner(true)
    }
  }

  const checkTie = () => {
    const tie = board.every(row => row.every(cell => cell !== null))
    if (tie) {
      dispatch(addWin('tie'))
      setIsWinner(true)
    }
  }

  return [checkWinner, isWinner]
}
