import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../helpers/main'
import { resetAllBoard } from '../../redux/slices/boardSlice'
import { resetAllPlayer } from '../../redux/slices/playerSlice'
import { ModalPortal } from './Modal'

export const ModalReset = () => {
  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(resetAllBoard())
    dispatch(resetAllPlayer())
    closeModal()
  }

  return (
        <ModalPortal>
            <div className="absolute w-full h-screen bg-modal flex justify-center items-center top-0 left-0 -z-20">
                <div className='modal hidemodal'>
                <h3 className="text-3xl font-bold text-gray">RESTART GAME</h3>
                    <div className='flex mt-6'>
                        <button className='bg-primaryButton px-4 py-2 rounded-lg font-bold text-slate-700 mr-5' onClick={closeModal}>NO, CANCEL</button>
                        <button className='px-4 py-2 rounded-lg font-bold text-slate-700 bg-yellow' onClick={handleReset}>YES, RESTART</button>
                    </div>
                </div>
            </div>
        </ModalPortal>
  )
}
