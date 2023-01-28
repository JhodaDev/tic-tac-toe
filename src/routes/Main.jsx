import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Game } from '../pages/Game'
import { Start } from '../pages/Start'

export const Main = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/board" element={<Game />} />
        </Routes>
    </BrowserRouter>
  )
}
