import React from "react";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import "./SendNotify.scss";
import apiNational from "../../../api/apiNational";
import { endPoint } from "../../../api/endPoints";
import useGet from "../../../api/useGet";
import { Spinner } from "react-bootstrap";
import Loading from "../../../components/Loading/Loading";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SendNotify = () => {
  const navigate = useNavigate();
  const [data, , , , loading]: any = useGet(endPoint.colleges);
  const [postLoading, setPostLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [collegeUUID, setCollegeUUID] = React.useState("all");
  const [successMessage, setSuccessMesssage] = React.useState("");
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const token = Cookies.get("token");

  /* Check token */
  React.useEffect(() => {
    if (!token) {
      navigate("/dashboard/login");
    }
  }, []);

  /* Choose college */
  const handleChooseCollege = (e: any) => {
    setCollegeUUID(e.target.value);
  };

  /* send notify */
  const handelSendNotify = () => {
    setPostLoading(true);
    apiNational
      .post(endPoint.sendNotify, {
        title: title,
        body: body,
        college_uuid: collegeUUID,
      })
      .then((res: any) => {
        setPostLoading(false);
        console.log(res);
        setSuccessMesssage(res.data.message);
        setTitle("");
        setBody("");
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      })
      .catch((err: any) => {
        setPostLoading(false);
        console.log(err);
      });
  };

  return (
    <div>
      <AdminHeader />
      {postLoading && <Loading />}
      <div className="send-notify flexCenterColumn">
        <h2>إرسال إشعار</h2>

        <div className="w-100 flexCenter">
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
          {loading && (
            <div className="flexCenter overflow-hidden">
              <Spinner className="select-spinner" />
            </div>
          )}
        </div>
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
