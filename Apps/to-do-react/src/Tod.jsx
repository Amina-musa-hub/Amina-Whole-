import React, { useState } from 'react'
export default function Tod() {
    const [tasks, setTaskas] = useState(["Eat breakfast", "Go to school"])
    const [newTask, setNewTask] = useState('')
    const immge = '///unsplash.it/300/300'
    function handlInput(e) {
          setNewTask(e.target.value)
    }

    function addTask() {
        if (newTask.trim() !== '') {
             setTaskas([...tasks, newTask])
             setNewTask('')
        }
    }
    function removeTask(index) {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTaskas(newTasks)
        
    }
    function moveTaskUp(index) {
        
    }
    function moveTaskDown(index) {
        
    }
    return (
        <>
           
           <div className='font-sans text-center m-[100px]'>
             <h1 className='text-2xl font-bold mb-4' >To-do list</h1>
             <div>
                <input
                 className='border border-gray-300 rounded py-2 px-4 mr-2 mb-4'
                 type='text'
                 placeholder='Enter a task'
                 value={newTask}
                 onChange={handlInput}
                />
                <button
                  className='cursor-pointer transition ease-in 0.5s bg-blue-500 text-white py-2 px-4 rounded'
                  onClick={addTask} 
                >
                    Add
                </button>
             </div>
               <ul className='flex flex-col g'>
                    {tasks.map((task,index) =>
                        <li key={index} 
                        className='gap-4 items-center  mb-2'>
                            <span>{task}</span>
                             <button
                             className='bg-gray-500 text-white py-2 px-2 rounded'
                              onClick={()=> 
                             removeTask(index)}
                             >Delete
                             </button>
                             <button
                             className='bg-gray-500 text-white py-2 px-2 rounded'
                              onClick={()=> 
                             moveTaskUp(index)}
                             >Up
                             </button>
                             <button 
                             className='bg-gray-500 text-white py-2 px-2 rounded'
                             onClick={()=> 
                             moveTaskDown(index)}
                             >Down
                             </button>
                        </li>
                    )}
               </ul>
            <img src={immge}/>
           </div>
        </>
    )
}