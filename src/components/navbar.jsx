import { Menu } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";

function navbar() {
  const [nav, setnav] = useState(false);

  return (
    <div>
      <div className="flex justify-between px-4 py-3 items-center w-full bg-white shadow-md z-50">
        <h1 className="text-[1.8rem] font-black ">Muzaif.dev</h1>

        <div className="flex justify-between gap-6 font-bold text-lg lg:hidden">
          <button
            onClick={() => {
              setnav(!nav);
            }}
          >
            {nav ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        <div className="hidden lg:flex gap-8 font-bold items-center text-lg">
          <a href="#home" className="cursor-pointer hover:text-purple-700">
            Home
          </a>
          <a href="#about" className="cursor-pointer hover:text-purple-700">
            About
          </a>
          <a href="#project" className="cursor-pointer hover:text-purple-700">
            Project
          </a>
          <a href="#skills" className="cursor-pointer hover:text-purple-700">
            Skills
          </a>
          <a href="#contact" className="cursor-pointer hover:text-purple-700">
            Contact
          </a>
        </div>
      </div>

      {nav && (
        <div className="flex flex-col gap-4 px-4 py-4 font-bold bg-white/10 backdrop-blur-md border border-gray-700 absolute z-50 w-full">
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setnav(false)}>
            About
          </a>
          <a href="#project" onClick={() => setnav(false)}>
            Project
          </a>
          <a href="#skills" onClick={() => setnav(false)}>
            Skills
          </a>
          <a href="#contact" onClick={() => setnav(false)}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
}

export default navbar;
