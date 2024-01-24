import { Button } from "react-bootstrap";
import "./ClassificationButtons.scss";

const ClassificationButtons = () => {
  return (
    <div className="classificationButtons flexCenter">
      <Button className="dawrat-button">الدورات</Button>
      <Button className="questions-button">بنك الأسئلة</Button>
    </div>
  );
};

export default ClassificationButtons;
