import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Signin from "./pages/Signin";
import DataCalendar from "./components/DataCalendar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/schedule" element={<DataCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;
