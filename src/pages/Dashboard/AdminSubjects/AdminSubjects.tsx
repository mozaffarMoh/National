import React from "react";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import "./AdminSubjects.scss";
import apiNational from "../../../api/apiNational";
import { endPoint } from "../../../api/endPoints";
import { Table } from "antd";
import useGet from "../../../api/useGet";
import { Button } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { BsCheckSquare, BsXCircle } from "react-icons/bs";

const AdminSubjects = () => {
  const [data]: any = useGet(endPoint.adminColleges);
  const [name, setName] = React.useState("");
  const [subjectID, setSubjectID] = React.useState("");
  const [specialityID, setSpecialityID] = React.useState("");
  const [nameEdited, setNameEdited] = React.useState("");
  const [collegeID, setCollegeID] = React.useState("1");
  const [refreshData, setRefreshData] = React.useState(false);
  const [startEdit, setStartEdit] = React.useState(false);
  const [subjectsData, setSubjectsData] = React.useState([]);
  const [specialistsData, setSpecialistsData] = React.useState([]);

  /* Edit Subject */
  const handleEditSubject = () => {
    apiNational
      .post(endPoint.editSubject, {
        subject_id: subjectID,
        specialty_id: specialityID,
        name: nameEdited,
        college_id: collegeID,
      })
      .then((res: any) => {
        console.log(res);
        setStartEdit(false);
        setRefreshData(!refreshData);
      });
  };

  const handlePressOnEdit = (id: any) => {
    setStartEdit(true);
    setSubjectID(id);
  };

  const columns: any = [
    {
      title: "الرقم التعريفي",
      dataIndex: "subject_id",
      key: "subject_id",
    },
    {
      title: "الاسم",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "التعديل",
      dataIndex: "subject_id",
      key: "subject_id",
      render: (id: any) => (
        <div>
          {startEdit && id === subjectID ? (
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
                onClick={handleEditSubject}
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

  /* Choose Specialist */
  const handleChooseSpecialist = (e: any) => {
    setSpecialityID(e.target.value);
  };

  /* Get Subjects and Specialists by ID */
  React.useEffect(() => {
    if (collegeID) {
      apiNational.get(endPoint.adminSubjects + collegeID).then((res: any) => {
        setSubjectsData(res.data.data);
      });
      apiNational
        .get(endPoint.adminSpecialists + collegeID)
        .then((res: any) => {
          setSpecialistsData(res.data.data);
        });
    }
  }, [collegeID, refreshData]);

  /* Add subject */
  const handleAddSubject = () => {
    apiNational
      .post(endPoint.addSubject, {
        name: name,
        college_id: collegeID,
        specialty_id: specialityID,
      })
      .then((res) => {
        console.log(res);
        setRefreshData(!refreshData);
        setName("");
      });
  };

  return (
    <div>
      <AdminHeader />
      <div className="admin-subjects flexCenterColumn">
        <h2>المواد</h2>

        <div className="flexCenter w-100">
          <div className="flexCenterColumn w-50">
            <h5 className="mb-2">الكلية : &nbsp;</h5>
            <h5 className="mt-3">الاختصاص : &nbsp;</h5>
          </div>
          <div className="flexCenterColumnItemsStart w-100  ">
            <select className="select-college" onChange={handleChooseCollege}>
              {data &&
                data.map((item: any) => {
                  return <option value={item.college_id}>{item.name}</option>;
                })}
            </select>
            <select
              className="select-college"
              onChange={handleChooseSpecialist}
            >
              <option value={""}>جميع الاختصاصات</option>;
              {specialistsData &&
                specialistsData.map((item: any) => {
                  return <option value={item.specialty_id}>{item.name}</option>;
                })}
            </select>
          </div>
        </div>
        <div className="table-container">
          {subjectsData && (
            <Table dataSource={subjectsData} columns={columns} />
          )}
        </div>

        <div className="add-subject">
          <h4>إضافة مادة : </h4>
          <p>
            حدد اسم الكلية واسم الاختصاص من القائمة في الأعلى ثم أضف اسم المادة
          </p>
          <input
            type="text"
            value={name}
            placeholder="اسم المادة"
            onChange={(e: any) => setName(e.target.value)}
          />
          <br />
          <Button variant="secondary" onClick={handleAddSubject}>
            إضافة
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminSubjects;
