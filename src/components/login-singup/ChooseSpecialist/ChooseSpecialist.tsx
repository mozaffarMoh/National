import "./ChooseSpecialist.scss";
import { ChooseSpecialistArray } from "./ChooseSpecialistArray";

const ChooseSpecialist = () => {
  return (
    <div className="choose-specialist-from-register">
      <div className="h-25 ">
        <h6>اختر الإختصاص</h6>
      </div>
      <div className="specialist-items flexCenter">
        {ChooseSpecialistArray.map((item, index) => {
          return (
            <div className="specialist-item flexCenter" key={index}>
              <input type={item.type} />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseSpecialist;
