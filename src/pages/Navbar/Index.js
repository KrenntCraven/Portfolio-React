import styled from "styled-components";
import Home_Logo from "../../assets/svg/Home_Logo.svg";
import { NavLink } from "react-router-dom";

const Navigators = (path, label, id) => {
  return (
    <li key={id}>
      <NavLink to={path}>{label}</NavLink>
    </li>
  );
};

const Nav = styled.nav``;

const Logo = styled.div``;

const NavLinks = [
  { id: 1, path: "/Home", label: "Home" },
  { id: 2, path: "/Information", label: "Information" },
  { id: 3, path: "/Projects", label: "Projects" },
];

export const Navbar = () => {
  return (
    <>
      <Logo>
        <img src={Home_Logo}></img>
      </Logo>

      <Nav>
        <ul>
          {NavLinks.map((Pages) =>
            Navigators(Pages.path, Pages.label, Pages.id)
          )}
        </ul>
      </Nav>
    </>
  );
};
