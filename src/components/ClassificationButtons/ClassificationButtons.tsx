import { Button } from "react-bootstrap";
import "./ClassificationButtons.scss";
import { Link } from "react-router-dom";

const ClassificationButtons = () => {
  return (
    <div className="classificationButtons flexCenter">
      <Link to={"/dawrat-selection"}>
        <Button className="dawrat-button">الدورات</Button>
      </Link>
      <Button className="questions-button">بنك الأسئلة</Button>
    </div>
  );
};

export default ClassificationButtons;
