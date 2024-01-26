import "./ClassificationList.scss";

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
  
  return (
    <div className="classificationList flexCenter">
      <h1>التصنيفات</h1>
      <div className="classificationList-items flexCenter">
        {classificationsArray.map((item, index) => {
          return (
            <div key={index} className="classificationList-item flexCenter">
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassificationList;
