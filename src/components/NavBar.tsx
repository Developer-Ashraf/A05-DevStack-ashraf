
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Logo from '../assets/logo-text.png'



const NavBar = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80">
            <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
                <button className="md:hidden">
                    <HiOutlineMenuAlt3 size={28} />
                </button>
                <div className="">
                    <img src={Logo} alt="" />
                </div>
                <ul className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
                    <li><a href="#" className="hover:text-[#D91B7E]">Home</a></li>
                    <li><a href="#" className="hover:text-[#D91B7E]">Technologies</a></li>
                    <li><a href="#" className="hover:text-[#D91B7E]">Projects</a></li>
                    <li><a href="#" className="hover:text-[#D91B7E]">About</a></li>
                    <li><a href="#" className="hover:text-[#D91B7E]">Contact</a></li>
                </ul>
                <div className="flex items-center gap-2">
                    <button className="text-sm font-medium text-[#334155] hover:text-[#D91B7E] transition-all">Sign In</button>
                    <button className="rounded-full bg-[#D91B7E] px-4 py-2 text-sm font-semibold text-white hover:opacity-90">Sing Up</button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;