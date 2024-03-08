import React from "react";
import "./AddQuestion.scss";
import apiNational from "../../../api/apiNational";
import { endPoint } from "../../../api/endPoints";
import { BsArrowLeftCircle } from "react-icons/bs";
import { answersInputsArray } from "./answersArray";

const AddQuestion = ({ setShowAddQuestion, examID, collegeID }: any) => {
  const [subjectsData, setSubjectsData] = React.useState([]);
  const [questionText, setQuestionText] = React.useState("");
  const [questionNumber, setQuestionNumber] = React.useState<number>();
  const [subjectID, setSubjectID] = React.useState<number>();
  const [answersArray, setAnswersArray]: any = React.useState(
    Array(5).fill({ answer_text: "", status: false })
  );

  /* Get Subject */
  React.useEffect(() => {
    if (collegeID) {
      apiNational.get(endPoint.adminSubjects + collegeID).then((res: any) => {
        setSubjectsData(res.data.data);
      });
    }
  }, []);

  /* Handle Add Question */
  const handleAddQuestion = () => {
    apiNational
      .post(endPoint.addQuestion, {
        exam_id: examID,
        subject_id: Number(subjectID),
        question_text: questionText,
        question_number: Number(questionNumber),
        answers: answersArray,
      })
      .then((res) => {
        console.log(res);
        setQuestionNumber(0);
        setQuestionText("");
      });
  };

  /* Handle add answers to answersArray */
  const handleAddAnswer = (e: any, index: number) => {
    const { name } = e.target;
    const currentValue = e.target.value;
    setAnswersArray((prevArray: any) => {
      const newArray = [...prevArray];
      if (name == "answerText") {
        newArray[index] = { ...newArray[index], answer_text: currentValue };
      } else if (name == "answerStatus") {
        newArray[index] = { ...newArray[index], status: Boolean(currentValue) };
      }
      return newArray;
    });
  };

  return (
    <div className="add-question flexCenterColumn">
      <button onClick={() => setShowAddQuestion(false)} className="back-button">
        {" "}
        الرجوع <BsArrowLeftCircle size={30} />{" "}
      </button>
      <h4>إضافة سؤال</h4>

      {/* Select subject */}
      <div className="flexCenter w-100 ">
        <h6>اختر المادة : &nbsp;</h6>
        <select
          className="select-college"
          onChange={(e: any) => setSubjectID(e.target.value)}
        >
          {subjectsData &&
            subjectsData.map((item: any) => {
              return <option value={item.subject_id}>{item.name}</option>;
            })}
        </select>
      </div>

      {/* Choose by inputs */}
      <div className="flexCenterColumn w-100 ">
        <input
          type="number"
          value={questionNumber}
          placeholder="رقم السؤال"
          className="input-number"
          onChange={(e: any) => setQuestionNumber(e.target.value)}
        />
        <textarea
          value={questionText}
          placeholder="نص السؤال"
          onChange={(e: any) => setQuestionText(e.target.value)}
          className="question-text"
        ></textarea>
        {answersInputsArray.map((item: any, index) => {
          return (
            <div key={index} className="w-75 flexCenterColumn">
              <textarea
                name="answerText"
                placeholder={item.placeholder}
                onChange={(e) => handleAddAnswer(e, index)}
              ></textarea>
              <select
                name="answerStatus"
                className="select-answer-status"
                onChange={(e) => handleAddAnswer(e, index)}
              >
                <option value={"false"}>اجابة خاطئة</option>
                <option value={"true"}>اجابة صحيحة</option>
              </select>
            </div>
          );
        })}

        <button onClick={handleAddQuestion}>إضافة</button>
      </div>
    </div>
  );
};

export default AddQuestion;