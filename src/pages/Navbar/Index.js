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

const Nav = styled.nav`
  height: 80px;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  font-family: "Poppins";
  font-weight: medium;
  ul {
    margin-top: 1.75rem;
    position: absolute;
    right: 2%;
    li {
      margin-left: 1rem;
      display: inline;
      font-size: 1.625rem;
      a {
        text-decoration: none;
      }
    }
  }
`;

const Logo = styled.img`
  position: absolute;
  margin-top: 1rem;
  left: 2%;
`;

const NavLinks = [
  { id: 1, path: "/Home", label: "Home" },
  { id: 2, path: "/Information", label: "Information" },
  { id: 3, path: "/Projects", label: "Projects" },
];

export const Navbar = () => {
  return (
    <>
      <Nav>
        <Content>
          <Logo src={Home_Logo} alt={Home_Logo}></Logo>
          <ul>
            {NavLinks.map((Pages) =>
              Navigators(Pages.path, Pages.label, Pages.id)
            )}
          </ul>
        </Content>
      </Nav>
    </>
  );
};
