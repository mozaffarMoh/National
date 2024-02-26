import { Button } from "react-bootstrap";
import "./ChooseSpecialistOnStart.scss";
import { useNavigate } from "react-router-dom";
import useGet from "../../api/useGet";
import { endPoint } from "../../api/endPoints";

const ChooseSpecialistOnStart = () => {
  const navigate = useNavigate();

  const examTypeArray = [{ title: "ماستر" }, { title: "تخرج" }];

  const handleClick = () => {
    navigate("/special-selection");
  };

  const uuid = "06ae1f82-8df5-413f-bddb-bc2c1fc6ea51";
  const [data] = useGet(endPoint.collegeSpeciality, {
    isuuid: true,
    uuid: uuid,
  });

  return (
    <div className="choose-specialist-on-start flexCenterColumn">
      <h1>الرجاء تحديد الأختصاص و نوع الفحص الوطني</h1>

      <div className="choose-specialist-on-start-section flexCenterColumn  ">
        <p>الاختصاص</p>
        <div className="choose-specialist-on-start-items flexCenterItemsStart overflow-y-auto ">
          {data &&
            data.map((item: any, index) => {
              return (
                <div
                  key={index}
                  className="choose-specialist-on-start-item flexCenter"
                >
                  <p>{item.name}</p>
                </div>
              );
            })}
        </div>
      </div>

      <div className="choose-specialist-on-start-section flexCenterColumn ">
        <p>نوع الامتحان</p>
        <div className="choose-specialist-on-start-items flexCenter">
          {examTypeArray.map((item, index) => {
            return (
              <div
                key={index}
                className="choose-specialist-on-start-item flexCenter"
              >
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Button
        className="choose-specialist-on-start-button"
        variant="secondary"
        onClick={handleClick}
      >
        التالي
      </Button>
    </div>
  );
};

export default ChooseSpecialistOnStart;
