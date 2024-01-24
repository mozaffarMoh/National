import "./Register.scss";
import registerImage from "../../assets/images/Login/sign-up.svg";
import UsernameInput from "../../components/login-singup/UsernameInput/UsernameInput";
import PhoneInput from "../../components/login-singup/PhoneInput/PhoneInput";
import RegisterButton from "../../components/login-singup/RegisterButton/RegisterButton";
import ChooseSpecialist from "../../components/login-singup/ChooseSpecialist/ChooseSpecialist";

const Register = () => {
  return (
    <div className="register flexCenter row">
      <div className="register-form-background col-6 flexCenter">
        <form className="register-form">
          <div className="title flexCenter">
            <p>إنشاء حساب</p>
          </div>
          <UsernameInput />
          <PhoneInput />
          <ChooseSpecialist />
          <RegisterButton />
        </form>
      </div>
      <div className="register-image col-6 flexCenter">
        <img src={registerImage} alt="" />
      </div>
    </div>
  );
};

export default Register;
