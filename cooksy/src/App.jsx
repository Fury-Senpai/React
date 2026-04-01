import React from 'react'
import Header from './Components/Header'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main className='bg-(--color-mint) text-amber-50 w-full h-max '>
      <Header />
      <div className='pt-20'>{/* SPACER */}</div> 
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      
      <Footer /> 
    </main>
  )
}

export default App