import "./Header.scss";
import { Button } from "react-bootstrap";
import logo from "../../assets/images/Header/logo darebni.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header flexCenter row ">
      <div className="logo col-3 d-flex">
        <img src={logo} alt="" />
      </div>
      <div className="links col-6 flexCenter">
        <Link to="/">
          <p>الرئيسية</p>
        </Link>
        <Link to="/special">
          <p>الاختصاصات</p>
        </Link>
        <Link to="/about">
          <p>من نحن</p>
        </Link>

      </div>
      <div className="login col-3 d-flex ">
        <Button className="login-button">تسجيل الدخول</Button>
      </div>
    </div>
  );
};

export default Header;
