import { NavLink } from "react-router-dom";
import { Navbar } from "../Navbar/Index";
import styled from "styled-components";

const Navigators = (path, label) => {
  return (
    <li>
      <NavLink to={path}>{label}</NavLink>
    </li>
  );
};

const Nav = styled.nav``;

export const Home = () => {
  return (
    <>
      <Nav>
        <ul>{Navbar.map((Pages) => Navigators(Pages.path, Pages.label))}</ul>
      </Nav>
    </>
  );
};
