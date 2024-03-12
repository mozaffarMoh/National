import "./AllDawrat.scss";
import arrowGoIcon from "../../assets/images/Dawrat/dawrat-go.svg";
import bookIcon from "../../assets/images/Dawrat/dawrat-book.svg";
import { useNavigate } from "react-router-dom";
import useGet from "../../api/useGet";
import { endPoint } from "../../api/endPoints";
import Cookies from "js-cookie";

const AllDawrat = () => {
  const navigate = useNavigate();
  const collegeUUID = Cookies.get("collegeUUID");
  const specialityUUID = Cookies.get("specialityUUID");
  const degree = Cookies.get("degree");
  const [data]: any = useGet(endPoint.quizByDegree, {
    isCollege_UUID: true,
    isSpeciality_UUID: true,
    isDegree: true,
    college_UUID: collegeUUID,
    speciality_UUID: specialityUUID,
    degree: degree,
  });

  const changeBgColor = (index: number) => {
    if (index % 2 === 0) {
      return "all-dawrat-item";
    } else {
      return "all-dawrat-item all-dawrat-item-2";
    }
  };

  /* Handle choose dawrat */
  const handleChooseDawrat = (uuid: any) => {
    Cookies.set("isSpecialityUUID", "true");
    Cookies.set("isExamUUID", "true");
    Cookies.set("isSubjectUUID", "");
    Cookies.set("examUUID", uuid);
    navigate("/quiz-page");
  };

  return (
    <div className="all-dawrat flexCenterColumn">
      {data &&
        data.map((item: any, index: number) => {
          return (
            <button
              key={index}
              className={`${changeBgColor(index)} flexStart`}
              onClick={() => handleChooseDawrat(item.exam_uuid)}
            >
              <img src={bookIcon} alt="" />
              <p>{item.name}</p>
              <img src={arrowGoIcon} alt="" className="arrow-go-icon" />
            </button>
          );
        })}
    </div>
  );
};

export default AllDawrat;
