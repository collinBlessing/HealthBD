import MyCalendar from "../Calendar";
import Header from "../Header/Header";
import Sidebar from "../SideBar/Sidebar";

const HealthScheduler = () => {
  return (
    <div className="w-full h-screen max-h-screen overflow-hidden bg-white">
      {/* Header */}
      <Header />
      {/* Lower body section */}
      <div className="h-full w-full flex items-center">
        {/* Sidebar */}
        <div className="h-full border-gray-100 ">
          <Sidebar />
        </div>
        {/* Main body */}
        <MyCalendar />
      </div>
    </div>
  );
};
export default HealthScheduler;
