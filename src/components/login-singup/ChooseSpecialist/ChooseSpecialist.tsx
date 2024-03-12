import React from "react";
import "./ChooseSpecialist.scss";
import emptyCheckBox from "../../../assets/images/ChooseSpecialist/empty.svg";
import filledCheckBox from "../../../assets/images/ChooseSpecialist/fill.svg";
import { endPoint } from "../../../api/endPoints";
import useGet from "../../../api/useGet";

const ChooseSpecialist = ({ setCollegeUUIDProp }: any) => {
  const [data]: any = useGet(endPoint.colleges);
  const [collegeUUID, setCollegeUUID] = React.useState("");

  /* Handle press on college */
  const handleCheckbox = (uuid: any) => {
    setCollegeUUID(uuid);
    setCollegeUUIDProp(uuid);
  };

  return (
    <div className="choose-specialist-from-register">
      <div className="h-25 ">
        <h6>اختر الإختصاص</h6>
      </div>
      <div className="specialist-items flexCenter">
        {data &&
          data.map((item: any, index: number) => {
            return (
              <div className="specialist-item flexCenter" key={index}>
                <img
                  src={
                    item.college_uuid === collegeUUID
                      ? filledCheckBox
                      : emptyCheckBox
                  }
                  onClick={() => handleCheckbox(item.college_uuid)}
                />
                <p>{item.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ChooseSpecialist;
