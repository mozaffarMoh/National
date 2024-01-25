import "./DawratQuiz.scss";
import React from "react";
import Header from "../../components/Header/Header";
import BackTo from "../../components/BackTo/BackTo";
import Instructions from "../../components/Instructions/Instructions";
import DawratQuizQuestions from "../../components/DawratQuizQuestions/DawratQuizQuestions";
import DawratDetails from "../../components/DawratDetails/DawratDetails";

const DawratQuiz = () => {
  const [showQuestions, setShowQuestions] = React.useState(false);
  return (
    <div>
      <Header />
      <BackTo />
      <DawratDetails />
      <Instructions showQuestions={() => setShowQuestions(true)} />
      {showQuestions && <DawratQuizQuestions />}
    </div>
  );
};

export default DawratQuiz;
