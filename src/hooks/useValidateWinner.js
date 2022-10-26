import { useState } from 'react'

export const useValidateWinner = (board, rows, cols) => {
  const [isWinner, setIsWinner] = useState(false)

  const checkWinner = () => {
    checkRows() || checkCols() || checkDiagonals()
  }

  const checkRows = () => {
    // metodo para verificar las filas
    for (let i = 0; i < rows; i++) {
      const row = board[i]
      if (row.every(cell => cell === row[0] && cell !== null)) setIsWinner(true)
    }
  }

  const checkCols = () => {
    // validar si hay un ganador en las columnas
    for (let i = 0; i < cols; i++) {
      const col = board.map(row => row[i])
      if (col.every(cell => cell === col[0] && cell !== null)) setIsWinner(true)
    }
  }

  const checkDiagonals = () => {
    // obtener las diagonales
    const diagonal1 = board.map((row, i) => row[i])
    const diagonal2 = board.map((row, i) => row[cols - i - 1])

    if (diagonal1.every(cell => cell === diagonal1[0] && cell !== null)) setIsWinner(true)
    if (diagonal2.every(cell => cell === diagonal2[0] && cell !== null)) setIsWinner(true)
  }

  return [checkWinner, isWinner]
}
