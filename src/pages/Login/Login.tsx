import "./Login.scss";
import helloImage from "../../assets/images/Login/login.svg";
import UsernameInput from "../../components/login-singup/UsernameInput/UsernameInput";
import PasswordInput from "../../components/login-singup/PasswordInput/PasswordInput";
import LoginButton from "../../components/login-singup/LoginButton/LoginButton";

const Login = () => {
  return (
    <div className="login flexCenter">
      <div className="login-form-background col-6 flexCenter">
        <form className="login-form">
          <div className="title flexCenter">
            <p>تسجيل الدخول</p>
          </div>
          <UsernameInput />
          <PasswordInput />
          <LoginButton />
        </form>
      </div>
      <div className="login-hello col-6 flexCenter">
        <img src={helloImage} alt="" />
      </div>
    </div>
  );
};

export default Login;
