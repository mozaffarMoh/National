import "./Header.scss";
import { Button } from "react-bootstrap";
import logo from "../../assets/images/Header/logo darebni.png";
import profileIcon from "../../assets/images/Header/profile.svg";
import logoutIcon from "../../assets/images/Header/logout.svg";
import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  const token = false;
  const [showProfileList, setShowProfileList] = React.useState(false);
  const [active, setActive] = React.useState("");

  const handleSetActive = (value: string) => {
    active === value ? setActive("") : setActive(value);
  };

  return (
    <div className="header flexCenter row ">
      <div className="logo col-3 d-flex">
        <img src={logo} alt="" />
      </div>
      <div className="links col-6 flexCenter">
        <Link
          to="/"
          className={`link-template ${
            active === "main" && "link-template-active"
          }`}
          onClick={() => handleSetActive("main")}
        >
          <p>الرئيسية</p>
        </Link>
        <a
          href="#specialists"
          className={`link-template ${
            active === "specialists" && "link-template-active"
          }`}
          onClick={() => handleSetActive("specialists")}
        >
          <p>الإختصاصات</p>
        </a>
        <a
          className={`link-template ${
            active === "about" && "link-template-active"
          }`}
          onClick={() => handleSetActive("about")}
        >
          <p>من نحن</p>
        </a>
      </div>
      <div className="header-login col-3 d-flex ">
        {token ? (
          <div
            className="header-profile flexCenter"
            onClick={() => setShowProfileList(!showProfileList)}
          >
            <div className="icon-field">
              <img src={profileIcon} alt="" />
            </div>
            <h6 className={`${showProfileList && "fw-bold"}`}>الملف الشخصي</h6>
            <div
              className={`handle-profile flexCenter ${
                showProfileList ? "showProfileList " : "hideProfileList"
              }`}
            >
              <Link
                to="/profile-edit"
                className="handle-profile-item flexCenter"
              >
                <div className="icon-field mt-3">
                  <img src={profileIcon} />{" "}
                </div>
                <p className="mt-3">تعديل الملف الشخصي</p>
              </Link>
              <Link to={"/login"} className="handle-profile-item flexCenter">
                <div className="icon-field mt-3">
                  <img src={logoutIcon} />
                </div>
                <p className="mt-3">تسجيل الخروج</p>
              </Link>
            </div>
          </div>
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
