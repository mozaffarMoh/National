import "./QuizResult.scss";
import React from "react";
import BackTo from "../../components/BackTo/BackTo";
import Header from "../../components/Header/Header";
import Result from "../../components/Result/Result";
import CorrectQuestions from "../../components/CorrectQuestions/CorrectQuestions";
import Footer from "../../components/Footer/Footer";
import usePost from "../../api/usePost";
import { endPoint } from "../../api/endPoints";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const QuizResult = () => {
  const location = useLocation();
  const [checkAnswers, setCheckAnswers] = React.useState(false);
  const collegeUUID = Cookies.get("collegeUUID");
  const [data]: any = usePost(location.state.dataValue, endPoint.calculate, {
    isuuid: true,
    uuid: collegeUUID,
  });

  return (
    <div className="quiz-result flexCenterColumn">
      <Header />
      <BackTo />
      <Result checkAnswers={() => setCheckAnswers(true)} data={data} />
      {checkAnswers && <CorrectQuestions data={data} />}
      <Footer />
    </div>
  );
};

export default QuizResult;
