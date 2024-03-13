import "./Register.scss";
import registerImage from "../../assets/images/Login/sign-up.svg";
import UsernameInput from "../../components/login-singup/UsernameInput/UsernameInput";
import PhoneInput from "../../components/login-singup/PhoneInput/PhoneInput";
import RegisterButton from "../../components/login-singup/RegisterButton/RegisterButton";
import ChooseSpecialist from "../../components/login-singup/ChooseSpecialist/ChooseSpecialist";
import React from "react";
import apiNational from "../../api/apiNational";
import { endPoint } from "../../api/endPoints";
import { useForm } from "react-hook-form";
import Loading from "../../components/Loading/Loading";

const Register = () => {
  const [name, setName] = React.useState();
  const [phone, setPhone] = React.useState();
  const [collegeUUID, setCollegeUUID] = React.useState("");
  const [loading, setLoading]: any = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();

  const handleRegister = () => {
    setLoading(true);
    apiNational
      .post(endPoint.register, {
        name: name,
        phone: phone,
        college_uuid: collegeUUID,
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="register flexCenter row">
      {loading && <Loading />}
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
          <ChooseSpecialist setCollegeUUIDProp={setCollegeUUID} />
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
