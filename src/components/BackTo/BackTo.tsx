import "./BackTo.scss";
import backToIcon from "../../assets/images/Dawrat/backTo.svg";
import { useNavigate, useLocation } from "react-router-dom";

const BackTo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleBackTo = () => {
    if (
      location.pathname === "/dawrat-selection" ||
      location.pathname === "/special-quiz"
    ) {
      navigate("/special-selection");
    }
    location.pathname === "/dawrat-quiz" && navigate("/dawrat-selection");
    location.pathname === "/quiz-result" && navigate("/dawrat-quiz");
  };
  return (
    <div className="back-to">
      <div className="back-to-item" onClick={handleBackTo}>
        <img src={backToIcon} alt="" />
      </div>
      <div className="back-to-item">
        <p>العودة</p>
      </div>
    </div>
  );
};

export default BackTo;
