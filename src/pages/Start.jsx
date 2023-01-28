import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { IconO } from '../components/Icons/IconO'
import { IconX } from '../components/Icons/IconX'
import { Layout } from '../layout/Layout'
import { useStore } from '../store/store'
import { handleActivePlayer } from '../utils/main'

export const Start = () => {
  const { player, board } = useStore(state => state)
  const navigate = useNavigate()

  const handleChangePlayer = (e, turn) => {
    handleActivePlayer(e)
    player.setPlayer(turn)
  }

  const handleNewGame = (mode) => {
    board.setMode(mode)
    navigate('/board')
  }

  return (
        <Layout className='flex justify-center items-center'>
            <div className='flex flex-col items-center gap-5 max-w-xs mx-auto w-full'>
                <div className='w-20'>
                    <img src='/images/logo.svg' className='w-full' />
                </div>
                <div className='w-full bg-semi-dark-navy rounded-lg p-5 text-white text-center'>
                    <p>PICK PLAYER 1’S MARK</p>
                    <div className='grid grid-cols-2 bg-dark-navy rounded-lg p-2'>
                        <div className='flex justify-center cursor-pointer active py-2 rounded-lg text-silver' onClick={(e) => handleChangePlayer(e, 'X')}>
                            <div className='w-7 h-7'>
                                <IconX />
                            </div>
                        </div>
                        <div className='flex justify-center cursor-pointer py-2 rounded-lg text-silver' onClick={(e) => handleChangePlayer(e, 'O')}>
                            <div className='w-7 h-7'>
                                <IconO />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <Button mode='cpu' type='primary' onClick={() => handleNewGame('cpu')}>NEW GAME (VS CPU)</Button>
                    <Button mode='player' type='secondary' onClick={() => handleNewGame('player')}>NEW GAME  (VS PLAYER)</Button>
                </div>
            </div>
        </Layout>

  )
}
