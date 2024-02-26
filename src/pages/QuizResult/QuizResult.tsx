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

const QuizResult = () => {
  const location = useLocation();
  const [checkAnswers, setCheckAnswers] = React.useState(false);
  const uuid = "06ae1f82-8df5-413f-bddb-bc2c1fc6ea51";
  const [data]: any = usePost(location.state.dataValue, endPoint.calculate, {
    isuuid: true,
    uuid: uuid,
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
