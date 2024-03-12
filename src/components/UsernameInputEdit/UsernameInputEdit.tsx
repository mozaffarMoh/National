import "./UsernameInputEdit.scss";
import usernameIcon from "../../assets/images/Login/username.svg";
import editIcon from "../../assets/images/ProfileEdit/edit.svg";

const UsernameInputEdit = ({ name, setName }: any) => {
  return (
    <div className="username-input-edit">
      <p>اسم المستخدم</p>
      <input
        type="text"
        required
        placeholder="اسم المستخدم"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <img src={usernameIcon} className="username-icon" alt="" />
      <img src={editIcon} className="edit-icon" alt="" />
    </div>
  );
};

export default UsernameInputEdit;
