import { useSelector } from 'react-redux'
import { showModal } from '../../helpers/main'
import { Circle } from '../Icons/Circle'
import { Close } from '../Icons/Close'

export const Header = () => {
  const { turn } = useSelector(state => state.player)

  const handleReset = () => {
    showModal()
  }

  return (
        <div className='grid grid-cols-3 justify-between w-full mb-5'>
            <div className='flex w-16 gap-2'>
                <Close fill="#31C3BD" />
                <Circle fill="#F2B137" />
            </div>
            <div className='flex items-center bg-cells justify-center gap-2 rounded-lg py-2'>
                <div className='w-7'>
                    {
                        turn === 0 ? <Close fill="#31C3BD" /> : <Circle fill="#F2B137" />
                    }
                </div>
                <p className='text-gray font-medium'>TURN</p>
            </div>
            <div className='flex justify-end'>
                <button className='bg-select py-2 px-2 rounded-lg' onClick={handleReset}>
                    <img src='/icon-restart.52330686.svg' alt='reset.svg' />
                </button>
            </div>
        </div>
  )
}
