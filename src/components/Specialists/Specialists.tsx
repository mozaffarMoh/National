import React from "react";
import "./Specialists.scss";
import { SpecialistsImages } from "./specialistsImages";
import ChooseSpecialistOnStart from "../ChooseSpecialist/ChooseSpecialistOnStart";

const Specialists = () => {

  const [showChooseSpecialist, setShowChooseSpecialist] = React.useState(false)


  const handleChoose = (index:number) => {
    if(index === 4){
       setShowChooseSpecialist(true);
    }
  }


  return (
    <div className="specialists flexCenter" id="specialists">
      <div>
        <h2>الإختصاصات</h2>
      </div>
      <div className="specialist-items flexCenter">
        {SpecialistsImages.map((item, index) => {
          return (
            <div
              className="special-item flexCenter"
              key={index}
              onClick={() => handleChoose(index)}
            >
              <img src={item.img} />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
      {showChooseSpecialist && <ChooseSpecialistOnStart />}
    </div>
  );
};

export default Specialists;
