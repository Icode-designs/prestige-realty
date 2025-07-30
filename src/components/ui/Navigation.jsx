import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { Heading3 } from "@/styles/Ui.styles";
import { useAuthUser } from "@/hooks/useAuthUser";
import { CgProfile } from "react-icons/cg";
import { signOut } from "@/utils/signout";

const Navigation = ({ isNavOpen, closeNav, footerNav = "" }) => {
  const { user } = useAuthUser();
  // console.log("Navigation user:", user);

  return (
    <nav>
      {footerNav && <Heading3>Links</Heading3>}
      <ul>
        <li>
          <NavLink
            to="/Categories"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={isNavOpen && closeNav}
          >
            Neighborhoods
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/listings"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={isNavOpen && closeNav}
          >
            Listings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={isNavOpen && closeNav}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={isNavOpen && closeNav}
          >
            Contact
          </NavLink>
        </li>
        {!footerNav && (
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={isNavOpen && closeNav}
            >
              See Blog
            </NavLink>
          </li>
        )}

        {!footerNav && user && (
          <li>
            <NavLink
              to="/dashboard"
              className="dashboard"
              onClick={isNavOpen && closeNav}
            >
              <p>User</p>
              <CgProfile />
            </NavLink>
          </li>
        )}
        {!footerNav && user && (
          <button className="logoutBtn" onClick={signOut}>
            Logout
          </button>
        )}
      </ul>

      {!footerNav && !user && (
        <Link to="/signup" onClick={isNavOpen && closeNav}>
          <Button>Signup/Login</Button>
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
