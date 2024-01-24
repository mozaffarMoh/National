import "./LoginButton.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <div className="item">
      <Button className="login-button">تسجيل الدخول</Button>
      <div className="flexCenter">
        <Link to={"/register"}>ليس لديك حساب ؟ أنشأ حساب</Link>
      </div>
    </div>
  );
};

export default LoginButton;
