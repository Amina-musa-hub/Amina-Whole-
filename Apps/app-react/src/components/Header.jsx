// 
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";

export default function Header() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-md border border-white/30 shadow-lg z-50 flex items-center justify-center gap-6 px-6 py-3 rounded-full">
      <Link
        to="/"
        className=" hover:text-black text-orange-50 transition-all transform hover:scale-125"
      >
        <CiHome size={22} />
      </Link>

      <Link
        to="/about"
        className="hover:text-black text-orange-50 transition-all transform hover:scale-125"
      >
        <LuUserRound size={22} />
      </Link>

      <Link
        to="/skils"
        className="hover:text-black text-orange-50 transition-all transform hover:scale-125"
      >
        <BiBook size={22} />
      </Link>

      <Link
        to="/project"
        className="hover:text-black text-orange-50 transition-all transform hover:scale-125"
      >
        <RiServerLine size={22} />
      </Link>

      <Link
        to="/contact"
        className="hover:text-black text-orange-50 transition-all transform hover:scale-125"
      >
        <BiMessageDetail size={22} />
      </Link>
    </nav>
  );
}
