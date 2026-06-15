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
    <div className="h-[100vh]">
      
      <div className="h-full flex flex-col justify-evenly ">
      <div className="flex px-5">
        <div className="">
        <p className="text-[32px] font-bold m-0">Hi ,I'm</p>
        <p className="font-bold text-[44px] m-0">MUZAIF SHAIKH</p>
        <p className="font-bold text-4xl text-purple-700">
          Full Stack Developer
        </p>
        <p className="w-[80%] text-2xl mt-4 font-semibold ">
          I build exceptional and responsive web applications that provide great
          user experiences.
        </p>
        <div className="flex gap-2 mt-9">
          <a
            href="#project"
            className="flex text-lg font-semibold border-1 p-2 rounded gap-2 text-white bg-purple-700 items-center"
          >
            View my work <MoveRight />
          </a>
          <a
            href={resume} target="_blank"
            className="flex text-lg font-semibold border-1 p-2 rounded gap-2 items-center"
          >
            Download Resume <Download />
          </a>
        </div>
        </div>
        <div className="hidden lg:flex w-1/2 justify-center">
          <img src={Laptop} alt="" className="rounded-3xl object-contain w-fit"/>
        </div>
      </div>
      <div className="mt-12 flex gap-6 mx-5">
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
