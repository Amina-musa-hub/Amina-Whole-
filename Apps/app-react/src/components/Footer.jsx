import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
function Footer () {
    return (
        <div className="p-[20px] flex flex-col justify-between bg-orange-50/90  items-center md:px-10 lg:px-30 sm:px-20 min-[320px]:px-10">
            <h1 className="text-xl  mb-[10px]">Amina Musa Adam</h1>
          <div className="flex lg:flex-row sm:flex-col md:flex-row text-center min-[320px]:flex-col min-[320px]:mb-[10px] lg:mb-0 min-[320px]:gap-4 gap-8">
           <Link className="hover:font-bold hover:scale-110" to="/">Home</Link>
           <Link className="hover:font-bold hover:scale-110" to="/about">About</Link>
           <Link className="hover:font-bold hover:scale-110" to="/skils">Skils</Link>
           <Link className="hover:font-bold hover:scale-110" to="/project">Project</Link>
           <Link className="hover:font-bold hover:scale-110" to="/contact">Contact</Link>
           </div>
            <div className="flex items-center gap-4 mt-[10px] mb-[10px]">
                <a className="hover:border hover:border-black hover:bg-orange-50 hover:text-black mb-[5px] bg-black text-orange-50 p-[5px] rounded" href="https://www.instagram.com/am_2d8?igsh=cmZ5c2Jkd2twNzFy&utm_source=ig_contact_invite" target="_blank"><FaInstagram/></a>
                <a className="hover:border hover:border-black hover:bg-orange-50 hover:text-black mb-[5px] bg-black text-orange-50 p-[5px] rounded " href="https://www.tiktok.com/@amina_4809?_r=1&_t=ZS-910diWtXllA" target="_blank"><FaTiktok/></a>
                <a className="hover:border hover:border-black hover:bg-orange-50 hover:text-black mb-[5px] bg-black text-orange-50 p-[5px] rounded" href="https://snapchat.com/t/lLP9U1SO" target="_blank"><FaSnapchatGhost/></a>
            </div>
            <div className="m-[10px] ">
                <span> &copy; 2023</span>
                <span className="hover:text-white"> Amina Musa Adam</span>
                <span> All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer