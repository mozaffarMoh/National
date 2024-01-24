import "./Header.scss";
import { Button } from "react-bootstrap";
import logo from "../../assets/images/Header/logo darebni.png";
import profile from "../../assets/images/Header/profile.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const token = false;

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
      <div className="header-login col-3 d-flex ">
        {token ? (
          <Link to={"/profile"} className="header-profile-icon flexCenter">
            <div className="icon-field">
              <img src={profile} alt="" />
            </div>
            <p>الملف الشخصي</p>
          </Link>
        ) : (
          <Link to={"/login"}>
            <Button className="header-login-button">تسجيل الدخول</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
