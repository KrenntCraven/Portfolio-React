import Logo from "../src/assets/svg/Logo.svg";
import "./index.css";
import Background_Home from "../src/assets/svg/Background_Home.svg";
import { verticalCentered } from "./Global";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Container = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  background: url(${Background_Home});
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  position: static;
`;
const App_Logo = styled.button`
  ${verticalCentered}
  height: 22.83vw;
  width: 18.625vw;
  z-index: 100;
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        // White
        primaryColor: "rgb(249, 249, 249)",
        // Black
        secondColor: "rgb(12, 11, 19)",
      }}
    >
      <Container
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 2 }}
      />
      <Link to="/Home">
        <App_Logo as={motion.img} src={Logo} alt="logo" />
      </Link>
    </ThemeProvider>
  );
}

export default App;
