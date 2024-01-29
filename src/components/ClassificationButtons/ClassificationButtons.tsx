import { Button } from "react-bootstrap";
import "./ClassificationButtons.scss";
import { Link } from "react-router-dom";

const ClassificationButtons = () => {
  return (
    <div className="classificationButtons flexEvenly">
      <Link to={"/dawrat-selection"}>
        <Button className="dawrat-button" variant="secondary">الدورات</Button>
      </Link>
      <button className="questions-button">بنك الأسئلة</button>
    </div>
  );
};

export default ClassificationButtons;
