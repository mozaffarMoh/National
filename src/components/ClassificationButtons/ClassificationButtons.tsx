import { Button } from "react-bootstrap";
import "./ClassificationButtons.scss";
import { Link } from "react-router-dom";

const ClassificationButtons = () => {
  return (
    <div className="classificationButtons flexCenter">
      <Link to={"/dawrat-selection"}>
        <Button className="dawrat-button" variant="secondary">الدورات</Button>
      </Link>
      <Button className="questions-button" variant="info">بنك الأسئلة</Button>
    </div>
  );
};

export default ClassificationButtons;
