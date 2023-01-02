/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNav");
  };

  const closeNav = () => {
    setActive("navBar");
  };
  return (
    <section className="navSection">
      <div className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex">
              <SiYourtraveldottv className="icon" />
              PointX
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#products" className="navLink">
                Products
              </a>
            </li>

            <li className="navItem">
              <a href="#resources" className="navLink">
                Resources
              </a>
            </li>

            <li className="navItem">
              <a href="#contact" className="navLink">
                Contact
              </a>
            </li>

            <li className="navItem">
              <a href="#blog" className="navLink">
                Blog
              </a>
            </li>

            <div className="headerBtns flex">
              <button className="btn login-btn">Login</button>
              <button className="btn signup-btn">Sign Up</button>
            </div>
          </ul>

          <div onClick={closeNav} className="closeNav">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNav">
          <CgMenuGridR className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
