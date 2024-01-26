import "./DawratQuiz.scss";
import React from "react";
import Header from "../../components/Header/Header";
import BackTo from "../../components/BackTo/BackTo";
import Instructions from "../../components/Instructions/Instructions";
import QuizQuestions from "../../components/QuizQuestions/QuizQuestions";
import DawratDetails from "../../components/DawratDetails/DawratDetails";
import Footer from "../../components/Footer/Footer";

const DawratQuiz = () => {
  const [showQuestions, setShowQuestions] = React.useState(false);
  return (
    <div>
      <Header />
      <BackTo />
      <DawratDetails />
      <Instructions showQuestions={() => setShowQuestions(true)} />
      {showQuestions && <QuizQuestions />}
      <Footer />
    </div>
  );
};

export default DawratQuiz;
