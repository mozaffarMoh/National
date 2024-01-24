import "./Header.scss";
import { Button } from "react-bootstrap";
import logo from "../../assets/images/Header/logo darebni.png";
import profileIcon from "../../assets/images/Header/profile.svg";
import logoutIcon from "../../assets/images/Header/logout.svg";
import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  const token = true;
  const [showProfileList, setShowProfileList] = React.useState(false);

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
        <Link to="#">
          <p>من نحن</p>
        </Link>
      </div>
      <div className="header-login col-3 d-flex ">
        {token ? (
          <div
            className="header-profile-icon flexCenter"
            onClick={() => setShowProfileList(!showProfileList)}
          >
            <div className="icon-field">
              <img src={profileIcon} alt="" />
            </div>
            <h6>الملف الشخصي</h6>
            {showProfileList && (
              <div className="handle-profile flexCenter">
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
            )}
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
