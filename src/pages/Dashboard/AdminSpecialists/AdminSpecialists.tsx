import React from "react";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import "./AdminSpecialists.scss";
import apiNational from "../../../api/apiNational";
import { endPoint } from "../../../api/endPoints";
import { Table } from "antd";
import useGet from "../../../api/useGet";
import { Button } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { BsCheckSquare, BsXCircle } from "react-icons/bs";

const AdminSpecialists = () => {
  const [data]: any = useGet(endPoint.adminColleges);
  const [name, setName] = React.useState("");
  const [sepcialityID, setSepcialityID] = React.useState("");
  const [nameEdited, setNameEdited] = React.useState("");
  const [collegeID, setCollegeID] = React.useState("");
  const [refreshData, setRefreshData] = React.useState(false);
  const [startEdit, setStartEdit] = React.useState(false);
  const [specialistsData, setSpecialistsData] = React.useState([]);

  /* Edit Speciality */
  const handleEditSpeciality = () => {
    apiNational
      .post(endPoint.editSpecialist, {
        specialty_id: sepcialityID,
        name: nameEdited,
        college_id: collegeID,
      })
      .then((res: any) => {
        console.log(res);
        setStartEdit(false);
        setRefreshData(!refreshData);
      });
  };

  /* start edit process */
  const handlePressOnEdit = (id: any) => {
    setStartEdit(true);
    setSepcialityID(id);
  };

  const columns: any = [
    {
      title: "الرقم التعريفي",
      dataIndex: "specialty_id",
      key: "specialty_id",
    },
    {
      title: "الاسم",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "الكلية",
      dataIndex: "college",
      key: "college",
    },
    {
      title: "التعديل",
      dataIndex: "specialty_id",
      key: "specialty_id",
      render: (id: any) => (
        <div>
          {startEdit && id === sepcialityID ? (
            <div className="edit-field">
              <input
                type="text"
                placeholder="الاسم الجديد"
                onChange={(e) => setNameEdited(e.target.value)}
              />
              <BsXCircle
                size={22}
                className="edit-icons"
                onClick={() => setStartEdit(false)}
              />
              <BsCheckSquare
                size={20}
                className="edit-icons"
                onClick={handleEditSpeciality}
              />
            </div>
          ) : (
            <FaRegEdit
              size={25}
              cursor={"pointer"}
              onClick={() => handlePressOnEdit(id)}
            />
          )}
        </div>
      ),
    },
  ];

  /* Choose college */
  const handleChooseCollege = (e: any) => {
    setCollegeID(e.target.value);
  };

  /* Get Specialists by ID */
  React.useEffect(() => {
    if (collegeID) {
      apiNational
        .get(endPoint.adminSpecialists + collegeID)
        .then((res: any) => {
          setSpecialistsData(res.data.data);
        });
    }
  }, [collegeID, refreshData]);

  /* Add speciality */
  const handleAddSpeciality = () => {
    apiNational
      .post(endPoint.addSpecialist, { name: name, college_id: collegeID })
      .then((res) => {
        console.log(res);
        setRefreshData(!refreshData);
        setName("");
      });
  };

  /* fill CollegeId when data fetched */
  React.useEffect(() => {
    if (!collegeID) {
      setCollegeID(data[0]?.college_id);
    }
  }, [data]);

  return (
    <div>
      <AdminHeader />
      <div className="admin-specialists flexCenterColumn">
        <h2>الإختصاصات</h2>
        <select className="select-college" onChange={handleChooseCollege}>
          {data &&
            data.map((item: any) => {
              return <option value={item.college_id}>{item.name}</option>;
            })}
        </select>
        <div className="table-container">
          {specialistsData && (
            <Table dataSource={specialistsData} columns={columns} />
          )}
        </div>

        <div className="add-speciality">
          <h4>إضافة اختصاص : </h4>
          <p>حدد اسم الكلية من القائمة في الأعلى ثم أضف اسم الاختصاص</p>
          <input
            type="text"
            value={name}
            placeholder="اسم الاختصاص"
            onChange={(e: any) => setName(e.target.value)}
          />
          <br />
          <Button variant="secondary" onClick={handleAddSpeciality}>
            إضافة
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminSpecialists;
