import React from "react";
import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [active, setActive] = useState(false);

  const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Rates", href: "#rates" },
  ];

  return (
    <div className="container">
      <header className="header">
        <button className="logo" onClick={() => setActive("Home")}>
          bread<span className="ify">ify</span>
        </button>

        <nav>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  className={active === link.label ? "active" : "inactive"}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <button className="login">log in</button>
          <button className="signup">sign up</button>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
