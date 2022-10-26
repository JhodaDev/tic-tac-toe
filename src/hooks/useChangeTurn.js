import { useState } from 'react'

export const useChangeTurn = () => {
  const [turn, setTurn] = useState(0)

  const changeTurn = () => {
    setTurn((turn) => {
      return turn === 0 ? 1 : 0
    })
  }

  return [turn, changeTurn]
}
