import React from 'react'

function Buttons(props) {
  
  return (
    <>
        <button className={`cursor-pointer text-(--ivory-white) bg-transparent  px-8 py-4 rounded-md text-lg tracking-tight h-max active:scale-95  active:bg-(--accent-purple) button-animation ${props.style }`}
          onClick={(e)=>{
            
            if(props.clickPage ) {
              props.clickPage(e); 
            }
            if(props.addTask) {
              props.addTask();
            }
            if(props.saveEditTodo) {
              props.saveEditTodo();
            }
          }}>
            <a href="#">
                {props.name}
            </a>
        </button>
    </>
  )
}

export default Buttons