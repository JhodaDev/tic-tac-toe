import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCell } from '../redux/slices/boardSlice'
import { changeTurn } from '../redux/slices/playerSlice'
// import { useChangeTurn } from './useChangeTurn'
import { useValidateWinner } from './useValidateWinner'

export const useBoard = ({ rows, cols }) => {
  const dispatch = useDispatch()
  const { player, board } = useSelector((state) => state)

  const [countTurn, setCountTurn] = useState(0)

  const [checkWinner] = useValidateWinner(board.board, rows, cols)
  const [valueCpu, setValueCpu] = useState(null)

  const changeCell = (row, col) => {
    setCountTurn(countTurn + 1)
    dispatch(updateCell({ row, col, value: player.turn }))
    dispatch(changeTurn())
  }

  const cpuMode = () => {
    const mode = player.isCpu.mode
    if (mode === 'easy') {
      const row = Math.floor(Math.random() * rows)
      const col = Math.floor(Math.random() * cols)

      if (!board.board.every(row => row.every(cell => cell !== null))) {
        if (board.board[row][col] === null) {
          // esperar 1 segundo para que el usuario vea la jugada del cpu
          setTimeout(() => {
            changeCell(row, col)
            setValueCpu({ x: row, y: col })
          }, 1000)
        } else {
          cpuMode()
        }
      }
    } else if (mode === 'hard') {
      // estudiar la mejor jugada para el cpu
      const bestMove = minimax(board.board, player.turn)
    }
  }

  const minimax = (board, player) => {
    const availableSpots = emptyIndexies(board)
  }

  const emptyIndexies = (board) => {
    return board.reduce((acc, row, i) => {
      row.forEach((cell, j) => {
        if (cell === null) {
          acc.push([i, j])
        }
      })

      return acc
    }, [])
  }

  useEffect(() => {
    if (player.isCpu.cpu && player.turn === 1) cpuMode()
  }, [player.turn])

  useEffect(() => {
    if (countTurn > 4) checkWinner()
  }, [countTurn])

  return [changeCell, valueCpu]
}
