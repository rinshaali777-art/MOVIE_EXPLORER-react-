import React from 'react'
import './App.css'
import Header from './Components/Header'
import Search from './Pages/Search'
import MovieCards from './Pages/MovieCards'
import { Route, Routes } from 'react-router-dom'
import MovieDetails from './Pages/MovieDetails'
import Pnf from './Pages/Pnf'

function App() {
  
  return (
   <>
   <Header/>
   <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/movies' element={<MovieCards />} />
        <Route path='/movieDetails' element={<MovieDetails />} />
        <Route path='*' element={<Pnf />} />
   </Routes>
   </>
  )
}

export default App
