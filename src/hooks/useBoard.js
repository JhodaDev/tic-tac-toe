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

  const changeCell = (row, col) => {
    // validar el modo de juego si es single o cpu

    setCountTurn(countTurn + 1)
    dispatch(updateCell({ row, col, value: player.turn }))
    dispatch(changeTurn())
  }

  useEffect(() => {
    if (countTurn > 4) checkWinner()
  }, [countTurn])

  return [changeCell]
}
