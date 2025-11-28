import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

function Sosial () {
    return (
        <>
        <div className="home-sosial text-orange-50 sm:hidden lg:flex md:flex min-[320px]:hidden flex-col gap-2 text-2xl  absolute bottom-[60px] right-[30px] mb-[5px] sm:">
            <a className="mb-[5px] hover:text-orange-50/20" href="https://www.instagram.com/am_2d8?igsh=cmZ5c2Jkd2twNzFy&utm_source=ig_contact_invite" target="_blank"><FaInstagram/></a>
            <a className="mb-[5px] hover:text-orange-50/20" href="https://www.tiktok.com/@amina_4809?_r=1&_t=ZS-910diWtXllA" target="_blank"><FaTiktok/></a>
            <a className=" hover:text-orange-50/20" href="https://snapchat.com/t/lLP9U1SO" target="_blank"><FaSnapchatGhost/></a>
        </div>
        </>
    )
}

export default Sosial