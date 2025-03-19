import React, { useState } from "react";
import { Link } from "react-router-dom";
import CAE_LOGO from "../images/CAE_logo.png";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyItems: "center",
        width: "100%",
      }}
    >
      <header
        style={{
          width: "80%",
          backgroundColor: "white",
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
          position: "relative",
          margin: "0 auto",
        }}
      >
        <img
          src={CAE_LOGO}
          alt="CAE Logo"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "6rem",
          }}
        />

        <nav className="hidden md:block">
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              listStyleType: "none",
              paddingLeft: 0,
            }}
          >
            <li style={{ marginRight: "1.5rem" }}>
              <Link
                to="#home"
                style={{
                  color: "#1e40af",
                  fontSize: "1.125rem",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#f97316";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#1e40af";
                }}
              >
                Home
              </Link>
            </li>
            <li style={{ marginRight: "1.5rem" }}>
              <Link
                to="#services"
                style={{
                  color: "#000",
                  fontSize: "1.125rem",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#f97316";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#000";
                }}
              >
                Services
              </Link>
            </li>
            <li style={{ marginRight: "1.5rem" }}>
              <Link
                to="#contact"
                style={{
                  color: "#000",
                  fontSize: "1.125rem", // text-lg
                  fontWeight: "500", // font-medium
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#f97316"; // hover:text-orange-400
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#000"; // revert to black
                }}
              >
                Contact
              </Link>
            </li>
            <li style={{ marginRight: "1.5rem" }}>
              <Link
                to="#about"
                style={{
                  color: "#000", // black
                  fontSize: "1.125rem", // text-lg
                  fontWeight: "500", // font-medium
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#f97316"; // hover:text-orange-400
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#000"; // revert to black
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#support"
                style={{
                  color: "#000",
                  fontSize: "1.125rem",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#f97316";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#000";
                }}
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="absolute right-0 md:hidden text-white"
          onClick={() => {
            setShowMobileNav(!showMobileNav);
          }}
        >
          <div className="w-6 h-1 bg-black mb-1 rounded"></div>
          <div className="w-6 h-1 bg-black mb-1 rounded"></div>
          <div className="w-6 h-1 bg-black rounded"></div>
        </button>
      </header>
      <nav
        style={{
          display: `${showMobileNav ? "block" : "none"}`,
          marginTop: "70px",
          position: "absolute",
          width: "100%",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "20px",
            background: "white",
            flexDirection: "column",
            justifyContent: "center",
            listStyleType: "none",
            paddingLeft: 0,
            alignItems: "center",
          }}
        >
          <li>
            <Link
              to="#home"
              style={{
                color: "#1e40af",
                fontSize: "1.125rem",
                fontWeight: "500",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#f97316";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#1e40af";
              }}
              onClick={() => setShowMobileNav(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#services"
              style={{
                color: "#000",
                fontSize: "1.125rem",
                fontWeight: "500",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#f97316";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#000";
              }}
              onClick={() => setShowMobileNav(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="#contact"
              style={{
                color: "#000",
                fontSize: "1.125rem", // text-lg
                fontWeight: "500", // font-medium
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#f97316"; // hover:text-orange-400
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#000"; // revert to black
              }}
              onClick={() => setShowMobileNav(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="#about"
              style={{
                color: "#000", // black
                fontSize: "1.125rem", // text-lg
                fontWeight: "500", // font-medium
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#f97316"; // hover:text-orange-400
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#000"; // revert to black
              }}
              onClick={() => setShowMobileNav(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#support"
              style={{
                color: "#000",
                fontSize: "1.125rem",
                fontWeight: "500",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#f97316";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#000";
              }}
              onClick={() => setShowMobileNav(false)}
            >
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
