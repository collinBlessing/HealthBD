import ListItem from "../ListItem";
import { GrOverview } from "react-icons/gr";
import { MdSick } from "react-icons/md";
import { AiTwotoneSchedule } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="h-full w-full bg-white rounded-xl flex flex-col items-start  text-gray-700">
      <ListItem icon={<GrOverview />} item="Overview" link_to="/" />
      <ListItem
        icon={<AiTwotoneSchedule />}
        item="Schedule"
        link_to="/schedule"
      />
      <ListItem icon={<MdSick />} item="Patients" link_to="/patients" />
      <ListItem icon={<RiTeamFill />} item="Staff" link_to="/staff" />
    </div>
  );
};

export default Sidebar;
