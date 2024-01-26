import "./Result.scss";
import cupIcon from "../../assets/images/QuizResult/cup.svg";
import { Button } from "react-bootstrap";

const Result = ({ checkAnswers }: any) => {
  const handleCheck = () => {
    checkAnswers();
  };
  return (
    <div className="result flexCenterColumn">
      <div className="flexCenterColumn gap-3 ">
        <h1>مبروك لقد اتممت الاختبار بنجاح </h1>
        <div className="flexCenter">
          <h1>علامتك هي : 80</h1>
          <img src={cupIcon} alt="" />
        </div>
      </div>
      <div className="line"></div>
      <div className="flexCenter w-100 justify-content-between ">
        <p>عدد الاسئلة الصحيحة :40</p>
        <p>عدد الاسئلة الخاطئة :10</p>
      </div>
      <Button
        className="result-button"
        variant="secondary"
        onClick={handleCheck}
      >
        التحقق من الاجابات
      </Button>
    </div>
  );
};

export default Result;
