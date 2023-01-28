import PropTypes from 'prop-types'
import { useStore } from '../store/store'
import { IconO } from './Icons/IconO'
import { IconOOutline } from './Icons/IconOOutline'
import { IconX } from './Icons/IconX'
import { IconXOutline } from './Icons/IconXOutline'

export const Cell = ({ row, index }) => {
  const { player, board } = useStore(state => state)

  const getIcon = () => {
    if (!row || row === '') {
      return player.currentPlayer === 'X' ? <IconXOutline /> : <IconOOutline />
    }

    return row === 'X' ? <IconX /> : <IconO />
  }

  const handleChangeTurn = () => {
    if (row) return
    player.setPlayer(player.currentPlayer === 'X' ? 'O' : 'X')

    const newBoard = [...board.board]
    newBoard[index] = player.currentPlayer

    board.setBoard(newBoard)
  }

  return (
        <div className='w-full rounded-lg shadow-cell h-[95px] lg:h-[140px] flex justify-center items-center bg-semi-dark-navy cursor-pointer' onClick={handleChangeTurn}>
            <div className={`w-12 lg:w-16 mx-auto transition-all ${!row ? 'opacity-0 hover:opacity-100' : row === 'X' ? 'text-light-blue' : 'text-light-yellow'}`}>
                {getIcon()}
            </div>
        </div>
  )
}

Cell.propTypes = {
  row: PropTypes.string,
  index: PropTypes.number
}
