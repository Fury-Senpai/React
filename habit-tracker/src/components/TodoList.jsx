import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

function TodoList(props) {

    let {taskData , setTaskData , setIsEditing , setEditIndex , setTaskInput} = props;
    
    const deleteTask = () => {
        const updatedTasks = taskData.filter((todo , id)=> {
            if(id !== props.idx) return todo
        });

        localStorage.setItem('soloLeveling_DailyHabit_TaskData' , JSON.stringify(updatedTasks))
        setTaskData(updatedTasks);
    }

    

    const editTaskFun = (id) => {
        setIsEditing(true);
        setEditIndex(id )
        setTaskInput(taskData[id]);
    }
  return (
    <div className='flex w-full h-max border-b p-3 get' id={props.idx}>
        <p className='w-full text-2xl'>
            <input className='outline-none' type="text" value={props.taskName}  readOnly />
        </p>
        <div className='flex gap-5 items-center'>
            <button className='active:scale-95 cursor-pointer' onClick={()=>{
                if(confirm("You sure want to delete this?")) deleteTask();
            }}>
                <MdDelete size={20} color='#8B62C2'/>
            </button>
            
            <div className='active:scale-95 cursor-pointer'
                onClick={()=>{
                    editTaskFun(props.idx);
                }}>
                <FaPencilAlt size={20} color='#8B62C2' />
            </div>
        </div>
    </div>
  )
}

export default TodoList