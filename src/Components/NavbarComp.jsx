import React, { useState } from "react";
import "../../src/App.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src="https://img.freepik.com/premium-vector/tax-consultant-logo-set_72843-56.jpg?w=2000" alt="logo" />
        <h1 data-testid="Navbar Header">E-Tax Management System</h1>
      </div>
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <a href='/AdminLogin'><button className="btn-Admin">Admin</button></a>
        <a href='/UserLogin'><button className="btn-User" >User</button></a>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;