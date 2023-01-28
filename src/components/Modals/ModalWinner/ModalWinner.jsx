import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../../store/store'
import { Button } from '../../Button'
import { IconO } from '../../Icons/IconO'
import { IconX } from '../../Icons/IconX'
import { Modal } from '../Modal'

const classesModal = {
  O: 'text-light-yellow',
  X: 'text-light-blue',
  tie: ' text-silver text-light-yellow'
}

export const ModalWinner = () => {
  const [animate, setAnimate] = useState({
    container: {
      animate: {
        height: ['0vh', '100vh']
      },
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    modal: {
      animate: {
        opacity: [0, 1]
      },
      transition: { delay: 0.2, duration: 1, ease: 'easeInOut' }
    },
    endFunc: () => { }
  })
  const { board, player } = useStore(state => state)
  const navigate = useNavigate()

  const handleNextRound = () => {
    const newBoard = Array(9).fill('')
    board.setBoard(newBoard)
    player.setPlayer('X')
    setAnimate({
      container: {
        animate: {
          height: ['100vh', '0vh']
        },
        transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5 }
      },
      modal: {
        animate: {
          opacity: [1, 0]
        },
        transition: { duration: 0.5, ease: 'easeInOut' }
      },
      endFunc: () => player.setOnlyWinner(null)
    })
  }

  const handleQuit = () => navigate('/')

  return (
        <Modal onAnimationComplete={animate.endFunc} initial={{ top: '50%', left: 0, width: '100%', translateY: '-50%', height: 0 }} animate={animate.container.animate} transition={animate.container.transition} id='modal-winner'>
            <motion.div animate={animate.modal.animate} transition={animate.modal.transition} className='relative bg-semi-dark-navy w-full z-50 text-center py-8'>
                <div className='max-w-xs mx-auto'>
                    {
                        player.winner !== 'tie' && (
                            <strong className='text-silver text-[14px]'>
                                YOW NOW!
                            </strong>
                        )
                    }
                    <div className={`flex justify-center items-center gap-4 mt-3 ${classesModal[player.winner]}`}>
                        {
                            player.winner !== 'tie' && (
                                <div className='w-10'>
                                    {
                                        player.winner === 'O' ? <IconO /> : <IconX />
                                    }
                                </div>
                            )
                        }

                        <span className='text-[24px]'>TAKES THE ROUND</span>
                    </div>
                    <div className='flex gap-3 mt-5'>
                        <Button type='gray' onClick={handleQuit}>QUIT</Button>
                        <Button type={`${player.winner === 'O' ? 'primary' : 'secondary'}`} onClick={handleNextRound}>NEXT ROUND</Button>
                    </div>
                </div>
            </motion.div>
        </Modal>
  )
}
