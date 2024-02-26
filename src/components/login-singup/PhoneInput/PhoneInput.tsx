import "./PhoneInput.scss";
import phoneIcon from "../../../assets/images/Login/phone.svg";

const PhoneInput = ({ setPhone, register }: any) => {
  return (
    <div className="phone-input-component">
      <p>رقم الموبايل</p>
      <input
        type="text"
        required
        placeholder="رقم الموبايل"
        {...register("phone", {
          required: "رقم الهاتف مطلوب",
          pattern: {
            value: /^09\d{8}$/,
            message: "يجب أن يتكون رقم الهاتف من 10 أرقام وأن تبدا ب 09 ",
          },
        })}
        onChange={(e) => setPhone(e.target.value)}
      />
      <img src={phoneIcon} alt="" />
    </div>
  );
};

export default PhoneInput;
