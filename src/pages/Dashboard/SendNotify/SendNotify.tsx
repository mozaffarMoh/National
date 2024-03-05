import React from "react";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import "./SendNotify.scss";
import apiNational from "../../../api/apiNational";
import { endPoint } from "../../../api/endPoints";

const SendNotify = () => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [collegeUUID, setCollegeUUID] = React.useState("");
  const [successMessage, setSuccessMesssage] = React.useState("");
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);

  /* Choose college */
  const handleChooseCollege = (e: any) => {
    setCollegeUUID(e.target.value);
  };

  /* send notify */
  const handelSendNotify = () => {
    apiNational
      .post(endPoint.sendNotify, {
        title: title,
        body: body,
        college_uuid: "06ae1f82-8df5-413f-bddb-bc2c1fc6ea51",
      })
      .then((res: any) => {
        console.log(res);
        setSuccessMesssage(res.data.message);
        setTitle("");
        setBody("");
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      });
  };

  return (
    <div>
      <AdminHeader />
      <div className="send-notify flexCenterColumn">
        <h1>إرسال إشعار</h1>
        <select className="select-college" onChange={handleChooseCollege}>
          <option value={"12"}>جميع الكليات</option>
          <option value={"123"}>الطب</option>
          <option value={"1234"}>الصيدلة</option>
          <option value={"12345"}>الهندسة المعلوماتية</option>
        </select>
        <input
          placeholder="العنوان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="الوصف"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={handelSendNotify}>إرسال</button>

        {successMessage && showSuccessMessage && (
          <div className="success-Message flexCenter">
            <p>{successMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SendNotify;
