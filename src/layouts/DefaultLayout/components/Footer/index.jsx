import style from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className={style.wrapper}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/gototop">Go To Top</NavLink>
      <NavLink to="/modaldemo">Modal Demo</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </div>
  );
}
export default Footer;
