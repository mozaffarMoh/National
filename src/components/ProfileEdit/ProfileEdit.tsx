import "./ProfileEdit.scss";
import avatarIcon from "../../assets/images/ProfileEdit/avatar.svg";
import { Button } from "react-bootstrap";
import UsernameInputEdit from "../../components/UsernameInputEdit/UsernameInputEdit";
import PhoneInputEdit from "../../components/PhoneInputEdit/PhoneInputEdit";

const ProfileEdit = ({ setShowProfileEdit }: any) => {
  const handleClose = () => {
    setShowProfileEdit(false);
  };

  return (
    <div className="profile-edit flexCenter">
      <div className="profile-edit-title">
        <p>تعديل المعلومات الشخصية</p>
      </div>

      <div className="profile-edit-avatar">
        <img src={avatarIcon} alt="" />
        <div>
          <p>اسم المستخدم</p>
        </div>
      </div>

      <UsernameInputEdit />
      <PhoneInputEdit />
      <Button className="save-changes-button" variant="secondary">
        حفظ التغييرات
      </Button>
      <span onClick={handleClose}>تراجع</span>
    </div>
  );
};

export default ProfileEdit;
