import style from "./Notification.module.scss";

function Notification() {
  return (
    <div className={style.wrapper}>
      <button className={style.bellBtn}>
        <i className="fas fa-bell"></i>
      </button>
    </div>
  );
}
export default Notification;
