import "./AdminRegister.scss";
import apiNational from "../../../api/apiNational";
import { endPoint } from "../../../api/endPoints";
import React from "react";
import AdminHeader from "../../../components/Dashboard/AdminHeader/AdminHeader";
import { useForm } from "react-hook-form";

const AdminRegister = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword]: any = React.useState("");
  const [successMessage, setSuccessMesssage] = React.useState("");
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();

  const handleRegister = () => {
    apiNational
      .post(endPoint.adminRegister, {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        setSuccessMesssage(res.data.data);
        setEmail("");
        setName("");
        setPassword("");
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="admin-register flexCenterColumn">
      <AdminHeader />
      <h4>إنشاء حساب مسؤول جديد</h4>
      <form
        className="flexCenterColumn"
        onSubmit={handleSubmit(handleRegister)}
      >
        <input
          type="text"
          placeholder="اسم المسؤول"
          value={name}
          {...register("username", {
            required: "اسم المستخدم مطلوب",
          })}
          onChange={(e: any) => setName(e.target.value)}
        />
        {errors.username && (
          <div className="error-message">{errors.username.message}</div>
        )}
        <input
          type="text"
          placeholder="الإيميل"
          value={email}
          {...register("email", {
            required: "الإيميل مطلوب",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "يجب أن يكون الحقل عنوان بريد إلكتروني صالح ",
            },
          })}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        {errors.email && (
          <div className="error-message">{errors.email.message}</div>
        )}
        <input
          type="password"
          placeholder="كلمة السر"
          value={password}
          {...register("password", {
            required: "كلمة السر مطلوبة",
            minLength: {
              value: 6,
              message: "يجب أن تحتوي كلمة السر على الأقل 6 أحرف",
            },
            maxLength: {
              value: 64,
              message: "يجب أن تحتوي كلمة السر على 64 حرف كحدأعظمي  ",
            },
          })}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        {errors.password && (
          <div className="error-message">{errors.password.message}</div>
        )}
        <button type="submit" onSubmit={handleRegister}>
          انشاء حساب
        </button>
      </form>

      {successMessage && showSuccessMessage && (
        <div className="success-Message flexCenter">
          <p>{successMessage}</p>
        </div>
      )}
    </div>
  );
};

export default AdminRegister;
