import React from 'react'
import CustomButtons from './CustomButtons'
import Dashboard from './Dashboard';
import DailyPlanner from './DailyPlanner';

function Header(props) {
    const renderPage = (e) => {
        console.log(e.target.textContent);
        if(e.target.textContent === 'Dashboard') {
            props.setRenderPage("Dashboard");
            localStorage.setItem('soloLeveling_DailyHabit_RenderedPage' , JSON.stringify('Dashboard'));
        }
        else if(e.target.textContent === 'Daily Planner'){
            localStorage.setItem('soloLeveling_DailyHabit_RenderedPage' , JSON.stringify('DailyPlanner'));
            props.setRenderPage("DailyPlanner")
        }
        else {
            props.setRenderPage(null);
        }
        
    }
  return (
    <nav className='flex justify-between items-center border-b-2 border-t-2 border-(--accent-purple) select-none p-4 bg-(--transparent-purple) backdrop-blur-md'>
        <div>
            <a href="#">
                <h1 className='font-[cowbeep-boy] text-7xl text-(--ivory-white) text-shadow-purple'>
                    SOLO LEVELING
                </h1>
            </a>
            
            <h4 className='font-[spidermen-comic] text-(--ivory-white) text-2xl text-shadow-purple'>
                HABIT TRACKER 
            </h4>
        </div>
        {/* DASHBOARD LEFT PANEL */}
        <div className='flex gap-5'>
            <CustomButtons name="Dashboard" clickPage={renderPage}/>
            <CustomButtons name="Pomodoro Timer" clickPage={renderPage} />
            <CustomButtons name="Daily Planner" clickPage={renderPage} />
        </div>
    </nav>
  )
}

export default Header