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
    <div className="h-full w-full bg-white rounded-xl flex flex-col items-start  text-gray-700 rounded-xl">
      <ListItem icon={<GrOverview />} item="Overview" link_to="/" />
      <ListItem icon={<AiTwotoneSchedule />} item="Schedule" link_to="/schedule" />
      <ListItem icon={<MdSick />} item="Patients" link_to ="/patients" />
      
     
      <ListItem icon={<RiTeamFill />} item="Staff" link_to="/staff" />
     
    </div>



















  )
}

export default Sidebar 