import React, { useState } from "react";
import { DDElement } from "./DropdownElements.jsx";
import NElements from "./NorrmalLinks";
import "./Navbar.css";

function Navbar() {
  const [enableNav, setenableNav] = useState(false);

  const toggleMobileNav = () => setenableNav(!enableNav);

  return (
    <>
      <div className="desktopNavbar">
        <img
          src="/assets/images/logo.svg"
          alt="Snap Company Logo"
          className="logo"
        />
        <div className="second">
          <DDElement textVal="Features" />
          <DDElement textVal="Company" />
          <NElements textVal="Careers" />
          <NElements textVal="About" />
        </div>
        <div className="third">
          <NElements textVal="Login" />
          <button className="register">Register</button>
        </div>
      </div>
      <div className="mobilelogo">
        <img
          src="/assets/images/logo.svg"
          alt="Snap Company Logo"
          className="logo"
        />
      </div>
      <div
        className={
          enableNav ? "mobileNavOptions removeTop" : "mobileNavOptions"
        }
      >
        <button
          className={enableNav ? "mobileButtondisable" : "mobileButton"}
          onClick={toggleMobileNav}
        >
          <img
            src="/assets/images/icon-menu.svg"
            alt="Menu"
            className="mobileMenu"
          />
        </button>
        <div
          className={
            enableNav ? "mobileNavLinksenable" : "mobileNavLinksdisable"
          }
        >
          <button className="mobileButton" onClick={toggleMobileNav}>
            <img
              src="/assets/images/icon-close-menu.svg"
              alt="Menu"
              className="mobileMenu"
            />
          </button>
          <DDElement textVal="Features" />
          <DDElement textVal="Company" />
          <NElements textVal="Careers" />
          <NElements textVal="About" />
          <div>
            <h1 className="Login">Login</h1>
          </div>
          <button className="register mRegister">Register</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
