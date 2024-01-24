import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeBeforeLogin from "./pages/HomeBeforeLogin/HomeBeforeLogin";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeBeforeLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
