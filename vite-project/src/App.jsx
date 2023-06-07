import "./App.css";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import UserRegister from "./components/UserRegister";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Subscriptions from "./components/subscriptions";
import Projects from "./components/Projects";
import EmpRegister from "./components/EmpRegister";
import Login from "./components/Login";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
