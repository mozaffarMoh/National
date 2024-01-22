import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeBeforeLogin from "./pages/HomeBeforeLogin/HomeBeforeLogin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeBeforeLogin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
