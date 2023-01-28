import { Board } from '../components/Board'
import { Header } from '../components/Header'
import { ModalWinner } from '../components/Modals/ModalWinner/ModalWinner'
import { Layout } from '../layout/Layout'
import { useStore } from '../store/store'

export const Game = () => {
  const { player } = useStore(state => state)

  return (
    <Layout>
      <div className='flex flex-col justify-center h-full'>
        <Header />
        <Board />
      </div>
      {
        player.winner && <ModalWinner />
      }
    </Layout>
  )
}
