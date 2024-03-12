import "./PhoneInputEdit.scss";
import phoneIcon from "../../assets/images/Login/phone.svg";
import editIcon from "../../assets/images/ProfileEdit/edit.svg";

const PhoneInputEdit = ({ phone, setPhone }: any) => {
  return (
    <div className="phone-input-edit">
      <p>رقم الموبايل</p>
      <input
        type="text"
        required
        placeholder="رقم الموبايل"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <img src={phoneIcon} className="phone-icon" alt="" />
      <img src={editIcon} className="edit-icon" alt="" />
    </div>
  );
};

export default PhoneInputEdit;
