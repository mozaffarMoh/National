import "./PhoneInput.scss";
import phoneIcon from "../../../assets/images/Login/phone.svg";

const PhoneInput = () => {
  return (
    <div className="item">
      <p>رقم الموبايل</p>
      <input type="password" required placeholder="رقم الموبايل" />
      <img src={phoneIcon} alt="" />
    </div>
  );
};

export default PhoneInput;
