import "./ClassificationList.scss";
import useGet from "../../api/useGet";
import { endPoint } from "../../api/endPoints";

const ClassificationList = () => {
  const classificationsArray = [
    { title: "المترجمات" },
    { title: "الذكاء الاصطناعي" },
    { title: "قواعد المعطيات" },
    { title: "الأوتومات" },
    { title: "الشبكات" },
    { title: "هندسة البرمجيات" },
    { title: "امن المعلومات" },
  ];

  const uuid = "06ae1f82-8df5-413f-bddb-bc2c1fc6ea51";
  const [data] = useGet(endPoint.collegeSubject, {
    isuuid: true,
    uuid: uuid,
  });

  return (
    <div className="classificationList flexCenterColumn">
      <h1>التصنيفات</h1>
      <div className="classificationList-items flexCenter">
        {data &&
          data.map((item: any, index) => {
            return (
              <div key={index} className="classificationList-item flexCenter">
                <p>{item.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ClassificationList;
