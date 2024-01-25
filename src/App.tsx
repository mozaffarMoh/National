import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeBeforeLogin from "./pages/HomeBeforeLogin/HomeBeforeLogin";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import SpecialSelection from "./pages/SpecialSelection/SpecialSelection";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit";
import SpecialQuiz from "./pages/SpecialQuiz/SpecialQuiz";
import DawratQuiz from "./pages/DawratQuiz/DawratQuiz";
import DawratSelection from "./pages/DawratSelection/DawratSelection";

function App() {
  const token = false;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={!token ? <HomeBeforeLogin /> : <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile-edit" element={<ProfileEdit />} />
          <Route path="/special-selection" element={<SpecialSelection />} />
          <Route path="/special-quiz" element={<SpecialQuiz />} />
          <Route path="/dawrat-selection" element={<DawratSelection />} />
          <Route path="/dawrat-quiz" element={<DawratQuiz />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
