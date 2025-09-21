import style from "./Profile.module.scss";
import { useEffect, useState } from "react";
import defaultAvatar from "../../assets/avt-placeholder.png";

function Profile() {
  const [preViewUrl, setPreViewUrl] = useState(defaultAvatar);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const preViewUrl = URL.createObjectURL(selectedFile);
    setPreViewUrl(preViewUrl);
  };
  useEffect(() => {
    return () => {
      if (preViewUrl && preViewUrl !== defaultAvatar) {
        URL.revokeObjectURL(preViewUrl);
      }
    };
  }, [preViewUrl]);

  return (
    <div className={style.profile}>
      <label>
        <input type="file" hidden onChange={handleFileChange} />
        <img className={style.avatar} src={preViewUrl} alt="avatar" />
      </label>
      <span className={style.username}>Lord of the dogs</span>
    </div>
  );
}

export default Profile;
