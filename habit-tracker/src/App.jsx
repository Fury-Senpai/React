import React, { useState } from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import DailyPlanner from './components/DailyPlanner';

function App() {

  const savedPage = JSON.parse(localStorage.getItem('soloLeveling_DailyHabit_RenderedPage')) || "Dashboard"
  
  const [renderPage , setRenderPage] = useState(savedPage) 

  return (
    <>
      <Header setRenderPage={setRenderPage}/>
      {renderPage === "Dashboard" ? <Dashboard /> : renderPage === "DailyPlanner" ? <DailyPlanner /> : null}
    </>
  )
}

export default App