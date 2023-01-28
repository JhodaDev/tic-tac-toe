export const genRandomMove = (newBoard) => {
  const move = Math.floor(Math.random() * newBoard.length)

  if (newBoard[move]) {
    return genRandomMove(newBoard)
  }

  return {
    index: move
  }
}
