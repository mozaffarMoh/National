import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeBeforeLogin from "./pages/HomeBeforeLogin/HomeBeforeLogin";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import SpecialSelection from "./pages/SpecialSelection/SpecialSelection";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit";

function App() {
  const token = false;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={!token ? <HomeBeforeLogin /> : <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="special-selection" element={<SpecialSelection />} />
          <Route path="profile-edit" element={<ProfileEdit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
