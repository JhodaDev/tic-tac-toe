import React from 'react'

export const Results = ({ player }) => {
  return (
    <div className='grid grid-cols-3 gap-3 mt-5'>
        <div className='w-full rounded-lg bg-blue text-center py-2'>
          <span>x</span>
          <span className='block font-medium'>{player.gamesWon.x}</span>
        </div>
        <div className='w-full rounded-lg bg-select text-center py-2'>
          <span>Ties</span>
          <span className='block font-medium'>{player.gamesWon.tie}</span>
        </div>
        <div className='w-full rounded-lg bg-yellow text-center py-2'>
        <span>o</span>
          <span className='block font-medium'>{player.gamesWon.o}</span>
        </div>
      </div>
  )
}
