import React, { useRef, useState, useEffect } from 'react'

import { Circle } from '../Icons/Circle'
import { Close } from '../Icons/Close'

export const Cell = ({ coordinates, update, value, player, valueCpu }) => {
  const [isVisible, setIsVisible] = useState(false)

  const refElement = useRef(null)

  const handleClick = () => {
    update(coordinates.x, coordinates.y)
    setIsVisible(true)
  }

  useEffect(() => {
    if (valueCpu?.x === coordinates.x && valueCpu?.y === coordinates.y) {
      setIsVisible(true)
    }
  }, [valueCpu])

  useEffect(() => {
    setIsVisible(false)
  }, [player.rounds])

  return (
    <div className='w-24 h-24 md:w-36 md:h-36 bg-cells rounded-lg shadow-lg cursor-pointer' onClick={handleClick}>
      <div className={`w-full h-full flex justify-center items-center ${!isVisible ? 'opacity-0 transition ease-in-out delay-100 hover:opacity-100 duration-150' : ''}`} ref={refElement}>
        <div className='w-12 mx-auto'>
          {
            value === null
              ? (
                  player.turn === 0
                    ? (<Close fill="transparent" stroke="#31C3BD" />)
                    : (<Circle fill="transparent" stroke="#F2B137" />)
                )
              : (
                  value === 0 ? (<Close fill="#31C3BD" />) : (<Circle fill="#F2B137" />)
                )
          }
        </div>
      </div>
    </div>
  )
}
