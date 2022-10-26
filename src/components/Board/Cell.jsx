import React, { useRef, useState } from 'react'
import { Circle } from '../Icons/Circle'

import { Circlefill } from '../Icons/Circlefill'
import { Close } from '../Icons/Close'
import { CloseFill } from '../Icons/CloseFill'

export const Cell = ({ turn, coordinates, update, value }) => {
  const [isVisible, setIsVisible] = useState(false)

  const refElement = useRef(null)

  const handleClick = () => {
    update(coordinates.x, coordinates.y)
    setIsVisible(true)
  }

  return (
    <div className='w-24 h-24 bg-cells rounded-lg shadow-lg cursor-pointer' onClick={handleClick}>
      <div className={`w-full h-full flex justify-center items-center ${!isVisible ? 'opacity-0 transition ease-in-out delay-100 hover:opacity-100 duration-150' : ''}`} ref={refElement}>
        <div className='w-12 mx-auto'>
          {
            value === null
              ? (
                  turn === 0
                    ? (<CloseFill />)
                    : (<Circlefill />)
                )
              : (
                  value === 0 ? (<Close />) : (<Circle />)
                )
          }
        </div>
      </div>
    </div>
  )
}
