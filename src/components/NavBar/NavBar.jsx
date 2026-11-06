import { useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const { cartQuantity, openCart } = useShoppingCart();

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
    <header className="header">
      <div className="container header__inner">
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
          {cartQuantity > 0 && (
            <button className="order-btn" onClick={openCart}>
              <FontAwesomeIcon icon={faCartShopping} />
              <div className="cart-number">{cartQuantity}</div>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
