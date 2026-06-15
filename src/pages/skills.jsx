import { FaCode } from "react-icons/fa";

function Skills(){
    return(
       <div className="mx-3 my-6 py-6 px-1 shadow-lg border border-gray-100 rounded-3xl lg:px-6">
        <div className="flex items-center gap-3 mb-10">
            <FaCode size={40} color="#7B1FA2" strokeWidth={2}/>
            <h2 className="font-bold text-3xl">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
           <div className="h-40 w-40 flex flex-col gap-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s" alt="react img" className="h-30 object-contain p-3 rounded-lg border-gray-50 shadow-2xl"/>
            <p className="text-center font-bold text-lg">React JS</p>
           </div>
           <div className="h-40 w-40 flex flex-col gap-2">
            <img src="https://images.icon-icons.com/2415/PNG/512/nodejs_original_logo_icon_146411.png" alt="react img" className="h-30 object-contain p-3 rounded-lg border-gray-50 shadow-2xl"/>
            <p className="text-center font-bold text-lg">Node JS</p>
           </div>
           <div className="h-40 w-40 flex flex-col gap-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlDx-wmb9kv0mAr6Ff4eG1y9dwUCJ9sYXPQ&s" alt="react img" className="h-30 object-contain p-3 rounded-lg border-gray-50 shadow-2xl"/>
            <p className="text-center font-bold text-lg">Express JS</p>
           </div>
           <div className="h-40 w-40 flex flex-col gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1280px-Postgresql_elephant.svg.png" alt="react img" className="h-30 object-contain p-3 rounded-lg border-gray-50 shadow-2xl"/>
            <p className="text-center font-bold text-lg">PostgreSQL</p>
           </div>
           <div className="h-40 w-40 flex flex-col gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/250px-Unofficial_JavaScript_logo_2.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail" alt="react img" className="h-30 object-contain p-3 rounded-lg border-gray-50 shadow-2xl"/>
            <p className="text-center font-bold text-lg">Javascript</p>
           </div>
           <div className="h-40 w-40 flex flex-col gap-2">
            <img src="https://images.icon-icons.com/171/PNG/512/html5_23329.png" alt="react img" className="h-30 object-contain p-3 rounded-lg border-gray-50 shadow-2xl"/>
            <p className="text-center font-bold text-lg">HTML</p>
           </div>
           <div className="h-40 w-40 flex flex-col gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/960px-CSS3_logo.svg.png" alt="react img" className="h-30 object-contain p-3 rounded-lg border-gray-50 shadow-2xl"/>
            <p className="text-center font-bold text-lg">CSS</p>
           </div>
           <div className="h-40 w-40 flex flex-col gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/960px-Tailwind_CSS_Logo.svg.png" alt="react img" className="h-30 object-contain p-3 rounded-lg border-gray-50 shadow-2xl"/>
            <p className="text-center font-bold text-lg">Tailwind CSS</p>
           </div>
           <div className="h-40 w-40 flex flex-col gap-2">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="react img" className="h-30 object-contain p-3 rounded-lg border-gray-50 shadow-2xl"/>
            <p className="text-center font-bold text-lg">Git & Github</p>
           </div>
           <div className="h-40 w-40 flex flex-col gap-2">
            <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="react img" className="h-30 object-contain p-3 rounded-lg border-gray-50 shadow-2xl"/>
            <p className="text-center font-bold text-lg">Postman</p>
           </div>
           </div>
       </div>
    )
}

export default Skills;