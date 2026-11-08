
import React from "react";
import "./footer.css";

const Footer = () => {
  const FOOTER_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Rates", href: "#rates" },
    { label: "Reviews", href: "#reviews" },
    { label: "Happy Moments", href: "#moments" },
  ];

  const handleNavigation = (e, href) => {
    e.preventDefault();

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="footer container">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            bread<span className="ify">ify</span>
          </h2>
          <p>Fresh food, happy moments.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@breadify.com</p>
          <p>Phone: +995 555 123 456</p>
          <p>Georgia</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            TikTok
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Breadify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
