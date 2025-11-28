import { useState } from "react"
const tasks = [
        { id: 1, title: "Task 1" , body:" THIS IS Task 1" },
        { id: 2, title: "Task 2"  },
        { id: 3, title: "Task 3" },
    ]
    const task = { id: 4, title: "Task 4" }
export default function Amina() {
    console.log(useState(tasks))
    function buttonClic(){
       tasks.push(task)
        }
    return (
        
        <>
        <ul>
        {tasks.map((task) => (
            <li key={task.id}>{task.title} {task.body}</li>
        ))}
        
        </ul>
        <button className="bg-gray-100 p-2 rounded-md mt-2 font-bold" onClick={buttonClic}>ADD TASK</button>
        </>
    )   
} 
 