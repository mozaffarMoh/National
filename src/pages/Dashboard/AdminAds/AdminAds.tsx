import "./AdminAds.scss";
import { Table } from "antd";
import { endPoint } from "../../../api/endPoints";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUpload } from "react-icons/fa";
import apiNational from "../../../api/apiNational";
import React from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "react-bootstrap";
import Loading from "../../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AdminAds = () => {
  const navigate = useNavigate();
  const [postLoading, setPostLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [imagesArray, setImagesArray]: any = React.useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();
  const token = Cookies.get("token");

  /* Check token */
  React.useEffect(() => {
    if (!token) {
      navigate("/dashboard/login");
    }
  }, []);

  /* Get Ads Data */
  const getAdsData = () => {
    setLoading(true);
    apiNational
      .get(endPoint.showAds)
      .then((res: any) => {
        setLoading(false);
        setData(res.data.data);
      })
      .catch((err: any) => {
        console.log(err);
        if (err.response.data.message === "Unauthorize") {
          navigate("/dashboard/login");
        }
        setLoading(false);
      });
  };

  React.useEffect(() => {
    getAdsData();
  }, []);

  /* Handle delete Ads */
  const handleDelete = (id: any) => {
    setPostLoading(true);
    apiNational
      .get(endPoint.deleteAds + id)
      .then((res) => {
        setPostLoading(false);
        console.log(res);
        setData((prevArray: any) =>
          prevArray.filter((item: any) => item.id !== id)
        );
      })
      .catch((err: any) => {
        setPostLoading(false);
        console.log(err);
      });
  };

  /* Handle Add Image */
  const handleAddImage = (e: any) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setImagesArray((prevArray: any) => {
        let newArray = [...prevArray];
        newArray.push(files[0]);
        return newArray;
      });
    }
    files.length = 0;
  };

  /* Handle Add Ads */
  const handleAddAds = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("position", position);
    imagesArray.forEach((image: any, i: number) => {
      formData.append(`images[${i}]`, image);
    });

    setPostLoading(true);
    apiNational
      .post(endPoint.addAds, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setPostLoading(false);
        console.log(res);
        getAdsData();
      })
      .catch((err: any) => {
        setPostLoading(false);
        console.log(err);
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
      {postLoading && <Loading />}
      <div className="admin-ads flexCenterColumn">
        <h2>الاعلانات</h2>
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
                required: {
                  value: imagesArray.length === 0,
                  message: "الصورة مطلوبة",
                },
              })}
              onChange={(e: any) => handleAddImage(e)}
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
                return (
                  <img
                    src={URL.createObjectURL(item)}
                    className="images-array-item"
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAds;
