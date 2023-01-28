import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toggleModal } from '../../../helpers/showModal'
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
  const { board, player } = useStore(state => state)
  const navigate = useNavigate()

  const handleNextRound = () => {
    const newBoard = Array(9).fill('')
    board.setBoard(newBoard)
    player.setPlayer('X')
    toggleModal('#modal-winner')
  }

  const handleQuit = () => navigate('/')

  return (
        <Modal id='modal-winner'>
            <div className='relative bg-semi-dark-navy w-full z-50 text-center py-8'>
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
            </div>
        </Modal>
  )
}
