import React from "react";
import "./ChooseSpecialist.scss";
import { ChooseSpecialistArray } from "./ChooseSpecialistArray";
import emptyCheckBox from "../../../assets/images/ChooseSpecialist/empty.svg";
import filledCheckBox from "../../../assets/images/ChooseSpecialist/fill.svg";

const ChooseSpecialist = () => {
  const [checkedItems, setCheckedItems] = React.useState(
    Array(ChooseSpecialistArray.length).fill(false)
  );

  const handleCheckbox = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <div className="choose-specialist-from-register">
      <div className="h-25 ">
        <h6>اختر الإختصاص</h6>
      </div>
      <div className="specialist-items flexCenter">
        {ChooseSpecialistArray.map((item, index) => {
          return (
            <div className="specialist-item flexCenter" key={index}>
              <img
                src={checkedItems[index] ? filledCheckBox : emptyCheckBox}
                onClick={() => handleCheckbox(index)}
              />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseSpecialist;
