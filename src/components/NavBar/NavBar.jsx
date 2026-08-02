import React from "react";
import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [active, setActive] = useState(false);

  const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="container">
      <header className="header">
        <span className="logo">
          bread<span className="ify">ify</span>
        </span>

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
          <button>sign up</button>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
