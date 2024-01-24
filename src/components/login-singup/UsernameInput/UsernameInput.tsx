import "./UsernameInput.scss";
import usernameIcon from "../../../assets/images/Login/username.svg";

const UsernameInput = () => {
  return (
    <div className="item">
      <p>اسم المستخدم</p>
      <input type="text" required placeholder="اسم المستخدم" />
      <img src={usernameIcon} alt="" />
    </div>
  );
};

export default UsernameInput;
