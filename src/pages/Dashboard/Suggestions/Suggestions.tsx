import { Table } from "antd";
import apiNational from "../../../api/apiNational";
import { endPoint } from "../../../api/endPoints";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import "./Suggestions.scss";
import useGet from "../../../api/useGet";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Spinner } from "react-bootstrap";
import React from "react";
import Loading from "../../../components/Loading/Loading";

const Suggestions = () => {
  const [data, setData, , , loading]: any = useGet(endPoint.suggestions);
  const [postLoading, setPostLoading] = React.useState(false);

  /* Handle delete Suggetions */
  const handleDelete = (id: any) => {
    setPostLoading(true);
    apiNational
      .get(endPoint.deleteSuggestions + id)
      .then((res) => {
        setPostLoading(false);
        console.log(res);
        setData((prevData: any) =>
          prevData.filter((item: any) => item.suggestion_id !== id)
        );
      })
      .catch((err: any) => {
        setPostLoading(false);
        console.log(err);
      });
  };

  const columns = [
    {
      title: "الرقم التعريفي",
      dataIndex: "suggestion_id",
      key: "suggestion_id",
    },
    {
      title: "النص",
      dataIndex: "text",
      key: "text",
    },
    {
      title: "اسم المستخدم",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "حذف الاقتراح",
      dataIndex: "suggestion_id",
      key: "suggestion_id",
      render: (id: number) => (
        <RiDeleteBin5Line
          color="blue"
          size={30}
          onClick={() => handleDelete(id)}
          cursor={"pointer"}
        />
      ),
    },
  ];

  return (
    <div>
      <AdminHeader />
      {postLoading && <Loading />}
      <div className="suggestions-ads flexCenterColumn">
        <h2>الاقتراحات</h2>
        <div className="table-container">
          {data && !loading ? (
            <Table dataSource={data} columns={columns} />
          ) : (
            <div className="dashboard-spinner">
              <Spinner />
            </div>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
