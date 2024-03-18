import "./UsernameInputEdit.scss";
import usernameIcon from "../../assets/images/Login/username.svg";
import editIcon from "../../assets/images/ProfileEdit/edit.svg";

const UsernameInputEdit = ({ name, setName, register }: any) => {
  return (
    <div className="username-input-edit">
      <p>اسم المستخدم</p>
      <input
        type="text"
        placeholder="اسم المستخدم"
        value={name}
        {...register("username", {
          required: !name && "اسم المستخدم مطلوب",
        })}
        onChange={(e) => setName(e.target.value)}
      />
      <img src={usernameIcon} className="username-icon" alt="" />
      <img src={editIcon} className="edit-icon" alt="" />
    </div>
  );
};

export default UsernameInputEdit;
