import "./AdminColleges.scss";
import { Table } from "antd";
import { endPoint } from "../../../api/endPoints";
import useGet from "../../../api/useGet";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import { FaUpload } from "react-icons/fa";
import apiNational from "../../../api/apiNational";
import React from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "react-bootstrap";
import Loading from "../../../components/Loading/Loading";

const AdminColleges = () => {
  const [data, setData, , , loading]: any = useGet(endPoint.adminColleges);
  const [postLoading, setPostLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [imageFile, setImageFile]: any = React.useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();

  /* Handle Add Image */
  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setImageFile(files[0]);
    }
  };

  /* Handle Add College */
  const handleAddCollege = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", type);
    formData.append("image", imageFile);

    setPostLoading(true);
    apiNational
      .post(endPoint.addCollege, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res: any) => {
        setPostLoading(false);
        console.log(res);
        setData([
          ...data,
          {
            image: imageFile,
            name,
            type,
            college_id: data[data.length - 1].college_id + 1,
          },
        ]);
        setName("");
        setType("");
        setImageFile(null);
      })
      .catch((err: any) => {
        setPostLoading(false);
        console.log(err);
      });
  };

  const columns: any = [
    {
      title: "الرقم التعريفي",
      dataIndex: "college_id",
      key: "college_id",
    },
    {
      title: "الاسم",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "النوع",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "الصورة",
      dataIndex: "image",
      key: "image",
      render: (url: any) => <img src={url} width={100} height={100} />,
    },
  ];

  return (
    <div>
      <AdminHeader />
      {postLoading && <Loading />}
      <div className="admin-colleges flexCenterColumn">
        <h2>الكليات</h2>
        <div className="table-container">
          {data && !loading ? (
            <Table dataSource={data} columns={columns} />
          ) : (
            <div className="dashboard-spinner">
              <Spinner />
            </div>
          )}
        </div>
        <div className="add-ads flexCenterColumnItemsStart">
          <h4>إضافة كلية : </h4>
          <form
            className="flexCenterColumn flex-wrap p-3"
            onSubmit={handleSubmit(handleAddCollege)}
          >
            <input
              type="text"
              placeholder="اسم الكلية"
              value={name}
              {...register("name", {
                required: "اسم الكلية مطلوب",
              })}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <div className="error-message">{errors.name.message}</div>
            )}

            <input
              type="text"
              placeholder="النوع"
              value={type}
              {...register("type", {
                required: "النوع مطلوب",
              })}
              onChange={(e) => setType(e.target.value)}
            />
            {errors.type && (
              <div className="error-message">{errors.type.message}</div>
            )}

            <input
              type="file"
              id="download-image-id"
              {...register("imageFile", {
                required: "الصورة مطلوبة",
              })}
              onChange={handleAddImage}
            />
            <label
              className="downlaod-image flexCenterColumn"
              htmlFor="download-image-id"
            >
              {" "}
              اضافة صورة <FaUpload />
            </label>
            {errors.imageFile && (
              <div className="error-message">{errors.imageFile.message}</div>
            )}
            {imageFile && (
              <img
                src={URL.createObjectURL(imageFile)}
                width={250}
                height={200}
              />
            )}
            <button type="submit" onSubmit={handleAddCollege}>
              إضافة
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminColleges;
