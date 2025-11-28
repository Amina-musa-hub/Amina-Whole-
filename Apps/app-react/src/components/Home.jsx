// import immg from "../assets/Wallpaper.jpg"
import imee from "../assets/amina.jpg"
import Sosial from "./Sosial"
import { Link } from "react-router-dom";

function Home() {
    
    return (
        <> 
         <div>
            <div className="h-screen bg-cover bg-center md:px-10 lg:px-0 sm:px-20 min-[320px]:px-10 flex justify-center min-[320px]:pt-[20px] min-[320px]:pb-[40px] overflow-hidden">
                <div className="text-white flex flex-col items-center justify-center ">
                     
                   <h1 className="lg:text-[30px] md:text-[50px] sm:text-[40px] min-[320px]:text-[30px] font-bold">Hello I'm </h1>
                   <h1 className="lg:text-[40px] md:text-[50px] sm:text-[40px] min-[320px]:text-[30px] ">Amina musa adam </h1>
                   <h4 className="text-white/50 min-[320px]:text-[19px] mt-[5px] lg:text-[20px] md:text-[20px] sm:text-[15px] hover:underline">Frontend developer</h4>
                    <div className="flex gap-4 mt-[30px]">
                        <a href="cv.pdf" download className="hover:not-focus:bg-orange-50/20 border p-[5px] border-blue-100 rounded cursor-pointer">Download CV</a>
                        <Link to="/contact" className="border text-black bg-orange-50/80 hover:bg-orange-50/10 hover:text-white p-[5px] border-blue-100 rounded cursor-pointer">Let's Talk</Link>
                     </div>
                     <div className="lg:h-[400px] lg:w-[350px] lg:mb-[50px] min-[320px]:mb-[30px]  min-[320px]:mt-[50px] text-center px-[10px]  bg-linear-to-t from-white/10 to-orange-50/80 min-[320px]:w-[300px] min-[320px]:h-[400px] overflow-hidden rounded-t-full">
                        <img src={imee} className="lg:w-[400px] min-[320px]:w-[280px] h-[400px] min-[320px]:mt-[30px] rounded-t-full"/>
                     </div>
                     </div>
                      <div className="">
                         <Sosial/>
                      </div>
                 </div>
           </div>
           
           
        </>
    )
}

export default Home