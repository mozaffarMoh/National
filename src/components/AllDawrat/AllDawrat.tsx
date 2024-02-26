import "./AllDawrat.scss";
import arrowGoIcon from "../../assets/images/Dawrat/dawrat-go.svg";
import bookIcon from "../../assets/images/Dawrat/dawrat-book.svg";
import { Link } from "react-router-dom";
import useGet from "../../api/useGet";
import { endPoint } from "../../api/endPoints";

const AllDawrat = () => {
  const uuid =
    "06ae1f82-8df5-413f-bddb-bc2c1fc6ea51&specialty_uuid=e9d9a3b4-7448-4dad-a915-8443e131ff96";
  const degree = "master";
  const [data] = useGet(endPoint.dawrat, {
    isuuid: true,
    uuid: uuid,
    isDegree: true,
    degree: degree,
  });

  const changeBgColor = (index: number) => {
    if (index % 2 === 0) {
      return "all-dawrat-item";
    } else {
      return "all-dawrat-item all-dawrat-item-2";
    }
  };
  return (
    <div className="all-dawrat flexCenterColumn">
      {data &&
        data.map((item: any, index: number) => {
          return (
            <Link
              to={"/dawrat-quiz"}
              key={index}
              className={`${changeBgColor(index)} flexStart`}
            >
              <img src={bookIcon} alt="" />
              <p>{item.name}</p>
              <img src={arrowGoIcon} alt="" className="arrow-go-icon" />
            </Link>
          );
        })}
    </div>
  );
};

export default AllDawrat;
