import "./LoginButton.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginButton = ({ handleLogin }: any) => {
  return (
    <div className="login-button-component">
      <Button
        type="submit"
        className="login-button"
        variant="secondary"
        onSubmit={handleLogin}
      >
        تسجيل الدخول
      </Button>
      <div className="flexCenter">
        <a className="text-black">ليس لديك حساب ؟&nbsp;</a>
        <Link to={"/register"}>أنشأ حساب</Link>
      </div>
    </div>
  );
};

export default LoginButton;
