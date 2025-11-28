import React, {useState} from "react";
export default function Pictatrue() {
  
   const [name, setName] = useState('')
   const [age, setAge] = useState(0)
   const [isEmployed, setIsEmployed] = useState(false)
   const updateName = () => {
       setName('Amina Musa')
   }
   const updateAge = () => {
        setAge(age + 2)
   }
   const toogleEmployed = () => {
        setIsEmployed(!isEmployed)
   }
    return (
        <>
         <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Update Name</button>
         </div>
         <div>
            <p>Age:{age}</p>
            <button onClick={updateAge}>Update Age</button>
         </div>
           <div>
            <p>isEmployed:{isEmployed ? "yes" : "no"}</p>
            <button onClick={toogleEmployed}>Toggle Employed</button>
         </div>
        </>
    )
}