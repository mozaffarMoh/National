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
  const [showFillStar, setShowFillStar] = React.useState(false);
  const [showHoverStar, setShowHoverStar] = React.useState(false);
  const [lastIndex, setLastIndex] = React.useState<number | any>(1);
  const [quizQuestionsArray, setQuizQuestionsArray]: any =
    React.useState(QuizQuestionsArray);

  /* Handle Select Answer */
  const handleSelectAnswer = (
    checkValue: boolean,
    index: number,
    indexAnswer: number
  ) => {
    setQuizQuestionsArray((prevState: any) => {
      const updatedArray = [...prevState];
      updatedArray[index].answers[indexAnswer].check = !checkValue;
      return updatedArray;
    });
  };

  /* Show next question */
  const handleNextQuestions = (index: number) => {
    if (index === lastIndex - 1 && lastIndex < quizQuestionsArray.length) {
      setLastIndex((prev: number) => {
        const newValue = (prev += +1);
        return newValue;
      });
    }
  };

  /* Handle Finish Exam */
  const handleFinishExam = () => {
    navigate("/quiz-result");
  };

  return (
    <div className="quiz-questions flexCenterColumn">
      {quizQuestionsArray
        .slice(0, lastIndex)
        .map((item: any, index: number) => {
          return (
            <div className="quiz-questions-item" key={index}>
              <p>{item.title}</p>
              <p>{item.question}</p>

              <div className="answers flexCenterColumn">
                {item.answers.map((answer: any, indexAnswer: number) => {
                  return (
                    <div className="answer flexStart" key={indexAnswer}>
                      <div className="flexCenter">
                        {!answer.check ? (
                          <img
                            src={emptyCircle}
                            alt=""
                            onClick={() =>
                              handleSelectAnswer(
                                answer.check,
                                index,
                                indexAnswer
                              )
                            }
                          />
                        ) : (
                          <img
                            src={fillCircle}
                            alt=""
                            onClick={() =>
                              handleSelectAnswer(
                                answer.check,
                                index,
                                indexAnswer
                              )
                            }
                          />
                        )}
                      </div>
                      <div className="flexCenter">
                        <p>{answer.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="quiz-footer flexBetween">
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
                <Button
                  className="quiz-footer-button"
                  onClick={() => handleNextQuestions(index)}
                >
                  التالي
                </Button>
              </div>
            </div>
          );
        })}

      {/* Hide squares if questions array is fully visible */}
      {!(lastIndex === quizQuestionsArray.length) &&
        squaresArray.map((_: any, index: number) => {
          return <div className="square" key={index}></div>;
        })}
      <Button
        className="quiz-questions-button"
        variant="secondary"
        onClick={handleFinishExam}
      >
        أنه الاختبار الان
      </Button>
    </div>
  );
};

export default QuizQuestions;
