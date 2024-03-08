import React from "react";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import "./SendNotify.scss";
import apiNational from "../../../api/apiNational";
import { endPoint } from "../../../api/endPoints";
import useGet from "../../../api/useGet";

const SendNotify = () => {
  const [data]: any = useGet(endPoint.colleges);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [collegeUUID, setCollegeUUID] = React.useState("all");
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
        college_uuid: collegeUUID,
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
        <h2>إرسال إشعار</h2>
        <select
          defaultValue={"all"}
          className="select-college"
          onChange={handleChooseCollege}
        >
          <option value={"all"}>جميع الكليات</option>
          {data &&
            data.map((item: any) => {
              return <option value={item.college_uuid}>{item.name}</option>;
            })}
        </select>
        <input
          placeholder="العنوان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="الوصف"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
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
