import "./ProfileEdit.scss";
import avatarIcon from "../../assets/images/ProfileEdit/avatar.svg";
import { Button } from "react-bootstrap";
import UsernameInputEdit from "../../components/UsernameInputEdit/UsernameInputEdit";
import PhoneInputEdit from "../../components/PhoneInputEdit/PhoneInputEdit";
import { endPoint } from "../../api/endPoints";
import Cookies from "js-cookie";
import useGet from "../../api/useGet";
import usePostFunc from "../../api/usePostFunc";
import React from "react";

const ProfileEdit = ({ setShowProfileEdit }: any) => {
  const collegeUUID = Cookies.get("collegeUUID");

  const [, , , profileData]: any = useGet(endPoint.showProfile, {
    isCollege_UUID: true,
    college_UUID: collegeUUID,
  });

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const [editData, editProfileFunc]: any = usePostFunc(
    {
      name: name,
      phone: phone,
    },
    endPoint.editProfile,
    {
      isCollege_UUID: true,
      college_UUID: collegeUUID,
    }
  );

  /* Edit Profile */
  const handleEditProfile = () => {
    editProfileFunc();
  };

  /* Close window when success editing */
  React.useEffect(() => {
    if (editData?.statusCode == 200) {
      setShowProfileEdit(false);
    }
  }, [editData]);

  /* Change name and phone when data recieved */
  React.useEffect(() => {
    setName(profileData?.name);
    setPhone(profileData?.phone);
  }, [profileData]);

  return (
    <div className="profile-edit flexCenter">
      <div className="profile-edit-title">
        <p>تعديل المعلومات الشخصية</p>
      </div>

      <div className="profile-edit-avatar">
        <img src={avatarIcon} alt="" />
        <div>
          <p>{profileData && profileData.name} </p>
        </div>
      </div>

      <UsernameInputEdit name={name} setName={setName} />
      <PhoneInputEdit phone={phone} setPhone={setPhone} />
      <Button
        className="save-changes-button"
        variant="secondary"
        onClick={handleEditProfile}
      >
        حفظ التغييرات
      </Button>
      <span onClick={() => setShowProfileEdit(false)}>تراجع</span>
    </div>
  );
};

export default ProfileEdit;
