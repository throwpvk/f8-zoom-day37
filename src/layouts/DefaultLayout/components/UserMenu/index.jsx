import style from "./UserMenu.module.scss";
import defaultAvt from "../../../../assets/avt-placeholder.png";

function UserMenu() {
  return (
    <div className={style.wrapper}>
      <img className={style.avatar} src={defaultAvt} alt="User Avatar" />
    </div>
  );
}
export default UserMenu;
