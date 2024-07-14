import "./Footer.scss";
import logo from "../../assets/images/Header/logo darebni.png";
import facebook from "../../assets/images/Footer/facebook.svg";
import instagram from "../../assets/images/Footer/instagram.svg";
import telegram from "../../assets/images/Footer/telegram.svg";
import tikTok from "../../assets/images/Footer/tiktok.svg";
import linkedIn from "../../assets/images/Footer/linked-in.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer row flexCenter">
      <div className="text-field col-8 flexCenterColumnItemsStart">
        <div className="links flexCenter">
          <Link to={"/privacy-policy"}>
            <p>سياسة الخصوصية</p>
          </Link>
          <Link to={"/terms-and-conditions"}>
            <p>الشروط و الأحكام</p>
          </Link>
        </div>
        <div className="icons flexCenterColumn">
          <p>جميع الحقوق محفوظة 2023 </p>
          <div className="flexCenter icons-pictures">
            <a href="https://www.facebook.com/darrebni.co" target="_blank">
              <img src={facebook} alt="" />
            </a>
            <a href="https://www.instagram.com/darrebni.co" target="_blank">
              <img src={instagram} alt="" />{" "}
            </a>
            <a href="https://t.me/darrebnicompany" target="_blank">
              <img src={telegram} alt="" />{" "}
            </a>
            <a
              href="https://www.tiktok.com/@darrebni6?_t=8ktjXu66zHU&_r=1"
              target="_blank"
            >
              <img src={tikTok} alt="" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/company/darrebni/"
              target="_blank"
            >
              <img src={linkedIn} alt="" />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="logo col-4 flexCenter">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
