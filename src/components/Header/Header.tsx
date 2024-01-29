import "./Header.scss";
import { Button } from "react-bootstrap";
import logo from "../../assets/images/Header/logo darebni.png";
import profileIcon from "../../assets/images/Header/profile.svg";
import logoutIcon from "../../assets/images/Header/logout.svg";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { Transition } from "react-transition-group";

const Header = () => {
  const token = true;
  const ref = useRef();
  const [showProfileEdit, setShowProfileEdit] = React.useState(false);
  const [showProfileList, setShowProfileList] = React.useState(false);
  const [active, setActive] = React.useState("");

  const handleSetActive = (value: string) => {
    active === value ? setActive("") : setActive(value);
  };

  return (
    <div className="header flexCenter row ">
      {/* Darrebni logo */}
      <div className="logo col-3 d-flex">
        <img src={logo} alt="" />
      </div>

      {/* Links */}
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

      {/* Login Button and Profile porperties */}
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

            <Transition in={showProfileList} timeout={500} nodeRef={ref}>
              {(state) => (
                <div
                  className="transistion-profile"
                  style={{ opacity: state === "entered" ? 1 : 0 }}
                >
                  {showProfileList && (
                    <div className="handle-profile flexCenterColumn">
                      <div
                        className="handle-profile-item flexStart"
                        onClick={() => setShowProfileEdit(true)}
                      >
                        <div className="icon-field mt-3">
                          <img src={profileIcon} />{" "}
                        </div>
                        <p className="mt-3">تعديل الملف الشخصي</p>
                      </div>

                      <Link
                        to={"/login"}
                        className="handle-profile-item flexCenter"
                      >
                        <div className="icon-field mt-3">
                          <img src={logoutIcon} />
                        </div>
                        <p className="mt-3">تسجيل الخروج</p>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </Transition>
          </div>
        ) : (
          <Link to={"/login"}>
            <Button className="header-login-button">تسجيل الدخول</Button>
          </Link>
        )}
      </div>

      {showProfileEdit && (
        <ProfileEdit setShowProfileEdit={() => setShowProfileEdit(false)} />
      )}
    </div>
  );
};

export default Header;
