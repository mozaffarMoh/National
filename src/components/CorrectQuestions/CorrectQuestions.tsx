import "./CorrectQuestions.scss";
import React from "react";
import { Button } from "react-bootstrap";
import { CorrectQuestionsArray } from "./CorrectQuestionsArray";
import emptyCircle from "../../assets/images/QuizResult/nonSelected.svg";
import successIcon from "../../assets/images/QuizResult/answerSuccessIcon.svg";
import successCircle from "../../assets/images/QuizResult/answerSuccess.svg";
import wrongIcon from "../../assets/images/QuizResult/answerWrongIcon.svg";
import wrongCircle from "../../assets/images/QuizResult/answerWrong.svg";
import starEmptyIcon from "../../assets/images/QuizResult/starEmpty.png";
import starHoverIcon from "../../assets/images/QuizResult/starHover.png";
import starFillIcon from "../../assets/images/QuizResult/starFill.svg";
import bookIcon from "../../assets/images/QuizResult/book.svg";

const CorrectQuestions = () => {
  const squaresArray = Array(3).fill("");
  const [showFillStar, setShowFillStar] = React.useState(false);
  const [showHoverStar, setShowHoverStar] = React.useState(false);

  /* Handle Circle Image */
  const handleCircleImage = (value: any) => {
    if (value && value === "success") {
      return successCircle;
    } else if (value && value === "wrong") {
      return wrongCircle;
    } else {
      return emptyCircle;
    }
  };

  /* Handle Change Color */
  const handleChangeColor = (value?: any) => {
    if (value && value === "success") {
      return "success-answer";
    } else if (value && value === "wrong") {
      return "wrong-answer";
    } else {
      return;
    }
  };

  return (
    <div className="correct-questions flexCenterColumn">
      {CorrectQuestionsArray.slice(0, 3).map((item: any, index: number) => {
        return (
          <div className="correct-questions-item" key={index}>
            <p>{item.title}</p>
            <p>{item.question}</p>

            <div className="answers flexCenterColumn">
              {item.answers.map((child: any, index: number) => {
                return (
                  <div
                    className={`answer flexBetween ${handleChangeColor(
                      child.value
                    )}`}
                    key={index}
                  >
                    <div className="flexCenter gap-2">
                      <img src={handleCircleImage(child.value)} alt="" />
                      <p>{child.answer}</p>
                    </div>
                    <div className="flexCenter">
                      {child.value && child.value === "success" && (
                        <img src={successIcon} />
                      )}
                      {child.value && child.value === "wrong" && (
                        <img src={wrongIcon} className="" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="correct-footer flexBetween">
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
              <Button className="correct-footer-button">التالي</Button>
            </div>
          </div>
        );
      })}
      {squaresArray.map((_, index) => {
        return <div className="square" key={index}></div>;
      })}
    </div>
  );
};

export default CorrectQuestions;
