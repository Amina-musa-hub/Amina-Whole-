// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './first.jsx'
import Second from './second.jsx'
import Third from './third.jsx'

function App() {

  return (
   <>
   <div>
     <Header name="First component"/>
     <div style={{display: "flex", backgroundColor: "violet"}}>
      <Second name="Second component"/>
      <Second name="second"/>
      <Second name=" component"/>
     <Third name="Third" />
     <Third name=" component"/>
     </div>
   </div>
  </>
    
  )
}

export default App
