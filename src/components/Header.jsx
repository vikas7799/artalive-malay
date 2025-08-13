import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "/images/logo.png";
import MegaMenu from "./MegaMenu";
import MobileNavigationDrawer from "./MobileNavigationDrawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerButtonRef = useRef(null);

  return (
    <header className="nav__header shadow-sm" >
      <div className="container-xl p-3">
        <div className="toolbar justify-content-between ">
          <Link className="logo__link" to={"/"}>
            <img src={logo} alt="Artalive Sdn Bdn Logo"/>
          </Link>
          <button
            ref={drawerButtonRef}
            className="menu_icon md:hidden "
            aria-haspopup="true"
            onClick={() => setIsDrawerOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="hidden md:block ms-auto">
            <MegaMenu />
          </div>

          <div className=" d-none d-lg-block">
            <Link
              to="https://api.whatsapp.com/send?phone=60123774437&text=Hello%20Artalive%20%2C%20Request%20to%20Book%20an%20Appointment"
              className="button1 text-uppercase"
              // style={{ letterSpacing: "1.5px" }}
              type="button"
            >
              Tempah Janji Temu
            </Link>
          </div>

          {/* Mobile navigation drawer */}
          <div className="md:hidden absolute">
            <MobileNavigationDrawer
              {...{ isDrawerOpen, setIsDrawerOpen, drawerButtonRef }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
