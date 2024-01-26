import "./QuizResult.scss";
import React from "react";
import BackTo from "../../components/BackTo/BackTo";
import Header from "../../components/Header/Header";
import Result from "../../components/Result/Result";
import CorrectQuestions from "../../components/CorrectQuestions/CorrectQuestions";
import Footer from "../../components/Footer/Footer";

const QuizResult = () => {
  const [checkAnswers, setCheckAnswers] = React.useState(false);
  return (
    <div className="quiz-result flexCenterColumn">
      <Header />
      <BackTo />
      <Result checkAnswers={() => setCheckAnswers(true)} />
      {checkAnswers && <CorrectQuestions />}
      <Footer />
    </div>
  );
};

export default QuizResult;
