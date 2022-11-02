import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Option } from '../components/Home/Option'
import { Circle } from '../components/Icons/Circle'
import { Close } from '../components/Icons/Close'
import { changeMode, changeTurn } from '../redux/slices/playerSlice'

export const Home = () => {
  const dispatch = useDispatch()
  const handleChangePlayer = () => dispatch(changeTurn())
  const navigate = useNavigate()

  const handleChangeMode = () => {
    dispatch(changeMode({ cpu: true, mode: 'hard' }))
    navigate('/start')
  }

  return (
        <div className="h-screen bg-body flex justify-center items-center">
            <div className='rounded-lg flex flex-col items-center'>
                <div className='flex items-center w-20 gap-3'>
                    <Close fill="#31C3BD" />
                    <Circle fill="#F2B137" />
                </div>
                <div className='text-center bg-cells px-10 py-6 mt-5 rounded-lg'>
                    <span className='text-slate-300 font-medium inline-block mb-4'>PICK PLAYER 1'S MARK</span>
                    <div className='bg-body flex justify-between rounded-lg py-2 px-2'>
                        <Option active onClick={handleChangePlayer}>
                            <Close fill="#1F3540" />
                        </Option>
                        <Option onClick={handleChangePlayer}>
                            <Circle fill="#A8BFC9" />
                        </Option>
                    </div>
                </div>
                <div className='flex flex-col w-full mt-7'>
                    <button className='bg-yellow font-medium mb-3 py-3 rounded-lg' onClick={handleChangeMode}>NEW GAME (VS CPU)</button>
                    <Link to="/start" className='bg-blue font-medium mb-3 py-3 rounded-lg text-center'>NEW GAME (VS PLAYER)</Link>
                </div>
            </div>
        </div>
  )
}
