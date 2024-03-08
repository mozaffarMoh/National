import { Table } from "antd";
import { endPoint } from "../../../api/endPoints";
import useGet from "../../../api/useGet";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import "./AdminUsers.scss";
import React from "react";
import { Button } from "react-bootstrap";
import apiNational from "../../../api/apiNational";

const AdminUsers = () => {
  const [data]: any = useGet(endPoint.showUsers);
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
    apiNational
      .post(endPoint.generateCode, { user_id: userID })
      .then((res: any) => {
        console.log(res);
        setCode(res.data.data.code);
      });
  };

  return (
    <div>
      <AdminHeader />
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
          {data && <Table dataSource={data} columns={columns} />}
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
