import style from "./MyCourses.module.scss";

function MyCourses() {
  return (
    <div className={style.wrapper}>
      <button className={style.myCoursesBtn}>Khóa học của tôi</button>
    </div>
  );
}
export default MyCourses;
