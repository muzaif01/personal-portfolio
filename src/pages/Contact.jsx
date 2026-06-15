import { Contact } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { useState } from "react";

function Contactpage() {
 
 const [name, setname] = useState('');
 const [email, setemail] = useState('');
 const [data, setdata] = useState('');
     
  return (
    <div className="h-fit py-6 mx-4 mt-8">
      <div className="flex gap-3 items-center mb-10">
        <Contact size={40} color="#7B1FA2" strokeWidth={2} />
        <h1 className="font-bold text-3xl">Contact</h1>
      </div>

      <div className="lg:flex">
        <div className="flex flex-col gap-4 lg:w-1/2 ">
          <h2 className="font-bold text-3xl ">Let's Work Together!</h2>
          <p className="font-semibold text-lg text-justify text-wrap lg:w-[95%] md:w-120 ">
            I'm currently open to internships, full-time opportunities, and freelance projects. Whether you have a question, a project idea, or a potential collaboration, feel free to reach out. I'm passionate about web development and always excited to work on meaningful projects. Let's connect and build something great together!
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <Mail size={30} color="#7B1FA2" strokeWidth={2} />
              <p className="font-bold text-lg">muzaif57@gmail.com</p>
            </div>

            <div className="flex gap-3 items-center">
              <Phone size={30} color="#7B1FA2" strokeWidth={2} />
              <p className="font-bold text-lg">8275761235</p>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:w-1/2 lg:mt-0">

            <form action="" className="flex flex-col gap-2.5" onSubmit={(e)=>{
                e.preventDefault();
                setname('');
                setemail('');
                setdata('');
            }}>
                <input type="text" placeholder="Your Name" className="border px-3 py-1 rounded-2xl" value={name} onChange={(e)=>{
                  setname(e.target.value);
                }}/>
                <input type="text" placeholder="Your Email" className="border px-3 py-1 rounded-2xl" value={email} onChange={(e)=>{
                  setemail(e.target.value)
                }}/>
                <textarea name="" id="" placeholder="Your message" className="border px-3 py-1 rounded-2xl h-30 resize-none" value={data} onChange={(e)=>{
                  setdata(e.target.value)
                }}></textarea>
                <button type="submit" className="m-3 border cursor-pointer py-2 px-4 rounded-2xl font-bold text-lg text-white bg-purple-700 text-center lg:w-40 lg:m-0">Submit</button>
            </form>

        </div>

      </div>
    </div>
  );
}

export default Contactpage;
