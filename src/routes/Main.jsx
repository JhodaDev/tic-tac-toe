import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Start } from '../pages/Start'

export const Main = () => {
  return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/start" element={<Start />} />
            </Routes>

        </BrowserRouter>
  )
}
