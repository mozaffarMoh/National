import React from "react";
import "./Specialists.scss";
import ChooseSpecialistOnStart from "../ChooseSpecialist/ChooseSpecialistOnStart";
import useGet from "../../api/useGet";
import { endPoint } from "../../api/endPoints";
import Cookies from "js-cookie";
import LoginRequired from "../LoginRequired/LoginRequired";

const Specialists = () => {
  const [showChooseSpecialist, setShowChooseSpecialist] = React.useState(false);
  const [showLoginRequired, setShowLoginRequired] = React.useState(false);
  const [data] = useGet(endPoint.colleges);
  const token = Cookies.get("token");

  const handleSelect = () => {
    token ? setShowChooseSpecialist(true) : setShowLoginRequired(true);
  };
  return (
    <div className="specialists flexBetweenColumn" id="specialists">
      <div className="p-5">
        <h2>الإختصاصات</h2>
      </div>
      <div className="specialist-items flexCenter">
        {data &&
          data.map((item: any, index) => {
            return (
              <div
                className="specialist-item flexCenter"
                key={index}
                onClick={handleSelect}
              >
                <img src={item.image} />
                <p>{item.name}</p>
              </div>
            );
          })}
      </div>
      {showChooseSpecialist && <ChooseSpecialistOnStart />}
      {showLoginRequired && (
        <LoginRequired setShowLoginRequired={setShowLoginRequired} />
      )}
    </div>
  );
};

export default Specialists;
