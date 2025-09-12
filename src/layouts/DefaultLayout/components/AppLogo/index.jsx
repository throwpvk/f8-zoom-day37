import style from "./AppLogo.module.scss";
import logo from "../../../../assets/logo-64.png";

function AppLogo() {
  return (
    <div className={style.wrapper}>
      <img src={logo} alt="App Logo" className={style.logo} />
      <span className={style.title}>Học Lập Trình Để Đi Làm</span>
    </div>
  );
}
export default AppLogo;
