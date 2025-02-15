import MyCalendar from "../Calendar";
import Header from "../Header/Header";
import Sidebar from "../SideBar/Sidebar";

const HealthScheduler = () => {
  return (
    <div className="w-full h-screen max-h-screen overflow-hidden bg-white">
      {/* Header */}
      <Header />
      <div className="h-4/5 w-full flex mb-1 flex-row items-center ">
        <div className="h-full w-1/4 bg-white ">
          <Sidebar />
        </div>
        <div className="h-full w-3/4 bg-gray-200 p-2">
          <MyCalendar />
        </div>
      </div>
    </div>
  );
};
export default HealthScheduler;
