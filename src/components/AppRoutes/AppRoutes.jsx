import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import Home from "../../pages/Home";
import GoToTopPage from "../../pages/GoToTop";
import ModalDemo from "../../pages/ModalDemo";
import Profile from "../../pages/Profile";
import DefaultLayout from "../../layouts/DefaultLayout";

function AppRoutes() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gototop" element={<GoToTopPage />} />
          <Route path="/modaldemo" element={<ModalDemo />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
