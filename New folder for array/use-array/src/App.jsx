import React, { useState } from 'react'
import Mycom from './Mycom'
import { Route,Routes } from 'react-router-dom'
import Mycomponit from './Mycomponit'

function App() {
  
  //  const [foods, setFoods] = useState(["Pizza", "Burger", "Fries", "Sushi"])
   
  //  function addFood() {
  //   const newFood = document.getElementById('foodInput').value
  //   document.getElementById('foodInput').value = ''
  //   setFoods( f =>[...f, newFood])
  //  }
  //   function removeFood(index) {
  //     setFoods(foods.filter((_, i) => i !== index))
  //  }
  return (
    <>
     {/* <div>
      <h1>List of Foods</h1>
      <ul>
        {foods.map((food, index) =>
           <li key={index} >
           {food}<button onClick={() => removeFood(index)}>X</button></li> )}
      </ul>
      <input type="text" id='foodInput' placeholder='Enter food name'/>
      <button onClick={addFood}>Add</button>
     </div>
      <Mycom/>
     <Routes>
      <Route path='/hello' element={<h1>hello world</h1>}/>
      <Route path='/..n' element={<h1>hello world 2</h1>}/>
     </Routes>  */}
     <Mycomponit/>
    </>
  )
}

export default App
