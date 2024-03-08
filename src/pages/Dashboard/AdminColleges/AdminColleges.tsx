import "./AdminColleges.scss";
import { Table } from "antd";
import { endPoint } from "../../../api/endPoints";
import useGet from "../../../api/useGet";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import { FaUpload } from "react-icons/fa";
import apiNational from "../../../api/apiNational";
import React from "react";
import Base64 from "../../../assets/constants/Base64";
import { useForm } from "react-hook-form";

const AdminColleges = () => {
  const [data]: any = useGet(endPoint.adminColleges);
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [uploadedImage, setUploadedImage]: any = React.useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();

  /* Handle Add Image */
  const handleAddImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await Base64(file);
    setUploadedImage(base64);
  };

  /* Handle Add College */
  const handleAddCollege = () => {
    apiNational
      .post(endPoint.addCollege, {
        name: name,
        type: type,
        image: uploadedImage,
      })
      .then((res) => {
        console.log(res);
        location.reload();
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
      <div className="admin-colleges flexCenterColumn">
        <h2>الكليات</h2>
        <div className="table-container">
          <Table dataSource={data} columns={columns} />
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
            {uploadedImage && (
              <img src={uploadedImage} width={250} height={200} />
            )}
            <button type="submit" onSubmit={handleAddCollege}>
              إضافة الاعلان
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminColleges;
