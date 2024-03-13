import { Table } from "antd";
import { endPoint } from "../../../api/endPoints";
import useGet from "../../../api/useGet";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import "./AdminUsers.scss";
import React from "react";
import { Button, Spinner } from "react-bootstrap";
import apiNational from "../../../api/apiNational";
import Loading from "../../../components/Loading/Loading";

const AdminUsers = () => {
  const [data, , , , loading]: any = useGet(endPoint.showUsers);
  const [postLoading, setPostLoading]: any = React.useState(false);
  const [userID, setUserID] = React.useState();
  const [code, setCode] = React.useState();
  const columns: any = [
    {
      title: "الرقم التعريفي ",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "الاسم",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "رقم الجوال",
      dataIndex: "phone",
      key: "phone",
    },
  ];

  /* Generate new code */
  const handleGenerateCode = () => {
    setPostLoading(true);
    apiNational
      .post(endPoint.generateCode, { user_id: userID })
      .then((res: any) => {
        setPostLoading(false);
        console.log(res);
        setCode(res.data.data.code);
      })
      .catch((err) => {
        setPostLoading(false);
        console.log(err);
      });
  };

  return (
    <div>
      <AdminHeader />
      {postLoading && <Loading />}
      <div className="admin-users flexCenterColumn">
        <h2>جميع المستخدمين</h2>
        <div className="generate-code">
          <h5>إنشاء رمز دخول للمستخدم : </h5>
          <input
            type="text"
            value={userID}
            placeholder="الرقم التعريفي"
            onChange={(e: any) => setUserID(e.target.value)}
          />
          <br />
          <Button variant="secondary" onClick={handleGenerateCode}>
            إنشاء
          </Button>
          {code && <p>Code generated is : {code}</p>}
        </div>
        <div className="table-container">
          {data && !loading ? (
            <Table dataSource={data} columns={columns} />
          ) : (
            <div className="dashboard-spinner">
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
