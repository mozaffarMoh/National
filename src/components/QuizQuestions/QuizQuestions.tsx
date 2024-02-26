import "./QuizQuestions.scss";
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import emptyCircle from "../../assets/images/QuizResult/nonSelected.svg";
import fillCircle from "../../assets/images/QuizResult/selected.svg";
import successIcon from "../../assets/images/QuizResult/answerSuccessIcon.svg";
import starEmptyIcon from "../../assets/images/QuizResult/starEmpty.png";
import starHoverIcon from "../../assets/images/QuizResult/starHover.png";
import starFillIcon from "../../assets/images/QuizResult/starFill.svg";
import bookIcon from "../../assets/images/QuizResult/book.svg";
import { endPoint } from "../../api/endPoints";
import useGet from "../../api/useGet";

const QuizQuestions = () => {
  const squaresArray = Array(3).fill("");
  const navigate = useNavigate();
  const [showFillStar, setShowFillStar] = React.useState(false);
  const [showHoverStar, setShowHoverStar] = React.useState(false);
  const [lastIndex, setLastIndex] = React.useState<number | any>(1);

  const uuid =
    "06ae1f82-8df5-413f-bddb-bc2c1fc6ea51&specialty_uuid=e9d9a3b4-7448-4dad-a915-8443e131ff96&exam_uuid=8c0da07e-2ad6-4697-9dfd-d8dc626d75e2";
  const [data]: any = useGet(endPoint.exam, {
    isuuid: true,
    uuid: uuid,
  });

  const [questionsArray, setQuestionsArray]: any = React.useState();

  /* add choose option to a new array */
  React.useEffect(() => {
    if (data) {
      const newArray = [...data];
      for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newArray[i].answers.length; j++) {
          let answer_text = newArray[i].answers[j].answer_text;
          let status = newArray[i].answers[j].status;

          newArray[i].answers[j] = { answer_text, status, choose: 0 };
        }
      }
      setQuestionsArray(newArray);
    }
  }, [data]);

  /* Handle Select Answer */
  const handleSelectAnswer = (index: number, indexAnswer: number) => {
    for (let i = 0; i < questionsArray[index].answers.length; i++) {
      setQuestionsArray((prevArray: any) => {
        const newArray = [...prevArray];
        newArray[index].answers[i] = {
          ...newArray[index].answers[i],
          choose: 0,
        };
        return newArray;
      });
    }

    setQuestionsArray((prevArray: any) => {
      const newArray = [...prevArray];
      newArray[index].answers[indexAnswer] = {
        ...newArray[index].answers[indexAnswer],
        choose: 1,
      };
      return newArray;
    });
  };

  /* Handle Remove answer selected */
  const handleRemoveSelectAnswer = (index: number, indexAnswer: number) => {
    setQuestionsArray((prevArray: any) => {
      const newArray = [...prevArray];
      newArray[index].answers[indexAnswer] = {
        ...newArray[index].answers[indexAnswer],
        choose: 0,
      };
      return newArray;
    });
  };

  /* Show next question | If the last element of the Correct Questions Array is shown, this function will not work */
  const handleNextQuestions = (index: number) => {
    if (index === lastIndex - 1 && lastIndex < data.length) {
      setLastIndex((prev: any) => prev + 1);
    }
  };

  /* Handle Finish Exam */
  const handleFinishExam = () => {
    navigate("/quiz-result", {
      state: {
        dataValue: JSON.stringify({ data: questionsArray.slice(0, lastIndex) }),
        questionsNum : lastIndex
      },
    });
  };

  return (
    <div className="quiz-questions flexCenterColumn">
      {questionsArray &&
        questionsArray.slice(0, lastIndex).map((item: any, index: number) => {
          return (
            <div className="quiz-questions-item" key={index}>
              <p>السؤال الأول</p>
              <p>{item.question_text}</p>

              <div className="answers flexCenterColumn">
                {item.answers.map((answer: any, indexAnswer: number) => {
                  return (
                    <div className="answer flexStart" key={indexAnswer}>
                      <div className="flexCenter">
                        {answer.choose === 0 ? (
                          <img
                            src={emptyCircle}
                            alt=""
                            onClick={() =>
                              handleSelectAnswer(index, indexAnswer)
                            }
                          />
                        ) : (
                          <img
                            src={fillCircle}
                            alt=""
                            onClick={() =>
                              handleRemoveSelectAnswer(index, indexAnswer)
                            }
                          />
                        )}
                      </div>
                      <div className="flexCenter">
                        <p>{answer.answer_text}</p>
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
      {!(lastIndex === data.length) &&
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
