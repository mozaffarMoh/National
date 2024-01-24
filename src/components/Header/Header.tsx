import "./Header.scss";
import { Button } from "react-bootstrap";
import logo from "../../assets/images/Header/logo darebni.png";
import profileIcon from "../../assets/images/Header/profile.svg";
import logoutIcon from "../../assets/images/Header/logout.svg";
import { Link } from "react-router-dom";
import React from "react";
import ProfileEdit from "../../components/ProfileEdit/ProfileEdit";

const Header = () => {
  const token = true;
  const [handelProfile, setHandleProfile] = React.useState(false);
  const [showProfileEdit, setShowProfileEdit] = React.useState(false);

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
          <div className="header-profile-icon flexCenter">
            <div
              className="icon-field"
              onClick={() => setHandleProfile(!handelProfile)}
            >
              <img src={profileIcon} alt="" />
            </div>
            <h6>الملف الشخصي</h6>
            {handelProfile && (
              <div className="handle-profile flexCenter">
                <div
                  className="flexCenter"
                  onClick={() => setShowProfileEdit(!showProfileEdit)}
                >
                  <img src={profileIcon} />
                  <p>تعديل الملف الشخصي</p>
                </div>
                <Link to={"/login"} className="flexCenter">
                  <img src={logoutIcon} />
                  <p>تسجيل الخروج</p>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <Link to={"/login"}>
            <Button className="header-login-button">تسجيل الدخول</Button>
          </Link>
        )}
        {showProfileEdit && <ProfileEdit />}
      </div>
    </div>
  );
};

export default Header;
