import { useDispatch, useSelector } from 'react-redux'
import { resetBoard } from '../../redux/slices/boardSlice'
import { reset } from '../../redux/slices/playerSlice'
import { Circle } from '../Icons/Circle'
import { Close } from '../Icons/Close'
import { ModalPortal } from './Modal'

export const WinnerModal = () => {
  const { turn } = useSelector(state => state.player)
  const dispatch = useDispatch()
  const handleReset = () => {
    dispatch(resetBoard())
    dispatch(reset())
  }

  return (
        <ModalPortal>
            <div className="absolute w-full h-screen bg-modal flex justify-center items-center top-0 left-0">
                <div className='modal'>
                    <span className='text-slate-300 font-bold'>YOU WON!</span>
                    <div className='flex mt-3 items-center'>
                        <div className='w-8 mr-3'>
                            {
                                turn === 1 ? <Close fill="#31C3BD" /> : <Circle fill="#F2B137" />
                            }
                        </div>
                        <h3 className={`text-3xl font-bold ${turn === 1 ? 'text-blue' : 'text-yellow'}`}>TAKES THE ROUND</h3>
                    </div>
                    <div className='flex mt-6'>
                        <button className='bg-primaryButton px-4 py-2 rounded-lg font-bold text-slate-700 mr-5'>QUIT</button>
                        <button className={`px-4 py-2 rounded-lg font-bold text-slate-700 ${turn === 1 ? 'bg-blue' : 'bg-yellow'}`} onClick={handleReset}>NEXT ROUND</button>
                    </div>
                </div>
            </div>
        </ModalPortal>

  )
}
