import { Button } from "react-bootstrap";
import "./RegisterButton.scss";
import { Link } from "react-router-dom";

const RegisterButton = () => {
  return (
    <div className="item">
    <Button className="register-button"> إنشاء حساب</Button>
    <div className="flexCenter">
      <Link to={"/login"}> لديك حساب ؟ سجل الدخول</Link>
    </div>
  </div>
  );
};

export default RegisterButton;
