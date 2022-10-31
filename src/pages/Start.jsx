import { Board } from '../components/Board/Board'
import { Header } from '../components/Board/Header'
import { ModalReset } from '../components/Modal/ModalReset'

export const Start = () => {
  return (
    <div className="bg-body h-screen flex flex-col items-center justify-center">
      <div className='max-w-xs md:max-w-md w-full mx-auto'>
        <Header />
        <Board cols={3} rows={3} />
        <ModalReset />
      </div>
    </div>
  )
}
