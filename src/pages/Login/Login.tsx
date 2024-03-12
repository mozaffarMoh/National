import "./Login.scss";
import helloImage from "../../assets/images/Login/login.svg";
import UsernameInput from "../../components/login-singup/UsernameInput/UsernameInput";
import PasswordInput from "../../components/login-singup/PasswordInput/PasswordInput";
import LoginButton from "../../components/login-singup/LoginButton/LoginButton";
import React from "react";
import apiNational from "../../api/apiNational";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { endPoint } from "../../api/endPoints";
import { useForm } from "react-hook-form";

const Login = () => {
  const router = useNavigate();
  const [name, setName] = React.useState();
  const [code, setCode]: any = React.useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();

  const handleLogin = () => {
    apiNational
      .post(endPoint.login, {
        name: name,
        code: code,
      })
      .then((res) => {
        router("/");
        Cookies.set("token", res.data.data.token);
        Cookies.set("code", res.data.data.code);
        Cookies.set("collegeUUID", res.data.college_uuid);
        console.log("from login : ", res.data.college_uuid);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login flexCenter">
      <div className="login-form-background col-6 flexCenter">
        <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
          <div className="title flexCenter">
            <p>تسجيل الدخول</p>
          </div>
          <UsernameInput setName={setName} register={register} />
          {errors.username && (
            <div className="error-message">{errors.username.message}</div>
          )}
          <PasswordInput setCode={setCode} register={register} />
          {errors.password && (
            <div className="error-message">{errors.password.message}</div>
          )}
          <LoginButton handleLogin={handleLogin} handleSubmit={handleSubmit} />
        </form>
      </div>
      <div className="login-hello col-6 flexCenter">
        <img src={helloImage} alt="" />
      </div>
    </div>
  );
};

export default Login;
