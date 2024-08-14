import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function Footer() {
  const[show, setShow] = useState(false);

  const handleScroll = () =>{
    if(window.scrollY > 200){
      setShow(true);
    }else{
      setShow(false);
    }
  }

  const scrollToTop = () =>{
    window.scrollTo({ top : 0, behavior : "smooth"});
  }

  useEffect(()=>{
    window.addEventListener("scroll" , handleScroll);
    return ()=>{
      window.removeEventListener("scroll" , handleScroll);
    }

  },[]);



  return (
    <footer className="bg-white">
      <div className="bg-white border-t-8 border-[#2c7fbf] flex md:p-20 p-10 md:justify-evenly flex-col gap-10 lg:gap-0 md:flex-row md:flex-wrap">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-extrabold">Company</h2>
          <div className="flex flex-col gap-2 cursor-pointer">
            <span className="hover:text-blue-400">Innovations</span>
            <span className="hover:text-blue-400"> Business Services</span>
            <span className="hover:text-blue-400">Financial Services</span>
            <span className="hover:text-blue-400"> Lejhro Recruiter</span>
            <span className="hover:text-blue-400">About</span>
            <span className="hover:text-blue-400">Blog</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-extrabold">Programs</h2>
          <span className="cursor-pointer ">Lejhro Bootcamp</span>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-extrabold">Support</h2>
          <div className="flex flex-col gap-2 cursor-pointer">
            <span className="hover:text-blue-400">Contact</span>
            <span className="hover:text-blue-400">Terms of Use</span>
            <span className="hover:text-blue-400">Privacy Statement</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-extrabold">Connect with us</h2>
          <div className="flex gap-3 text-xl md:text-2xl cursor-pointer">
            <FaTwitter className="hover:text-blue-400" />
            <FaFacebook className="hover:text-blue-400" />
            <FaLinkedin className="hover:text-blue-400" />
            <FaYoutube className="hover:text-blue-400" />
          </div>
        </div>
      </div>

      <div className="">
        <p className="text-center  text-gray-600 py-4">© 2024 LEJHRO. All Rights Reserved.</p>
      </div>
      { show && (

      <div title="Back To Top" className="bg-white m-6 shadow-xl cursor-pointer shadow-[gray] w-[45px] h-[45px]  rounded-full inline-flex items-center justify-center fixed bottom-0 right-0 ">
        <MdKeyboardArrowUp className="text-3xl text-[#2c7fbf]" onClick={scrollToTop}/>
      </div>
      )
      }

    </footer>
  );
}
