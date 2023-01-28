import { useStore } from '../store/store'
import { IconO } from './Icons/IconO'
import { IconX } from './Icons/IconX'
import { Restart } from './Icons/Restart'

export const Header = () => {
  const { player, board } = useStore(state => state)

  const handleRestart = () => {
    const board2 = Array(9).fill(null)
    player.setPlayer('X')
    board.setBoard(board2)
  }

  return (
        <div className='max-w-xs mx-auto xl:max-w-md h-16 w-full'>
            <div className='flex justify-between items-center'>
                <div className='w-16'>
                    <img src='/images/logo.svg' />
                </div>
                <div className='text-silver flex items-center gap-2 font-bold bg-semi-dark-navy px-3 py-2 rounded-lg shadow-dark-blue'>
                    <div className='w-5'>
                        {
                            player.currentPlayer === 'X' ? <IconX /> : <IconO />
                        }
                    </div>
                    <span className='text-[14px]'>TURN</span>
                </div>
                <div className='bg-silver p-2 rounded-lg shadow-gray' onClick={handleRestart}>
                    <div className='w-4'>
                        <Restart />
                    </div>
                </div>
            </div>
        </div>
  )
}
