import "./AllDawrat.scss";
import arrowGoIcon from "../../assets/images/Dawrat/dawrat-go.svg";
import bookIcon from "../../assets/images/Dawrat/dawrat-book.svg";
import { Link } from "react-router-dom";

const AllDawrat = () => {
  return (
    <div className="all-dawrat flexCenter">
      <Link to={"/dawrat-quiz"} className="all-dawrat-item flexCenter">
        <img src={bookIcon} alt="" />
        <p>2023 دورة تشرين</p>
        <img src={arrowGoIcon} alt="" className="arrow-go-icon" />
      </Link>
      <Link
        to={"/dawrat-quiz"}
        className="all-dawrat-item all-dawrat-item-2 flexCenter"
      >
        <img src={bookIcon} alt="" />
        <p>2023 دورة تشرين</p>
        <img src={arrowGoIcon} alt="" className="arrow-go-icon" />
      </Link>
    </div>
  );
};

export default AllDawrat;
