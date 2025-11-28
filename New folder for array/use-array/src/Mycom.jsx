import React, { useState } from "react";
import Evvq from "./Evvq";
import Pictatrue from "./Pictatrue";
import Mycomponit from "./Mycomponit";

function Mycom() {
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState('')
    const [carModel, setCarModel] = useState('')
    
    function addCar() {
        const newCar = {
            year: carYear, 
            make: carMake,
            model: carModel}
        setCars(c => [...c, newCar])
        setCarYear(new Date().getFullYear())
        setCarMake('')
        setCarModel('')
    }
      function removeCar(index) {
        setCars(cars.filter((_, i) => i !== index))
        
    }
      function yearCar(e) {
        setCarYear(e.target.value)
    }
      function makeCar(e) {
       setCarMake(e.target.value) 
    }
      function modelCar(e) {
       setCarModel(e.target.value) 
    }


    return(
    <>
    <div>
        <h2>List of Car Objects</h2>
        <ul>
            {cars.map((car,index) =>
              <li key={index}>
                {car.year} {car.make} {car.model}
                <button onClick={() => removeCar(index)}>X</button>
              </li>
            )}
        </ul>
        <input type="number" value={carYear} onChange={yearCar}/><br/>
        <input type="text" value={carMake} onChange={makeCar} placeholder="Enter car make"/><br/>
        <input type="text" value={carModel} onChange={modelCar} placeholder="Enter car model"/><br/>
        <button onClick={addCar}>Add Car</button>
    </div>
    <Pictatrue/>
    <Mycomponit/>
    </>
    )
}

export default Mycom