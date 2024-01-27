import "./PhoneInput.scss";
import phoneIcon from "../../../assets/images/Login/phone.svg";

const PhoneInput = () => {
  return (
    <div className="phone-input-component">
      <p>رقم الموبايل</p>
      <input type="text" required placeholder="رقم الموبايل" />
      <img src={phoneIcon} alt="" />
    </div>
  );
};

export default PhoneInput;
