import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import UpperNavbar from "../shared/UpperNav";

const Layout = () => {
  return (
    <div>
      <>
        <UpperNavbar />
      </>
      <div className="px-[5%]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
