import style from "./Header.module.scss";
import AppLogo from "../AppLogo";
import SearchForm from "../SearchForm";
import MyCourses from "../MyCourses";
import Notification from "../Notification";
import UserMenu from "../UserMenu";

function Header() {
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <AppLogo />
      </div>
      <div className={style.center}>
        <SearchForm />
      </div>
      <div className={style.right}>
        <MyCourses />
        <Notification />
        <UserMenu />
      </div>
    </div>
  );
}
export default Header;
