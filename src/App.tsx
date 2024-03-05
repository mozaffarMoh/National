import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import SpecialSelection from "./pages/SpecialSelection/SpecialSelection";
import DawratQuiz from "./pages/DawratQuiz/DawratQuiz";
import DawratSelection from "./pages/DawratSelection/DawratSelection";
import QuizResult from "./pages/QuizResult/QuizResult";
import AdminLogin from "./pages/Dashboard/AdminLogin/AdminLogin";
import AdminUsers from "./pages/Dashboard/AdminUsers/AdminUsers";
import AdminRegister from "./pages/Dashboard/AdminRegister/AdminRegister";
import SendNotify from "./pages/Dashboard/SendNotify/SendNotify";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/special-selection" element={<SpecialSelection />} />
          <Route path="/dawrat-selection" element={<DawratSelection />} />
          <Route path="/dawrat-quiz" element={<DawratQuiz />} />
          <Route path="/quiz-result" element={<QuizResult />} />
          <Route path="/dashboard/login" element={<AdminLogin />} />
          <Route path="/dashboard/users" element={<AdminUsers />} />
          <Route path="/dashboard/specialists" element={<AdminUsers />} />
          <Route path="/dashboard/colleges" element={<AdminUsers />} />
          <Route path="/dashboard/subjects" element={<AdminUsers />} />
          <Route path="/dashboard/ads" element={<AdminUsers />} />
          <Route path="/dashboard/suggestions" element={<AdminUsers />} />
          <Route path="/dashboard/create-account" element={<AdminRegister />} />
          <Route path="/dashboard/send-notify" element={<SendNotify />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
