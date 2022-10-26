import { Circle } from '../Icons/Circle'

export const WinnerModal = () => {
  return (
        <div className="absolute w-full h-screen bg-modal flex justify-center items-center -w">
            <div className='modal'>
                <span className='text-slate-300 font-bold'>YOU WON!</span>
                <div className='flex mt-3 items-center'>
                    <div className='w-8 mr-3'>
                        <Circle />
                    </div>
                    <h3 className='text-3xl text-yellow font-bold'>TAKES THE ROUND</h3>
                </div>
                <div className='flex mt-6'>
                    <button className='bg-primaryButton px-4 py-2 rounded-lg font-bold text-slate-700 mr-5'>QUIT</button>
                    <button className='bg-yellow px-4 py-2 rounded-lg font-bold text-slate-700'>NEXT ROUND</button>
                </div>
            </div>
        </div>
  )
}

// generar background color #0D1519 con transparencia del 25%
