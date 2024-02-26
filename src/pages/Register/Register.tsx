import "./Register.scss";
import registerImage from "../../assets/images/Login/sign-up.svg";
import UsernameInput from "../../components/login-singup/UsernameInput/UsernameInput";
import PhoneInput from "../../components/login-singup/PhoneInput/PhoneInput";
import RegisterButton from "../../components/login-singup/RegisterButton/RegisterButton";
import ChooseSpecialist from "../../components/login-singup/ChooseSpecialist/ChooseSpecialist";
import React from "react";
import apiNational from "../../api/apiNational";
import { useNavigate } from "react-router-dom";
import { endPoint } from "../../api/endPoints";
import { useForm } from "react-hook-form";

const Register = () => {
  const router = useNavigate();
  const [name, setName] = React.useState();
  const [phone, setPhone] = React.useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();

  const handleRegister = () => {
    apiNational
      .post(endPoint.register, {
        name: name,
        phone: phone,
        college_uuid: "6bb79145-7f67-4723-86ed-ba139f640900",
      })
      .then((res) => {
        console.log(res);
        router("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register flexCenter row">
      <div className="register-form-background col-6 flexCenter">
        <form className="register-form" onSubmit={handleSubmit(handleRegister)}>
          <div className="title flexCenter">
            <p>إنشاء حساب</p>
          </div>
          <UsernameInput setName={setName} register={register} />
          {errors.username && (
            <div className="error-message p-2">{errors.username.message}</div>
          )}
          <PhoneInput setPhone={setPhone} register={register} />
          {errors.phone && (
            <div className="error-message p-2">{errors.phone.message}</div>
          )}
          <ChooseSpecialist />
          <RegisterButton handleRegister={handleRegister} />
        </form>
      </div>
      <div className="register-image col-6 flexCenter">
        <img src={registerImage} alt="" />
      </div>
    </div>
  );
};

export default Register;
