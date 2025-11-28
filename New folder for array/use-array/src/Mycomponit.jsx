import React, { useState } from "react";
export default function Mycomponit() {
    
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1)
    }
    const decrement = () =>{
        setCount(count - 1)
    }
    const reset = () =>{
        setCount(0)
    }

    return (
        <>
        <img src={immge} className="w-[400px] h-[400px] ml-[500px] mt-[100px] "/>
        <div className="font-sans align-center justify-center mt-[150px] ">
          <p className="justify-center flex font-bold text-2xl"> Count: {count}</p><br/>
          <div className="justify-center align-center gap-4 flex ">
          <button className="bg-gray-200 p-2 rounded-full  " onClick={decrement}>Decrement</button>
          <button className="bg-gray-200 p-2 rounded-full  " onClick={reset}>Reset</button>
          <button className="bg-gray-200 p-2 rounded-full  " onClick={increment}>Increment</button>
          </div>
        </div>
        </>
    )
}
