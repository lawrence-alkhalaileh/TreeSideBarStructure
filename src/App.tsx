import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="flex">
      <div className="w-64 h-screen bg-gray-900 text-white py-2 px-1">
        <Sidebar />
      </div>
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
