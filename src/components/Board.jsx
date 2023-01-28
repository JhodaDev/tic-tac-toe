import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { toggleModal } from '../helpers/showModal'
import { useCpu } from '../hooks/useCpu'
import { useStore } from '../store/store'
import { Cell } from './Cell'

export const Board = () => {
  const { board, player } = useStore(state => state)
  const { bestMove, newBoard } = useCpu()

  useEffect(() => {
    if (bestMove && player.currentPlayer === 'O') {
      newBoard[bestMove.index] = player.currentPlayer
      board.setBoard(newBoard)
      player.setPlayer(player.currentPlayer === 'X' ? 'O' : 'X')
    }
  }, [bestMove])

  useEffect(() => {
    if (player.winners.O > 0 || player.winners.X > 0 || player.winners.tie > 0) {
      toggleModal('#modal-winner')
    }
  }, [player.winners])

  return (
    <motion.div animate={{ x: [80, 0], opacity: [0, 1] }} transition={{ duration: 1, ease: 'easeInOut' }} className='max-w-xs mx-auto w-full xl:max-w-md'>
        <div className='grid grid-cols-3 gap-4'>
          {
            board.board.map((row, rowIndex) => (
              <Cell key={rowIndex} row={row} index={rowIndex} />
            ))
          }
        </div>
        <motion.div animate={{ y: [250, 0] }} transition={{ duration: 1, ease: 'easeInOut' }} className='grid grid-cols-3 gap-x-4 mt-7'>
          <div className='w-full flex flex-col items-center bg-light-blue text-dark-navy py-1 xl:py-2 rounded-lg'>
            <span className='text-[14px]'>X (YOU)</span>
            <strong className='text-xl'>{player.winners.X}</strong>
          </div>
          <div className='w-full flex flex-col items-center bg-silver text-dark-navy py-1 xl:py-2 rounded-lg'>
            <span className='text-[14px]'>TIES</span>
            <strong className='text-xl'>{player.winners.tie}</strong>
          </div>
          <div className='w-full flex flex-col items-center bg-light-yellow text-dark-navy py-1 xl:py-2 rounded-lg'>
            <span className='text-[14px]'>O (CPU)</span>
            <strong className='text-xl'>{player.winners.O}</strong>
          </div>
        </motion.div>
      </motion.div>
  )
}
