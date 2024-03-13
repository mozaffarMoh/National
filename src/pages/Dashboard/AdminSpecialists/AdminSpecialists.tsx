import React from "react";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import "./AdminSpecialists.scss";
import apiNational from "../../../api/apiNational";
import { endPoint } from "../../../api/endPoints";
import { Table } from "antd";
import useGet from "../../../api/useGet";
import { Button, Spinner } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { BsCheckSquare, BsXCircle } from "react-icons/bs";
import Loading from "../../../components/Loading/Loading";

const AdminSpecialists = () => {
  const [data, , , , loading]: any = useGet(endPoint.adminColleges);
  const [postLoading, setPostLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [sepcialityID, setSepcialityID] = React.useState("");
  const [nameEdited, setNameEdited] = React.useState("");
  const [collegeID, setCollegeID] = React.useState("");
  const [refreshData, setRefreshData] = React.useState(false);
  const [startEdit, setStartEdit] = React.useState(false);
  const [specialistsData, setSpecialistsData] = React.useState([]);
  const [specialistsLoading, setSpecialistsLoading] = React.useState(false);

  /* Edit Speciality */
  const handleEditSpeciality = () => {
    setPostLoading(true);
    apiNational
      .post(endPoint.editSpecialist, {
        specialty_id: sepcialityID,
        name: nameEdited,
        college_id: collegeID,
      })
      .then((res: any) => {
        setPostLoading(false);
        console.log(res);
        setStartEdit(false);
        setRefreshData(!refreshData);
      })
      .catch((err: any) => {
        setPostLoading(false);
        console.log(err);
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
      setSpecialistsLoading(true);
      apiNational
        .get(endPoint.adminSpecialists + collegeID)
        .then((res: any) => {
          setSpecialistsLoading(false);
          setSpecialistsData(res.data.data);
        })
        .catch((err: any) => {
          console.log(err);
          setSpecialistsLoading(false);
        });
    }
  }, [collegeID, refreshData]);

  /* Add speciality */
  const handleAddSpeciality = () => {
    setPostLoading(true);
    apiNational
      .post(endPoint.addSpecialist, { name: name, college_id: collegeID })
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

  /* fill CollegeId when data fetched */
  React.useEffect(() => {
    if (!collegeID) {
      setCollegeID(data[0]?.college_id);
    }
  }, [data]);

  return (
    <div>
      <AdminHeader />
      {postLoading && <Loading />}
      <div className="admin-specialists flexCenterColumn">
        <h2>الإختصاصات</h2>
        <div className="flexCenter w-100 ">
          <h5> الكلية : &nbsp;</h5>
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
        <div className="table-container">
          {specialistsData && !specialistsLoading ? (
            <Table dataSource={specialistsData} columns={columns} />
          ) : (
            <div className="dashboard-spinner">
              <Spinner />
            </div>
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
