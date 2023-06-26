import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Projects from "./pages/Projects";
import Employees from "./pages/Employees";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const handleLogIn = (loggedInUser: any, loggedInUserData: any) => {
    setCurrentUser(loggedInUser);
    setUserData(loggedInUserData);
  };
  const handleLogOut = () => {
    setCurrentUser(null);
    setUserData(null);
    localStorage.removeItem("currentUserData");
    localStorage.removeItem("userData");
  };
  return (
    <div className="app antialiased text-gray-900 font-sans">
      <Navbar handleLogOut={handleLogOut} />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login handleLogIn={handleLogIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;
