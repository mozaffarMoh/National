import "./AdminAds.scss";
import { Table } from "antd";
import { endPoint } from "../../../api/endPoints";
import useGet from "../../../api/useGet";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUpload } from "react-icons/fa";
import apiNational from "../../../api/apiNational";
import React from "react";
import Base64 from "../../../assets/constants/Base64";
import { useForm } from "react-hook-form";

const AdminAds = () => {
  const [data, setData]: any = useGet(endPoint.showAds);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [imagesArray, setImagesArray]: any = React.useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();

  /* Handle delete Ads */
  const handleDelete = (id: any) => {
    apiNational.get(endPoint.deleteAds + id).then((res) => {
      console.log(res);
      setData((prevArray: any) =>
        prevArray.filter((item: any) => item.id !== id)
      );
    });
  };

  /* Handle Add Image */
  const handleAddImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await Base64(file);
    setImagesArray((prevArray: any) => {
      let newArray = [...prevArray];
      newArray.push(base64);
      return newArray;
    });
    e.target.value = "";
  };

  /* Handle Add Ads */
  const handleAddAds = () => {
    apiNational
      .post(endPoint.addAds, {
        title: title,
        description: description,
        position: position,
        images: imagesArray,
      })
      .then((res) => {
        console.log(res);
        location.reload();
      });
  };

  const columns: any = [
    {
      title: "الرقم التعريفي",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "الاسم",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "المكان",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "الوصف",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "الصور",
      dataIndex: "url",
      key: "url",
      render: (item: any) => (
        <p>
          {item.map((url: any) => (
            <img src={url.url} width={100} height={100} />
          ))}
        </p>
      ),
    },
    {
      title: "حذف الاعلان",
      dataIndex: "id",
      key: "id",
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
      <div className="admin-ads flexCenterColumn">
        <h2>الاعلانات</h2>
        <div className="table-container">
          <Table dataSource={data} columns={columns} />
        </div>
        <div className="add-ads flexCenterColumnItemsStart">
          <h4>إضافة إعلان : </h4>
          <form
            className="flexCenterColumn flex-wrap p-3"
            onSubmit={handleSubmit(handleAddAds)}
          >
            <input
              type="text"
              placeholder="العنوان"
              value={title}
              {...register("title", {
                required: "العنوان مطلوب",
              })}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <div className="error-message">{errors.title.message}</div>
            )}

            <input
              type="text"
              placeholder="الوصف"
              value={description}
              {...register("description", {
                required: "الوصف مطلوب",
              })}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description && (
              <div className="error-message">{errors.description.message}</div>
            )}

            <input
              type="text"
              placeholder="المكان"
              value={position}
              {...register("position", {
                required: "المكان مطلوب",
              })}
              onChange={(e) => setPosition(e.target.value)}
            />
            {errors.position && (
              <div className="error-message">{errors.position.message}</div>
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
            <button type="submit" onSubmit={handleAddAds}>
              إضافة الاعلان
            </button>
          </form>
          {imagesArray.length > 0 && (
            <div className="flexCenter flex-wrap bg-light mt-2 p-3">
              {imagesArray.map((item: any) => {
                return <img src={item} className="images-array-item" />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAds;
