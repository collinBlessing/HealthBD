import ListItem from "./ListItem";
import { GrOverview } from "react-icons/gr";
import { MdAssuredWorkload } from "react-icons/md";
import { MdSick } from "react-icons/md";
import { AiTwotoneSchedule } from "react-icons/ai";
import { FaXbox } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaMoneyBill } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";
import { ImLab } from "react-icons/im";
import { FaImages } from "react-icons/fa";


const Sidebar = () => {
  return (
   <div className="h-full w-full bg-blue-100 flex flex-col items-start  text-gray-700">
  <ListItem icon={<GrOverview />} item="Overview" />
  <ListItem icon={<AiTwotoneSchedule />} item="Schedule" />
  <ListItem icon={<MdSick />} item="Patients" />
  <ListItem icon={<MdAssuredWorkload />} item="To-do" />
  <ListItem icon={<FaXbox />} item="Fax-Inbox" />
  <ListItem icon={<RiTeamFill />} item="Staff" />
  <ListItem icon={<ImLab />} item="Lab" />
  <ListItem icon={<FaImages />} item="Imaging" />
  <ListItem icon={<FaMoneyBill />} item="Billing" />
  <ListItem icon={<MdCardMembership />} item="Membership" />
</div>

   
   
   
   
   
   
   
   
   
   
   


   

   
   
   
  )
} 

export default Sidebar 