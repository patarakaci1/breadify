
import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [active, setActive] = useState("Home");

  const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Rates", href: "#rates" },
    { label: "Reviews", href: "#reviews" },
    { label: "Happy Moments", href: "#moments" },
  ];

  const handleNavigation = (label, href) => {
    setActive(label);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="container">
      <header className="header">
        <button
          className="logo"
          onClick={() => handleNavigation("Home", "#home")}
        >
          bread<span className="ify">ify</span>
        </button>

        <nav>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.label, link.href);
                  }}
                  className={active === link.label ? "active" : "inactive"}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <button className="order-btn">Order Now</button>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
