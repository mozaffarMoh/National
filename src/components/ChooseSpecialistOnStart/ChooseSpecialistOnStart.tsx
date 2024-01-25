import "./ChooseSpecialistOnStart.scss";

const ChooseSpecialistOnStart = () => {
  const speicalistArray = [
    { title: "هندسة برمجيات" },
    { title: "الذكاء الاصطناعي" },
    { title: "الشبكات" },
  ];

  const examTypeArray = [{ title: "ماستر" }, { title: "تخرج" }];

  return (
    <div className="choose-specialist-on-start flexCenterColumn">
      <h1>الرجاء تحديد الأختصاص و نوع الفحص الوطني</h1>

      <div className="choose-specialist-on-start-section flexCenterColumn ">
        <p>الاختصاص</p>
        <div className="choose-specialist-on-start-items flexCenter">
          {speicalistArray.map((item, index) => {
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

      <div className="choose-specialist-on-start-section flexCenterColumn ">
        <p>الاختصاص</p>
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
    </div>
  );
};

export default ChooseSpecialistOnStart;
