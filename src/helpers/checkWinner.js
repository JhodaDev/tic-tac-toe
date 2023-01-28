export const checkWinner = (board) => {
  // check rows
  for (let i = 0; i < 9; i += 3) {
    if (board[i] === board[i + 1] && board[i] === board[i + 2]) {
      return board[i]
    }
  }

  // check columns
  for (let i = 0; i < 3; i++) {
    if (board[i] === board[i + 3] && board[i] === board[i + 6]) {
      return board[i]
    }
  }

  // check diagonals
  if (board[0] === board[4] && board[0] === board[8]) {
    return board[0]
  }
  if (board[2] === board[4] && board[2] === board[6]) {
    return board[2]
  }

  const isTie = board.every((row) => row !== null && row !== undefined && row !== '')
  if (isTie) {
    return 'tie'
  }
}
