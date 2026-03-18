import React, { useState } from 'react'
import TodoList from './TodoList'
import CustomButtons from '../components/CustomButtons.jsx';

function DailyPlanner() {

    const [taskInput , setTaskInput] = useState('');
    const [taskData , setTaskData] =  useState(JSON.parse(localStorage.getItem('soloLeveling_DailyHabit_TaskData')) || []);

    const [isEditing , setIsEditing] = useState(false);
    const [editIndex , setEditIndex] = useState(null);

    const addTask = () => {
        
        const oldTaskData = [...taskData];
        oldTaskData.push(taskInput);
        setTaskData(oldTaskData.slice().reverse());

        localStorage.setItem('soloLeveling_DailyHabit_TaskData' , JSON.stringify(oldTaskData))
    }

    const saveEditTodo = () => {
        
        if(taskInput.trim() && editIndex !== null) {
            let updateTodo = taskData.map((todo , idx)=>{
                if(idx === editIndex) {
                    return taskInput
                }
                return todo
            })  
            
            localStorage.setItem('soloLeveling_DailyHabit_TaskData' , JSON.stringify(updateTodo))

            setTaskData(updateTodo);
        
            setIsEditing(false);
            setEditIndex(null);
            setTaskInput('')
        }
    }
  return (
    <div className='w-full flex justify-center mt-40 h-max'>
        <div className='w-1/2'>
            <div className='flex gap-5'>
                <input className='border-2 outline-none text-2xl border-(--ivory-white) px-4 py-2 w-full rounded-md' type="text" placeholder='Enter Task'
                    value={taskInput}
                    onChange={(e)=>{
                        setTaskInput(e.target.value);
                    }}
                    
               />
                {
                    isEditing ? <CustomButtons name="Save" style='border-2 border-(--ivory-white)' saveEditTodo={saveEditTodo}/> : 
                    <CustomButtons name="Add" style='border-2 border-(--ivory-white)' addTask={addTask}/>
                }
                
            </div>

            <div className='flex flex-col h-100 overflow-auto no-scroll'>
                {taskData.map((taskName,idx)=>{
                    return <TodoList key={idx} taskName={taskName} idx={idx} taskData={taskData} setTaskData={setTaskData} setIsEditing={setIsEditing} setEditIndex={setEditIndex} setTaskInput={setTaskInput} />
                })}
            </div>
        </div>
    </div>
  )
}

export default DailyPlanner