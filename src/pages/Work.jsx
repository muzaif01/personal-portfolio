import { FileBraces } from "lucide-react";
import Project from "../assets/project-1.png";
import Portfolio from "../assets/portfolio.png"

function Work() {
  return (
    <div className="h-fit py-6 m-4">
      <div className=" flex gap-3 items-center mb-10">
        <FileBraces size={40} color="#7B1FA2" />
        <h2 className="font-bold text-3xl">Projects</h2>
      </div>
      <div className="flex flex-wrap lg:justify-evenly">
        <div className="p-3 m-2 w-fit rounded-2xl shadow-2xl border border-gray-300 lg:w-110">
          <img
            src={Project}
            alt="blog project"
            className="w-fit object-contain"
          />
          <div className="mt-6 mx-3">
            <h2 className="font-bold text-lg">Inkwell Blog Website </h2>
            <h3 className="font-semibold">
             Full-stack blogging platform
            </h3>
            <br />
            <p className="font-bold text-lg">Features:</p>
            <p className="font-semibold">
              • User Authentication <br />• Create/Edit/Delete Posts <br />• Responsive
              Design 
            </p>
            <br />
            <h3 className="font-bold text-lg">Tech Stack</h3>
            <div className="mt-4 flex gap-6 flex-wrap">
            <p className="bg-gray-200 w-23 w-fit px-3 py-2 rounded-3xl font-semibold">Node.js</p>
            <p className="bg-gray-200 w-23 w-fit px-3 py-2 rounded-3xl font-semibold">Express</p>
            <p className="bg-gray-200 w-23 w-fit px-3 py-2 rounded-3xl font-semibold">PostgreSQL</p>
            </div>
            <div className="mt-7 flex justify-center gap-5">
              <a
                href="https://ink-well-fd0p.onrender.com"
                target="_blank"
                className="px-4 py-2 bg-purple-700 rounded font-medium text-white lg:font-bold"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/muzaif01/ink-well"
                target="_blank"
                className="px-4 py-2 bg-black rounded font-medium text-white lg:font-bold"
              >
                Github Link
              </a>
            </div>
          </div>
        </div>

        <div className="p-3 m-2 w-fit rounded-2xl shadow-2xl border border-gray-300 lg:w-110">
          <img
            src={Portfolio}
            alt="blog project"
            className="w-fit object-contain"
          />
          <div className="mt-6 mx-3">
            <h2 className="font-bold text-lg">Personal portfolio Website</h2>
            <h3 className="font-semibold">
             Modern developer portfolio
            </h3>
            <br />
            <p className="font-bold text-lg">Features:</p>
            <p className="font-semibold">
              • Resume Download <br />• Smooth Navigation <br />• Project Showcase
              
            </p>
            <br />
            <h3 className="font-bold text-lg">Tech Stack</h3>
            <div className="mt-4 flex gap-6 flex-wrap">
            <p className="bg-gray-200 w-23 w-fit px-3 py-2 rounded-3xl font-semibold">React</p>
            <p className="bg-gray-200 w-23 w-fit px-3 py-2 rounded-3xl font-semibold">Vite</p>
            <p className="bg-gray-200 w-23 w-fit px-3 py-2 rounded-3xl font-semibold">Tailwind</p>
            </div>
            <div className="mt-7 flex justify-center">
              <a
                href="https://github.com/muzaif01/personal-portfolio"
                target="_blank"
                className="px-4 py-2 bg-black rounded font-medium text-white lg:font-bold"
              >
                Github Link
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Work;
