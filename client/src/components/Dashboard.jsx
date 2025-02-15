import Sidebar from "./Sidebar"
import logo from "./../assets/bd.png"
import ye from "./../assets/ye.jpeg"
import { FaPlus } from "react-icons/fa6"
import web from "./../assets/web.png"
import mine from "./../assets/ye.jpeg"
import { FaCalendarDays } from "react-icons/fa6";
import { IoMdTimer } from "react-icons/io";

const Dashboard = () => {
  return (
  
    <div className=" h-screen max-h-screen overflow-hidden w-full  ">
        <div className="mb-1 h-10  w-full flex  bg-white ">
          <div className="w-1/2 h-full flex ">
            <div className="  mt-3 ml-3">
              <img src={logo} alt="" className="h-15 w-10 "/>
            </div>
            <div className="  mt-3 ml-3">
              <p>HealthBD</p>
            </div>
            <div className="w-1/2 h-10   ml-2">

            </div>
          </div>
          <div className="flex  h-10 w-full gap-2  justify-end bg-white">
            <div className=" ml-3 w-1/4 h-10  flex "></div>
            <div className="w-13 h-10 -200 ">
              <select name="" id="cars">
                <option value="English">English</option>
                <option value="Swahili">Swahili</option>
                <option value="French">French</option>
                <option value="Kinyarwanda">Kinyarwanda</option>
              </select>
            </div>
            <div className="w-1/4 h-10 flex flex-row mr-1">
              <div></div>
              <div></div>
            </div>
          </div>
 
       
       
    </div>
     <div className="h-4/5 w-full flex mb-0 
        flex-row items-center ">
            <div className="h-full w-1/4 
        bg-white rounded-xl " >
                <Sidebar/>
            </div>
       <div className="h-full w-3/4 
         flex flex-col  
       p-2">

      <div className="flex flex-row h-1/3 w-full  p-1 bg-gray-100  ">
        <div className="w-1/3  h-full rounded-md flex flex-col ml-2">
        <p className="text-bg-black text-xs mb-2 flex-start w-3/4">Up coming appointments-Today</p>
          <img src={web} alt="" className="h-3/4 w-3/4" />
        </div>
        <div className=" h-full w-3/4 flex flex-col bg-white">
          <div className=" h-1/6 w-full flex justify-between text-xs">
            <p className="text-black font-semibold flex flex-start ml-3">Up coming appointments-Today</p>
            <div className="flex flex-end">
              <p className="text-blue-300 font-bold mr-2 underline ">view all appointments</p>
            </div>
          
          </div> 
        <div className="h-5/6 w-full flex flex-col  ">
            <div className="h-1/4 w-full mt-1 border border-1 flex flex-row justify-evenly">
            <div className="flex flex-row w-1/4 h-20 ml-3 ">
              <img src={ye} alt="" className="h-7 w-7 rounded-full"/>
              <div className="flex flex-col ml-1">
                <h1 className="text-xs flex flex-row">DarleneRobertson</h1>
                <p className="text-xs">darlr@gmail.com</p>
              </div>
            </div>
            <div className=" h-full w-1/3 text-xs flex flex-col ">
              <h1>Time</h1>
              <p>09:25 EST</p>
            </div>
            <div>
              <button className=" h-4/5 mt-1 w-full p-3  rounded-xl text-xs flex flex-col justify-center items-center bg-blue-300">Check in</button>
            </div>
            
          </div>

    <div className="h-1/4 w-full mt-1 border border-1 flex flex-row justify-evenly">
     <div className="flex flex-row w-1/4 h-20 ml-3 ">
       <img src={ye} alt="" className="h-7 w-7 rounded-full"/>
       <div className="flex flex-col ml-1">
         <h1 className="text-xs flex flex-row">DarleneRobertson</h1>
         <p className="text-xs">darlr@gmail.com</p>
       </div>
     </div>
     <div className=" h-full w-1/3 text-xs flex flex-col ">
       <h1>Time</h1>
       <p>09:25 EST</p>
     </div>
     <div>
       <button className=" h-4/5 mt-1 w-full p-3 my-1 rounded-xl text-xs flex flex-col justify-center items-center bg-pink-200">Check in</button>
     </div>
     
   </div>

    <div className="h-1/4 w-full mt-1 border border-1 flex flex-row justify-evenly">
     <div className="flex flex-row w-1/4 h-20 ml-3 gap-2">
       <img src={ye} alt="" className="h-7 w-7 rounded-full"/>
       <div className="flex flex-col ml-1">
         <h1 className="text-xs flex flex-row">DarleneRobertson</h1>
         <p className="text-xs">darlr@gmail.com</p>
       </div>
     </div>
     <div className=" h-full w-1/3 text-xs flex flex-col ">
       <h1>Time</h1>
       <p>09:25 EST</p>
     </div>
     <div>
       <button className="h-4/5 mt-1 w-full p-3 my-1 rounded-xl text-xs flex flex-col justify-center items-center bg-pink-200">Check in</button>
     </div>
     
   </div>
          
          



        </div>
        </div>
      </div>

      <div className="bg-gray-100 h-2/5 w-full my-2">
     
        <div  className="border border-1 h-6 w-full flex justify-between bg-white">
        <h1 className="text-xs ml-2">Patient Conversation</h1>
          <div className="flex
          flex-row items-center gap-1 mr-3 bg-gray-300 w-20 rounded-xl p-2 text-xs text-black border border-3">
            <FaPlus />
            <p>Create</p>
          </div>
        </div>
        
  <div className="border border-1 h-6 w-full bg-white my-1 flex flex-row justify-between items-center gap-4 px-4">

  <div className="flex items-center gap-2">
    <img src={mine} alt="" className="h-5 w-5 rounded-full" />
    <p className="text-sm font-medium">MarkMckinney</p>
  </div>
  

  <div className="flex-grow text-xs text-gray-700">
    <p>This is the first row am currently on please</p>
  </div>
  

  <div className="flex items-center gap-1 text-xs text-gray-600">
    <FaCalendarDays />
    <p>03 May, 2024</p>
  </div>


  <div className="flex items-center gap-1 text-xs text-gray-600">
    <IoMdTimer />
    <p>07:06 pm</p>
  </div>
</div>

<div className="bg-white border border-1 h-6 w-full my-1 flex flex-row justify-between items-center gap-4 px-4">

  <div className="flex items-center gap-2">
    <img src={mine} alt="" className="h-5 w-5 rounded-full" />
    <p className="text-sm font-medium">MarkMckinney</p>
  </div>
  

  <div className="flex-grow text-xs text-gray-700">
    <p>This is the first row am currently on please</p>
  </div>


  <div className="flex items-center gap-1 text-xs text-gray-600">
    <FaCalendarDays />
    <p>03 May, 2024</p>
  </div>

 
  <div className="flex items-center gap-1 text-xs text-gray-600">
    <IoMdTimer />
    <p>07:06 pm</p>
  </div>
</div>

<div className="bg-white border border-1 h-6 w-full my-1 flex flex-row justify-between items-center gap-4 px-4">
 
  <div className="flex items-center gap-2">
    <img src={mine} alt="" className="h-5 w-5 rounded-full" />
    <p className="text-sm font-medium">MarkMckinney</p>
  </div>
 
 
  <div className="flex-grow text-xs text-gray-700">
    <p>This is the first row am currently on please</p>
  </div>
  

  <div className="flex items-center gap-1 text-xs text-gray-600">
    <FaCalendarDays />
    <p>03 May, 2024</p>
  </div>


  <div className="flex items-center gap-1 text-xs text-gray-600">
    <IoMdTimer />
    <p>07:06 pm</p>
  </div>
</div>



        
        

        
        
        
        
        
        
        

        <div className="bg-white border border-1 h-6 w-full my-1 flex flex-row justify-between items-center gap-4 px-4">

  <div className="flex items-center gap-2">
    <img src={mine} alt="" className="h-5 w-5 rounded-full" />
    <p className="text-sm font-medium">MarkMckinney</p>
  </div>
  
 
  <div className="flex-grow text-xs text-gray-700">
    <p>This is the first row am currently on please</p>
  </div>
  
 
  <div className="flex items-center gap-1 text-xs text-gray-600">
    <FaCalendarDays />
    <p>03 May, 2024</p>
  </div>


  <div className="flex items-center gap-1 text-xs text-gray-600">
    <IoMdTimer />
    <p>07:06 pm</p>
  </div>
</div>

        
        
        
        



        
       
       
       
       
       
       

      </div>
   <div className="bg-gray-100 h-2/5 w-full my-2">
  <div className=" bg-white border border-1 h-6 w-full flex justify-between">
    <h1 className="text-xs ml-2">Task</h1>
    <div className="flex flex-row justify-center items-center gap-1 mr-3 bg-blue-100 w-20 h-5  rounded-xl p-2 text-xs text-black border border-3">
      <FaPlus />
      <p>Create</p>
    </div>
  </div>
  <div className="bg-white border border-1 h-6 w-full my-1 flex flex-row justify-evenly gap-2">

    <div className="flex items-center gap-2">
      <input type="checkbox" className="h-5 w-5" />
      <p className="text-sm font-medium">Mark McKinney</p>
    </div>
 
    <div className="flex-grow text-xs text-gray-700">
      <p>This is the first row I am currently on, please.</p>
    </div>

    <div className="flex items-center gap-1 text-xs text-gray-600">
      <FaCalendarDays />
      <p>03 May, 2024</p>
    </div>
  
    <div className="flex items-center gap-1 text-xs text-gray-600">
      <IoMdTimer />
      <p>07:06 pm</p>
    </div>
  </div>
   <div className="bg-white border border-1 h-6 w-full my-1 flex flex-row justify-evenly gap-2">

   <div className="flex items-center gap-2">
     <input type="checkbox" className="h-5 w-5" />
     <p className="text-sm font-medium">Mark McKinney</p>
   </div>
 
   <div className="flex-grow text-xs text-gray-700">
     <p>This is the first row I am currently on, please.</p>
   </div>

   <div className="flex items-center gap-1 text-xs text-gray-600">
     <FaCalendarDays />
     <p>03 May, 2024</p>
   </div>

   <div className="flex items-center gap-1 text-xs text-gray-600">
     <IoMdTimer />
     <p>07:06 pm</p>
   </div>
 </div>

  <div className="bg-white border border-1 h-6 w-full my-1 flex flex-row justify-evenly gap-2">
 
   <div className="flex items-center gap-2">
     <input type="checkbox" className="h-5 w-5" />
     <p className="text-sm font-medium">Mark McKinney</p>
   </div>
 
   <div className="flex-grow text-xs text-gray-700">
     <p>This is the first row I am currently on, please.</p>
   </div>
 
   <div className="flex items-center gap-1 text-xs text-gray-600">
     <FaCalendarDays />
     <p>03 May, 2024</p>
   </div>

   <div className="flex items-center gap-1 text-xs text-gray-600">
     <IoMdTimer />
     <p>07:06 pm</p>
   </div>
 </div>

  <div className="bg-white border border-1 h-6 w-full my-1 flex flex-row justify-evenly gap-2">
  
   <div className="flex items-center gap-2">
     <input type="checkbox" className="h-5 w-5" />
     <p className="text-sm font-medium">Mark McKinney</p>
   </div>
 
   <div className="flex-grow text-xs text-gray-700">
     <p>This is the first row I am currently on, please.</p>
   </div>
 
   <div className="flex items-center gap-1 text-xs text-gray-600">
     <FaCalendarDays />
     <p>03 May, 2024</p>
   </div>

   <div className="flex items-center gap-1 text-xs text-gray-600">
     <IoMdTimer />
     <p>07:06 pm</p>
   </div>
 </div>
</div>

   


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 



     </div>
 </div>
</div>

    
  )
}

export default Dashboard