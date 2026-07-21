import Navbar from "../components/navbar";
import Laptop from "../assets/Laptop.png"
import resume from "../assets/resume.pdf"
import { MoveRight } from "lucide-react";
import { Download } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";



function home() {
  return (
    <div className="h-[80vh] lg:h-[100vh]">
      
      <div className="h-full flex flex-col justify-evenly lg:h-full">
      <div className="flex px-5">
        <div className="">
        <p className="text-[32px] font-bold m-0">Hi ,I'm</p>
        <p className="font-bold text-[38px] m-0 lg:text-[44px]">MUZAIF SHAIKH</p>
        <p className="font-bold text-3xl text-purple-700 lg:text-4xl">
          Full Stack Developer
        </p>
        <p className="text-justify w-70 mt-4 lg:w-[80%] lg:font-semibold lg:text-2xl lg:w-full">
          I build exceptional and responsive web applications that provide great
          user experiences.
        </p>
        <div className="flex flex-col gap-3 mt-9 lg:flex-row">
          <a
            href="#project"
            className="flex text-sm font-semibold border-1 justify-between p-2 rounded gap-2 text-white bg-purple-700 items-center lg:text-lg lg:p-2"
          >
            View my work <MoveRight />
          </a>
          <a
            href={resume} target="_blank"
            className="flex text-sm font-semibold border-1 justify-between p-2 rounded gap-2 items-center lg:text-lg lg:p-2"
          >
            Download Resume <Download />
          </a>
        </div>
        </div>
        <div className="hidden lg:flex w-1/2 justify-center">
          <img src={Laptop} alt="" className="rounded-3xl object-contain w-fit"/>
        </div>
      </div>
      <div className="flex gap-6 mx-5 lg:mt-12">
        <a href="https://github.com/muzaif01" target="_blank" className="border-1 border-gray-600 rounded-xl p-2 shadow-gray-500 shadow-2xl"><FaGithub size={40}/></a>
        <a href="" target="_blank" className="border-1 border-gray-600 rounded-xl p-2 shadow-gray-500 shadow-2xl"><FaLinkedinIn size={40}/></a>
        <a href="" target="_blank" className="border-1 border-gray-600 rounded-xl p-2 shadow-gray-500 shadow-2xl"><FaInstagram size={40}/></a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=muzaif57@gmail.com" target="_blank" className="border-1 border-gray-600 rounded-xl p-2 shadow-gray-500 shadow-2xl"><CgMail size={40}/></a>
      </div>
      </div>
    </div>
  );
}

export default home;
