import styled from "styled-components";
import Home_Logo from "../../assets/svg/Home_Logo.svg";
import { NavLink } from "react-router-dom";

const Navigators = (path, label) => {
  return (
    <li>
      <NavLink to={path}>{label}</NavLink>
    </li>
  );
};

const Nav = styled.nav``;

const Logo = styled.div``;

export const NavLinks = [
  { path: "/Home", label: "Home" },
  { path: "/Information", label: "Information" },
  { path: "/Projects", label: "Projects" },
];

export const Navbar = () => {
  return (
    <>
      <Logo>
        <img src={Home_Logo}></img>
      </Logo>

      <Nav>
        <ul>{NavLinks.map((Pages) => Navigators(Pages.path, Pages.label))}</ul>
      </Nav>
    </>
  );
};
