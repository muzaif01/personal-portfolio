import { User } from "lucide-react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Clock } from "lucide-react";

function About() {
  return (
    <div className="h-full mx-3  py-6 px-2 shadow-lg border border-gray-100 rounded-3xl lg:px-6">
      <div className="flex gap-3 items-center mb-10">
        <User size={40} color="#7B1FA2" strokeWidth={2} />
        <h2 className="font-bold text-3xl">About Me</h2>
      </div>
      <div className="flex">
        <div className="overflow-auto">
          <div className="">
            <p className="text-gray-800 font-semibold text-[22px] text-justify lg:w-1/2 ">
              I'm a passionate Full Stack Developer with a strong foundation in
              building scalable web applications and turning ideas into
              real-world solutions.
            </p>
          </div>

          <div className="mt-10 flex flex-col">
            <div className="flex items-center">
              <MapPin size={32} color="#7B1FA2" />{" "}
              <p className="font-bold text-[24px] w-32 mr-4 ml-3">Location</p>{" "}
              <p className="text-[22px] text-gray-700">India</p>
            </div>

      

            <div className="flex items-center">
              {" "}
              <BriefcaseBusiness size={32} color="#7B1FA2" />{" "}
              <p className="font-bold text-[24px] w-32 mr-4 ml-3">Experience</p>{" "}
              <p className="text-[22px] text-gray-700">Fresher</p>
            </div>

            <div className="flex items-center">
              {" "}
              <Clock size={32} color="#7B1FA2" />{" "}
              <p className="font-bold text-[24px] w-32 mr-4 ml-3">
                Availability
              </p>{" "}
              <p className="text-[22px] text-green-600 font-semibold">
                Open to work
              </p>
            </div>
          </div>
        </div>
        <div className="">
      
        </div>
      </div>
    </div>
  );
}

export default About;
