import { useState } from 'react'
import { checkWinner } from '../helpers/checkWinner'

const scores = {
  X: -10,
  O: 10,
  tie: 0
}

export const useMinimax = () => {
  const [value, setValue] = useState({})

  const minimax = (newBoard, player) => {
    const winner = checkWinner(newBoard)
    if (winner) {
      return scores[winner]
    }

    const opponent = player === 'X' ? 'O' : 'X'
    const opponentWinningMove = checkOpponentWinningMove(newBoard, opponent)
    if (opponentWinningMove) {
      return {
        index: opponentWinningMove
      }
    }
    const moves = []

    for (let i = 0; i < newBoard.length; i++) {
      if (!newBoard[i]) {
        newBoard[i] = player
        let score
        if (player === 'O') {
          score = minimax(newBoard, 'X')
        } else {
          score = minimax(newBoard, 'O')
        }
        newBoard[i] = null
        moves.push({
          index: i,
          score
        })
      }
    }

    let bestMove
    if (player === 'O') {
      let bestScore = -Infinity
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score
          bestMove = i
        }
      }
    } else {
      let bestScore = Infinity
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score
          bestMove = i
        }
      }
    }

    return moves[bestMove]
  }

  const checkOpponentWinningMove = (newBoard, opponent) => {
    for (let i = 0; i < newBoard.length; i++) {
      if (!newBoard[i]) {
        newBoard[i] = opponent
        if (checkWinner(newBoard) === opponent) {
          newBoard[i] = null
          return i
        }
        newBoard[i] = null
      }
    }
    return null
  }

  const changeValue = (value) => setValue(value)

  return [value, changeValue, minimax]
}
