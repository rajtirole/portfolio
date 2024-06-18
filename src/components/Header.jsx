import React, { useEffect, useRef, useState } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
const Header = () => {
  useEffect(() => {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250,
    });
    // Close the sidenav on link click
    const sidenavLinks = document.querySelectorAll(".sidenav-close");
    sidenavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        instance.close();
      });
    });
  });

  return (
    <div>
      <nav className="nav bg-white fixed top-0 z-50">
        <div className="nav-wrapper">
          <a
            href="#home"
            className=" text-2xl font-medium text-black ml-[20%] md:m-auto p-4"
          >
            Raja Tirole
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons mt-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mobile-menu"
                >
                  <path d="M4 6l16 0"></path>
                  <path d="M4 12l16 0"></path>
                  <path d="M4 18l16 0"></path>
                </svg>
              </span>
            </i>
          </a>
          <ul className="right hide-on-med-and-down ">
            <li>
              <a href="#home" className="text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-black">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-black">
                Projects
              </a>
            </li>
            {/* <li>
              <a to="/experience" className="text-black">
                Experience
              </a>
            </li> */}
            <li>
              <a href="#contact" className="text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="#home" className="sidenav-close text-black">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="sidenav-close text-black">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="sidenav-close text-black">
            Projects
          </a>
        </li>
        {/* <li>
              <a to="/experience" className="text-black">
                Experience
              </a>
            </li> */}
        <li>
          <a href="#contact" className="sidenav-close text-black">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
