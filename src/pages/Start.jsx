import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { IconO } from '../components/Icons/IconO'
import { IconX } from '../components/Icons/IconX'
import { Layout } from '../layout/Layout'
import { useStore } from '../store/store'
import { handleActivePlayer } from '../utils/main'

export const Start = () => {
  const [animation, setAnimation] = useState({
    blue: { x: [250, 0], opacity: [0, 1] },
    yellow: { x: [-250, 0], opacity: [0, 1] },
    board: { y: [-250, 0], opacity: [0, 1] },
    endFunction: () => {}
  })
  const { player, board } = useStore(state => state)
  const navigate = useNavigate()

  const handleChangePlayer = (e, turn) => {
    handleActivePlayer(e)
    player.setPlayer(turn)
  }

  const handleNewGame = (mode) => {
    board.setMode(mode)

    setAnimation({
      blue: { x: [0, 250], opacity: [1, 0] },
      yellow: { x: [0, -250], opacity: [1, 0] },
      board: { y: [0, -250], opacity: [1, 0] },
      endFunction: () => {
        console.log('ejecutando')
        navigate('/board')
      }
    })
  }
  return (
        <Layout className='flex justify-center items-center'>
            <div className='flex flex-col items-center gap-5 max-w-xs xl:max-w-sm mx-auto w-full'>
                <motion.div onAnimationComplete={animation.endFunction} animate={animation.board} transition={{ duration: 1, ease: 'easeInOut' }} className='w-full'>
                    <div className='w-20 mx-auto mb-5'>
                        <img src='/images/logo.svg' className='w-full' />
                    </div>
                    <div className='w-full bg-semi-dark-navy rounded-lg p-5 xl:p-8 text-white text-center'>
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
                </motion.div>
                <div className='w-full flex flex-col gap-3'>
                    <Button animate={animation.yellow} transition={{ duration: 1, ease: 'easeInOut' }} mode='cpu' type='primary' onClick={() => handleNewGame('cpu')}>NEW GAME (VS CPU)</Button>
                    <Button animate={animation.blue} transition={{ duration: 1, ease: 'easeInOut' }} mode='player' type='secondary' onClick={() => handleNewGame('player')}>NEW GAME (VS PLAYER)</Button>
                </div>
            </div>
        </Layout>

  )
}
