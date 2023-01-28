import { Board } from '../components/Board'
import { Header } from '../components/Header'
import { ModalWinner } from '../components/Modals/ModalWinner/ModalWinner'
import { Layout } from '../layout/Layout'

export const Game = () => {
  return (
    <Layout>
      <div className='flex flex-col justify-center h-full'>
        <Header />
        <Board />
      </div>
      <ModalWinner />
    </Layout>
  )
}
