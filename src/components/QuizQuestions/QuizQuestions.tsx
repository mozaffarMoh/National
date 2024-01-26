import "./QuizQuestions.scss";
import React from "react";
import { Button } from "react-bootstrap";
import { QuizQuestionsArray } from "./QuizQuestionsArray";
import { useNavigate } from "react-router-dom";
import emptyCircle from "../../assets/images/QuizResult/nonSelected.svg";
import fillCircle from "../../assets/images/QuizResult/selected.svg";
import successIcon from "../../assets/images/QuizResult/answerSuccessIcon.svg";
import starEmptyIcon from "../../assets/images/QuizResult/starEmpty.png";
import starHoverIcon from "../../assets/images/QuizResult/starHover.png";
import starFillIcon from "../../assets/images/QuizResult/starFill.svg";
import bookIcon from "../../assets/images/QuizResult/book.svg";

const QuizQuestions = () => {
  const squaresArray = Array(3).fill("");
  const navigate = useNavigate();
  const [selectAnswer, setSelectAnswer] = React.useState(Array(5).fill(false));
  const [showFillStar, setShowFillStar] = React.useState(false);
  const [showHoverStar, setShowHoverStar] = React.useState(false);

  /* Handle Finish Exam */
  const handleFinishExam = () => {
    navigate("/quiz-result");
  };

  /* Handle Select Answer */
  const handleSelectAnswer = (index: number) => {
    setSelectAnswer((prevArray): any => {
      const newArray = prevArray.map((value, i) => {
        return i === index ? true : value;
      });
      return newArray;
    });
  };

  return (
    <div className="quiz-questions flexCenterColumn">
      {QuizQuestionsArray.slice(0, 3).map((item: any, index: number) => {
        return (
          <div className="quiz-questions-item" key={index}>
            <p>{item.title}</p>
            <p>{item.question}</p>

            <div className="answers flexCenter">
              {item.answers.map((child: any, index: number) => {
                return (
                  <div className="answer flexCenter" key={index}>
                    <div className="flexCenter">
                      {!selectAnswer[index] ? (
                        <img
                          src={emptyCircle}
                          alt=""
                          onClick={() => handleSelectAnswer(index)}
                        />
                      ) : (
                        <img src={fillCircle} alt="" />
                      )}
                    </div>
                    <div className="flexCenter">
                      <p>{child.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="quiz-footer flexCenter">
              <div className="flexCenter gap-4 ">
                <img src={successIcon} alt="" />
                {!showFillStar ? (
                  !showHoverStar ? (
                    <img
                      src={starEmptyIcon}
                      alt=""
                      onMouseEnter={() => setShowHoverStar(true)}
                    />
                  ) : (
                    <img
                      src={starHoverIcon}
                      alt=""
                      onClick={() => setShowFillStar(true)}
                      onMouseLeave={() => setShowHoverStar(false)}
                    />
                  )
                ) : (
                  <img
                    src={starFillIcon}
                    alt=""
                    onClick={() => setShowFillStar(false)}
                  />
                )}
                <img src={bookIcon} alt="" />
              </div>
              <Button className="quiz-footer-button">التالي</Button>
            </div>
          </div>
        );
      })}
      {squaresArray.map((_, index) => {
        return <div className="square" key={index}></div>;
      })}
      <Button className="quiz-questions-button" onClick={handleFinishExam}>
        أنه الاختبار الان
      </Button>
    </div>
  );
};

export default QuizQuestions;
