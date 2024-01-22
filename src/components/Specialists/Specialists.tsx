import "./Specialists.scss";
import { SpecialistsImages } from "./specialistsImages";

const Specialists = () => {
  return (
    <div className="specialists flexCenter">
      <div>

      <h2>الإختصاصات</h2>
      </div>
      <div className="specialist-items flexCenter">
        {SpecialistsImages.map((item, index) => {
          return (
            <div className="special-item flexCenter" key={index}>
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
