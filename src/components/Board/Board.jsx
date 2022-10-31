import { useSelector } from 'react-redux'
import { useBoard } from '../../hooks/useBoard'
import { WinnerModal } from '../Modal/WinnerModal'
import { Cell } from './Cell'
import { Results } from './Results'

export const Board = ({ rows, cols }) => {
  const { player, board } = useSelector(state => state)
  const [changeCell] = useBoard({ rows, cols })

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {board.board.map((row, rowIndex) => {
          return row.map((col, colIndex) => {
            return (
              <Cell key={`${rowIndex}-${colIndex}`} update={changeCell} round={player.rounds} turn={player.turn} value={col} coordinates={{ x: rowIndex, y: colIndex }} />
            )
          })
        }
        )}
      </div>
      <Results player={player} />
      {
        player.winner && (
          <WinnerModal />
        )
      }
    </>
  )
}
