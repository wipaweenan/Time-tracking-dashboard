export default function  Card ( {color, icon, title, hour, week}){
    return(
        
                <div className={`relative ${color} h-[200px] w-[440px] sm:w-[200px] rounded-xl rounded-b-3xl pt-9 ${icon} bg-no-repeat bg-[90%_-1rem]`}>

                <div className="flex place-content-between p-6 bg-[#1c1f4a] hover:bg-[#29336f] rounded-xl duration-300 cursor-pointer">
                  <div className="grid ">
                        <span className=" pb-6">{title}</span>
                        <span className="text-[48px] font-light">{hour}</span>
                        <span className="font-light text-sm text-[#b5c1ff]">{week}</span>
                  </div>
                  <div className="pt-3"><svg width="25" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg></div>
                </div>
                </div>
             
    )
}