import React from "react";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import "./AdminExams.scss";
import apiNational from "../../../api/apiNational";
import { endPoint } from "../../../api/endPoints";
import { Table } from "antd";
import useGet from "../../../api/useGet";
import { Button } from "react-bootstrap";
import { IoAddCircleSharp } from "react-icons/io5";
import AddQuestion from "../../../components/Dashboard/AddQuestion/AddQuestion";

const AdminExams = () => {
  const [data]: any = useGet(endPoint.adminColleges);
  const [name, setName] = React.useState("");
  const [collegeID, setCollegeID] = React.useState("1");
  const [specialityID, setSpecialityID] = React.useState("");
  const [examType, setExamType] = React.useState("exam");
  const [examDegree, setExamDegree] = React.useState("graduation");
  const [specialistsData, setSpecialistsData] = React.useState([]);
  const [refreshData, setRefreshData] = React.useState(false);
  const [examsData, setExamsData] = React.useState([]);
  const [examID, setExamID] = React.useState("");
  const [showAddQuestion, setShowAddQuestion] = React.useState(false);

  /* Handle add question */
  const handleAddQuestion = (id: any) => {
    setShowAddQuestion(true);
    setExamID(id);
  };

  const columns: any = [
    {
      title: "الرقم التعريفي",
      dataIndex: "exam_id",
      key: "exam_id",
    },
    {
      title: "الاسم",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "الاختصاص",
      dataIndex: "specialty",
      key: "specialty",
    },
    {
      title: "الدرجة",
      dataIndex: "degree",
      key: "degree",
    },
    {
      title: "النوع",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "اضافة سؤال",
      dataIndex: "exam_id",
      key: "exam_id",
      render: (id: any) => {
        return (
          <div className="flexCenter w-50 ">
            <IoAddCircleSharp
              size={28}
              cursor={"pointer"}
              onClick={() => handleAddQuestion(id)}
            />
          </div>
        );
      },
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

  /* Get Exams and specialists*/
  React.useEffect(() => {
    if (collegeID) {
      apiNational.get(endPoint.adminExams + collegeID).then((res: any) => {
        setExamsData(res.data.data);
      });
      apiNational
        .get(endPoint.adminSpecialists + collegeID)
        .then((res: any) => {
          setSpecialistsData(res.data.data);
          if (res.data.data.length > 0) {
            setSpecialityID(res.data.data[0].specialty_id);
          }
        });
    }
  }, [collegeID, refreshData]);

  /* Add Exam */
  const handleAddExam = () => {
    apiNational
      .post(endPoint.addExam, {
        name: name,
        specialty_id: specialityID,
        type: examType,
        degree: examDegree,
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

      <div className="admin-exams flexCenterColumn">
        <h2>الامتحانات</h2>
        {!showAddQuestion ? (
          <div className="w-100 flexCenterColumn">
            <div className="flexCenter w-100">
              <div className="flexCenterColumn w-50">
                <h5 className="mb-2">الكلية : &nbsp;</h5>
                <h5 className="mt-3">الاختصاص : &nbsp;</h5>
              </div>
              <div className="flexCenterColumnItemsStart w-100  ">
                <select
                  className="select-college"
                  onChange={handleChooseCollege}
                >
                  {data &&
                    data.map((item: any) => {
                      return (
                        <option value={item.college_id}>{item.name}</option>
                      );
                    })}
                </select>
                <select
                  className="select-college"
                  onChange={handleChooseSpecialist}
                >
                  {specialistsData &&
                    specialistsData.map((item: any) => {
                      return (
                        <option value={item.specialty_id}>{item.name}</option>
                      );
                    })}
                </select>
              </div>
            </div>

            <div className="table-container">
              {examsData && <Table dataSource={examsData} columns={columns} />}
            </div>

            <div className="add-exam flexCenterColumn">
              <h4>إضافة امتحان : </h4>
              <p>
                حدد اسم الكلية والاختصاص من القائمة في الأعلى و حدد النوع
                والدرجة ثم أضف اسم الامتحان
              </p>
              <div className="flexCenter w-100">
                <div className="flexCenterColumn w-50">
                  <h5 className="mb-2">النوع : &nbsp;</h5>
                  <h5 className="mt-3">الدرجة : &nbsp;</h5>
                </div>
                <div className="flexCenterColumnItemsStart w-100  ">
                  <select
                    className="select-to-add-exam"
                    onChange={(e) => setExamType(e.target.value)}
                  >
                    <option value={"exam"}>Exam</option>
                    <option value={"book"}>Book</option>
                  </select>
                  <select
                    className="select-to-add-exam"
                    onChange={(e) => setExamDegree(e.target.value)}
                  >
                    <option value={"graduation"}>Graduation</option>
                    <option value={"master"}>Master</option>
                  </select>
                </div>
              </div>
              <input
                type="text"
                value={name}
                placeholder="اسم الامتحان"
                onChange={(e: any) => setName(e.target.value)}
              />
              <br />
              <Button variant="secondary" onClick={handleAddExam}>
                إضافة
              </Button>
            </div>
          </div>
        ) : (
          <AddQuestion
            setShowAddQuestion={setShowAddQuestion}
            examID={examID}
            collegeID={collegeID}
          />
        )}
      </div>
    </div>
  );
};

export default AdminExams;
