import { Board } from './components/Board/Board'

function App () {
  return (
    <div className="bg-body h-screen flex items-center justify-center">
      <Board cols={3} rows={3} />
    </div>
  )
}

export default App
