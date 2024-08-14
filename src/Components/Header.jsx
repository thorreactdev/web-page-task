import { useState } from "react";
import logo_white from "../assets/lejhro_logo_white.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import Sidebar from "./Sidebar";

export default function Header() {
    const[showSideBar , setShowSidebar] = useState(false);
    const toggleSidebar = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setShowSidebar(open);
    };
  return (
    <header className="bg-[#d6932c]">
      <div className="flex justify-between items-center max-w-7xl mx-auto  p-10 lg:p-20 cursor-pointer">
        <figure>
          <img src={logo_white} alt="Logo" className="w-[150px] md:w-[200px]" />
        </figure>

        <nav className="flex gap-12 text-white">
          <span className="hidden lg:inline">Innovations</span>
          <span className="hidden lg:inline">Bussiness Services</span>
          <span className="hidden lg:inline">Financial Services</span>
          <span className="hidden lg:inline">Bootcamp</span>
          {/* <p  onClick={()=> setShowSidebar(true)} className=" h-[30px] w-[30px] bg-white rounded-full inline-flex items-center justify-center">
            <IoReorderThreeOutline className="text-black text-xl  "/>
          </p> */}
        </nav>
          <p  onClick={()=> setShowSidebar(true)} className=" h-[30px] w-[30px] bg-white rounded-full inline-flex items-center justify-center">
            <IoReorderThreeOutline className="text-black text-xl  "/>
          </p>
      </div>

      <div className="p-10 lg:pl-20 max-w-7xl mx-auto text-white font-medium text-5xl py-10">
        Blogs
      </div>
      {showSideBar && (
        <Sidebar open={showSideBar} toggleSidebar={toggleSidebar}/>
      )}
    </header>
  );
}


