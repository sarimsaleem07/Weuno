import React, { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { SiSnapchat } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import "./header.css";
import logo from "../../assets/logo.png";
import ukLogo from "../../assets/ukLogo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: ukLogo },
    { code: "ar", name: "العربية", flag: "https://flagcdn.com/w20/sa.png" },
    { code: "fr", name: "Français", flag: "https://flagcdn.com/w20/fr.png" },
  ];

  const [selected, setSelected] = useState(languages[0]);

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="top-row">

          <div className="nav-logo">
            <img src={logo} alt="The Groves" />
          </div>

          <div className="right-section desktop-only">
            <div className="social-icons">
              <a href="#"><FaTiktok className="footer-icon" /></a>
              <a href="#"><AiFillInstagram className="footer-icon" /></a>
              <a href="#"><BsTwitterX className="footer-icon" /></a>
              <a href="#"><SiSnapchat className="footer-icon" /></a>
            </div>

            <button className="section-button">Log in</button>

            <div className="lang-dropdown">
              <div
                className="lang-selected"
                onClick={() => setOpen(!open)}
              >
                <img src={selected.flag} alt={selected.name} />
                <span>{selected.name}</span>
                <FaChevronDown className={`chevron ${open ? "rotate" : ""}`} />
              </div>

              {open && (
                <div className="lang-menu">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className="lang-option"
                      onClick={() => handleSelect(lang)}
                    >
                      <img src={lang.flag} alt={lang.name} />
                      <span>{lang.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mobile-only">
            {!menuOpen ? (
              <HiOutlineMenuAlt3
                className="menu-icon"
                onClick={() => setMenuOpen(true)}
              />
            ) : (
              <HiX className="menu-icon" onClick={() => setMenuOpen(false)} />
            )}
          </div>
        </div>

        <div className="nav-row">
          <nav className="nav-links">
            <a href="#">Dine With Us</a>
            <a href="#">Plan Your Visit</a>
            <a href="#">Events</a>
            <a href="#">View Groves Map</a>
            <a href="#">Our Story</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-top">
            <img src={logo} alt="The Groves" className="mobile-menu-logo" />
            <HiX className="menu-icon" onClick={() => setMenuOpen(false)} />
          </div>

          <nav className="mobile-links">
            <a href="#">Dine With Us</a>
            <a href="#">Plan Your Visit</a>
            <a href="#">Events</a>
            <a href="#">View Groves Map</a>
            <a href="#">Our Story</a>
            <a href="#">Contact Us</a>
          </nav>

          <div className="mobile-extras">
            <div className="lang-dropdown">
              <div
                className="lang-selected"
                onClick={() => setOpen(!open)}
              >
                <img src={selected.flag} alt={selected.name} />
                <span>{selected.name}</span>
                <FaChevronDown className={`chevron ${open ? "rotate" : ""}`} />
              </div>

              {open && (
                <div className="lang-menu">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className="lang-option"
                      onClick={() => handleSelect(lang)}
                    >
                      <img src={lang.flag} alt={lang.name} />
                      <span>{lang.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button className="section-button">Log in</button>
          </div>

          <div className="mobile-socials">
            <a href="#"><FaTiktok className="footer-icon" /></a>
            <a href="#"><AiFillInstagram className="footer-icon" /></a>
            <a href="#"><BsTwitterX className="footer-icon" /></a>
            <a href="#"><SiSnapchat className="footer-icon" /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
