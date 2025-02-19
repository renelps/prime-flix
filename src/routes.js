import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Filme } from './movie'
import { Header } from './components/Header'
import { Error } from './pages/error'
import { Favorites } from './favorites'

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/filme/:id" element={ <Filme /> } />
        <Route path="favorites" element={<Favorites />} />

        <Route path="*" element={ <Error /> } />
      </Routes>
    </BrowserRouter>
  )
}