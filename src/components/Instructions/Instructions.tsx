import { Button } from "react-bootstrap";
import "./Instructions.scss";

const Instructions = ({ showQuestions }: any) => {
  const handleStartQuiz = () => {
    showQuestions();
  };
  return (
    <div className="instructions flexCenterColumn">
      <h1>تعليمات هامة</h1>
      <ul>
        <li className="list-group-item">
          ابدأ الاختبار سوف ينقلك الى صفحة السؤال
        </li>
        <li className="list-group-item">
          للتحقق من صحة إجابتك اضغط على اشارة الصح اسفل السؤال سوف تظهر لك
          الاجابة صحيحة او خاطئة
        </li>
        <li className="list-group-item">
          إشارة الكتاب سوف تظهر لك مرجع السؤال
        </li>
        <li className="list-group-item">
          كما يمكنك الحصول على النتيجة في اخر الاختبار ........ بالتوفيق
        </li>
      </ul>
      <Button className="start-quiz-button" onClick={handleStartQuiz}>
        ابدأ الاختبار
      </Button>
    </div>
  );
};

export default Instructions;
