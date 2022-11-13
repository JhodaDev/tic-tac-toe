import { useDispatch, useSelector } from 'react-redux'
import { addWin } from '../redux/slices/playerSlice'

export const useValidateWinner = (rows, cols, countTourn) => {
  const dispatch = useDispatch()
  const { turn } = useSelector((state) => state.player)
  const { board } = useSelector((state) => state)

  const checkWinner = () => {
    checkRows() || checkCols() || checkDiagonals() || checkTie()
  }

  const checkRows = () => {
    for (let i = 0; i < rows; i++) {
      const row = board.board[i]
      if (row.every(cell => cell === row[0] && cell !== null)) {
        const winner = turn === 0 ? 'x' : 'o'
        dispatch(addWin(winner))
        countTourn(0)
      }
    }
  }

  const checkCols = () => {
    for (let i = 0; i < cols; i++) {
      const col = board.board.map(row => row[i])
      if (col.every(cell => cell === col[0] && cell !== null)) {
        console.log('cols')
        const winner = turn === 0 ? 'x' : 'o'
        dispatch(addWin(winner))
        countTourn(0)
      }
    }
  }

  const checkDiagonals = () => {
    const diagonal1 = board.board.map((row, i) => row[i])
    const diagonal2 = board.board.map((row, i) => row[cols - i - 1])

    if (diagonal1.every(cell => cell === diagonal1[0] && cell !== null)) {
      const winner = turn === 0 ? 'x' : 'o'
      dispatch(addWin(winner))
      countTourn(0)
    }
    if (diagonal2.every(cell => cell === diagonal2[0] && cell !== null)) {
      const winner = turn === 0 ? 'x' : 'o'
      dispatch(addWin(winner))
      countTourn(0)
    }
  }

  const checkTie = () => {
    const tie = board.board.every(row => row.every(cell => cell !== null))
    if (tie) {
      dispatch(addWin('tie'))
      countTourn(0)
    }
  }

  return [checkWinner]
}
