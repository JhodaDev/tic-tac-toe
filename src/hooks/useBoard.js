import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCell } from '../redux/slices/boardSlice'
import { changeTurn } from '../redux/slices/playerSlice'
import { useValidateWinner } from './useValidateWinner'

export const useBoard = ({ rows, cols }) => {
  const dispatch = useDispatch()
  const { player, board } = useSelector((state) => state)

  const [countTurn, setCountTurn] = useState(0)

  const [checkWinner] = useValidateWinner(rows, cols, setCountTurn)
  const [valueCpu, setValueCpu] = useState(null)

  const changeCell = (row, col) => {
    setCountTurn(countTurn + 1)
    dispatch(updateCell({ row, col, value: player.turn }))
  }

  const cpuMode = () => {
    const mode = player.isCpu.mode
    if (mode === 'easy') {
      const row = Math.floor(Math.random() * rows)
      const col = Math.floor(Math.random() * cols)

      if (!board.board.every((row) => row.every((cell) => cell !== null))) {
        if (board.board[row][col] === null) {
          setTimeout(() => {
            changeCell(row, col)
            setValueCpu({ x: row, y: col })
          }, 1000)
        } else {
          cpuMode()
        }
      }
    }
  }

  useEffect(() => {
    if (!player.winner) dispatch(changeTurn())
  }, [countTurn, player.winner])

  useEffect(() => {
    if (player.isCpu.cpu && player.turn === 1 && !player.winner) cpuMode()
  }, [player.turn, player.winner])

  useEffect(() => {
    if (!player.winner) {
      if (countTurn > 4) checkWinner()
    }
  }, [countTurn, player.winner])

  return [changeCell, valueCpu]
}
