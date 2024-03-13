import React from "react";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import "./AdminSubjects.scss";
import apiNational from "../../../api/apiNational";
import { endPoint } from "../../../api/endPoints";
import { Table } from "antd";
import useGet from "../../../api/useGet";
import { Button, Spinner } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { BsCheckSquare, BsXCircle } from "react-icons/bs";
import Loading from "../../../components/Loading/Loading";

const AdminSubjects = () => {
  const [data, , , , loading]: any = useGet(endPoint.adminColleges);
  const [postLoading, setPostLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [subjectID, setSubjectID] = React.useState("");
  const [specialityID, setSpecialityID] = React.useState("");
  const [nameEdited, setNameEdited] = React.useState("");
  const [collegeID, setCollegeID] = React.useState("1");
  const [refreshData, setRefreshData] = React.useState(false);
  const [startEdit, setStartEdit] = React.useState(false);
  const [specialistsLoading, setSpecialistsLoading] = React.useState(false);
  const [subjectsLoading, setSubjectsLoading] = React.useState(false);
  const [subjectsData, setSubjectsData] = React.useState([]);
  const [specialistsData, setSpecialistsData] = React.useState([]);

  /* Edit Subject */
  const handleEditSubject = () => {
    setPostLoading(true);
    apiNational
      .post(endPoint.editSubject, {
        subject_id: subjectID,
        specialty_id: specialityID,
        name: nameEdited,
        college_id: collegeID,
      })
      .then((res: any) => {
        console.log(res);
        setPostLoading(false);
        setStartEdit(false);
        setRefreshData(!refreshData);
      })
      .catch((err: any) => {
        setPostLoading(false);
        console.log(err);
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
      setSpecialistsLoading(true);
      setSubjectsLoading(true);
      apiNational
        .get(endPoint.adminSubjects + collegeID)
        .then((res: any) => {
          setSpecialistsLoading(false);
          setSubjectsData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          setSpecialistsLoading(false);
        });
      apiNational
        .get(endPoint.adminSpecialists + collegeID)
        .then((res: any) => {
          setSubjectsLoading(false);
          setSpecialistsData(res.data.data);
        })
        .catch((err) => {
          setSubjectsLoading(false);
          console.log(err);
        });
    }
  }, [collegeID, refreshData]);

  /* Add subject */
  const handleAddSubject = () => {
    setPostLoading(true);
    apiNational
      .post(endPoint.addSubject, {
        name: name,
        college_id: collegeID,
        specialty_id: specialityID,
      })
      .then((res) => {
        setPostLoading(false);
        console.log(res);
        setRefreshData(!refreshData);
        setName("");
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
      <div className="admin-subjects flexCenterColumn">
        <h2>المواد</h2>

        <div className="flexCenter w-100">
          <div className="flexCenterColumn w-50">
            <h5 className="mb-2">الكلية : &nbsp;</h5>
            <h5 className="mt-3">الاختصاص : &nbsp;</h5>
          </div>
          <div className="flexCenterColumnItemsStart w-100  ">
            <div className="w-100 flexStart">
              <select className="select-college" onChange={handleChooseCollege}>
                {data &&
                  data.map((item: any) => {
                    return <option value={item.college_id}>{item.name}</option>;
                  })}
              </select>
              {loading && (
                <div className="flexCenter overflow-hidden">
                  <Spinner className="select-spinner" />
                </div>
              )}
            </div>
            <div className="w-100 flexStart">
              <select
                className="select-college"
                onChange={handleChooseSpecialist}
              >
                <option value={""}>جميع الاختصاصات</option>;
                {specialistsData &&
                  specialistsData.map((item: any) => {
                    return (
                      <option value={item.specialty_id}>{item.name}</option>
                    );
                  })}
              </select>
              {specialistsLoading && (
                <div className="flexCenter overflow-hidden">
                  <Spinner className="select-spinner" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="table-container">
          {subjectsData && !subjectsLoading ? (
            <Table dataSource={subjectsData} columns={columns} />
          ) : (
            <div className="dashboard-spinner">
              <Spinner />
            </div>
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
