import { useBoard } from '../../hooks/useBoard'
import { WinnerModal } from '../Modal/WinnerModal'
import { Cell } from './Cell'

export const Board = ({ rows, cols }) => {
  const [board, changeCell, turn, isWinner] = useBoard({ rows, cols })

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {board.map((row, rowIndex) => {
          return row.map((col, colIndex) => {
            return (
              <Cell key={`${rowIndex}-${colIndex}`} turn={turn} update={changeCell} value={col} coordinates={{ x: rowIndex, y: colIndex }} />
            )
          })
        }
        )}
      </div>
      {
        isWinner && (
          <WinnerModal />
        )
      }
    </>
  )
}
