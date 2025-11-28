import imee from "../assets/amina.jpg"
import { FaAward } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import {Link } from "react-router-dom";
import Header from "./Header";



function About () {
    return (
        <> 
            <div className=" min-[320px]:px-[50px] min-[320px]:mt-[30px] lg:p-[40px] text-white/80 md:pb-[50px] bg-cover bg-center">
                <h1 className="text-orange-50 flex justify-center lg:text-[30px] md:text-[50px] sm:text-[40px] min-[320px]:text-[30px]">About me</h1>
                <div className="min-h-screen lg:flex lg:justify-between lg:mt-[30px] lg:flex-row gap-[30px]  ">
                  <div className="lg:absolute lg:right-[900px] lg:bottom-[80px] min-[768px]:w-[660px] min-[768px]:h-[400px] bg-linear-to-b transparent from-orange-50/30 to-orange-50/70 lg:w-[500px] lg:h-[400px] min-[344px]:h-[200px] min-[344px]:mb-[25px] rounded-lg min-[412px]:mr-[] min-[412px]:w-[310px] min-[412px]:h-[250px] min-[412px]:mb-[30px]  min-[344px]:mb-[30px] min-[412px]: mt-[20px]">
                     <img src={imee} className="transform shadow-lg rotate-6 hover:transform hover:rotate-0 lg:w-[500px] lg:h-[400px] min-[412px]:w-[365px] min-[412px]:h-[250px] min-[768px]:w-[660px] min-[768px]:h-[400px] rounded-lg min-[344px]:h-[200px] min-[344px]:w-[100%] " />
                  </div> 
                  <div className="lg:absolute lg:left-[790px] lg:bottom-[100px] lg:flex-col">
                    <div className="grid lg:grid-cols-3 lg:pr-[30px] lg:gap-[0] min-[320px]:grid-cols-1 mb-[30px] sm:geid-cols-2 gap-[30px] min-[768px]:grid-cols-2 ">
                    <div className="flex items-center gap-2 bg-orange-50 hover:bg-orange-50/50 rounded min-[320px]:h-[250px] p-[5px] min-[768px]:w-[320px] lg:w-[200px] lg:h-[160px] text-black text-center flex flex-col  pt-[20px] justify-center ">
                        <FaAward className="text-3xl"/> 
                        <p className="text-xl" >Experience</p>
                        <p className="text-md text-black/50">5+ month</p>
                    </div>
                    <div className="flex items-center gap-2 bg-orange-50  hover:bg-orange-50/50 rounded min-[320px]:h-[250px] p-[5px] min-[768px]:w-[320px] lg:w-[200px] lg:h-[160px] text-black text-center flex flex-col  pt-[20px] justify-center ">
                        <FiUserPlus  className="text-3xl"/>
                        <p className="text-xl">Education</p>
                        <p className="text-md text-black/50">High School</p>
                    </div>
                    <div className="flex items-center gap-2 bg-orange-50 hover:bg-orange-50/50 rounded min-[320px]:h-[250px] p-[5px] min-[768px]:w-[320px] lg:w-[200px] lg:h-[160px] text-black text-center flex flex-col  pt-[20px] justify-center ">
                        <VscFolderLibrary  className="text-3xl"/> 
                        <p className="text-xl">Projects</p>
                        <p className="text-md text-black/50">10+</p>
                    </div>
                    </div> 
                    <p className="lg:text-2xl lg:pr-16 text-white/50 min-[320px]:text-[20px] min-[768px]:text-[27px] min-[320px]:text-center lg:text-justify min-[320px]:mb-[30px] ">
                    Lorem ipsum dolor, sit amet
                     consectetur adipisicing elit. Sint at doloremque 
                     fugit, eos ducimus quae magni laudantium id optio
                     officiis eveniet culpa in velit praesentium 
                     casperiores veritatis! Debitis, illum et.</p>
                     <Link to="/contact" className="lg:text-[14px] w-[88px] mt-[10px] min-[320px]:mb-[30px] mb-[100px] min-[768px]:ml-[260px] min-[768px]:w-[100px] min-[768px]:p-[20px] min-[768px]:text-[20px] border text-black bg-orange-50/80 hover:bg-orange-50/10 hover:text-white lg:p-[10px] border-blue-100 rounded min-[344px]:ml-[100px] lg:ml-0 cursor-pointer">Let's Talk</Link>
                  </div>

               </div>
            </div>
        </>
    )
}

export default About