import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import ScrollToTop from "../../components/ScrollToTop";

function AppRoutes() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
