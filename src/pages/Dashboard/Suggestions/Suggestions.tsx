import { Table } from "antd";
import apiNational from "../../../api/apiNational";
import { endPoint } from "../../../api/endPoints";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import "./Suggestions.scss";
import useGet from "../../../api/useGet";
import { RiDeleteBin5Line } from "react-icons/ri";

const Suggestions = () => {
  const [data, setData]: any = useGet(endPoint.suggestions);

  /* Handle delete Suggetions */
  const handleDelete = (id: any) => {
    apiNational.get(endPoint.deleteSuggestions + id).then((res) => {
      console.log(res);
      setData((prevData: any) =>
        prevData.filter((item: any) => item.suggestion_id !== id)
      );
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
      <div className="suggestions-ads flexCenterColumn">
        <h2>الاقتراحات</h2>
        <div className="table-container">
          <Table dataSource={data} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
