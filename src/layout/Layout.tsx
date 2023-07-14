import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="py-16 text-textColor">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
