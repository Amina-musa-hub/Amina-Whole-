import { Routes, Route} from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Skils from "./Skils"
import Project from "./Project"
import Contact from "./Contact"
import Footer from "./Footer"
import Header from "./Header";


function App() {
  
  return (
    <>
     <div className=" bg-[url(assets/bg-texture.png)] bg-cover bg-center">
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skils" element={<Skils/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
     
     </div>
      <Footer/>
    </>
  )
}

export default App
