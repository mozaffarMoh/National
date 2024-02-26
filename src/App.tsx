import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import SpecialSelection from "./pages/SpecialSelection/SpecialSelection";
import DawratQuiz from "./pages/DawratQuiz/DawratQuiz";
import DawratSelection from "./pages/DawratSelection/DawratSelection";
import QuizResult from "./pages/QuizResult/QuizResult";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
