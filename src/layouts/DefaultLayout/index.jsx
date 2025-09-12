import { Outlet } from "react-router-dom";
import style from "./DefaultLayout.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

function DefaultLayout() {
  return (
    <div className={style.wrapper}>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default DefaultLayout;
