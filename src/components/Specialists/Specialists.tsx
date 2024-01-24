import "./Specialists.scss";
import { SpecialistsImages } from "./specialistsImages";
import { useNavigate } from "react-router-dom";

const Specialists = () => {
  const navigate = useNavigate();

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
              onClick={() => navigate("/special-selection")}
            >
              <img src={item.img} />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Specialists;
