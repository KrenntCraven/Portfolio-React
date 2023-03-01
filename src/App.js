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
`;
const App_Logo = styled.img`
  ${verticalCentered}
  height: 22.83vw;
  width: 18.625vw;
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
      {/* animate={{ opacity: 1, scale: 0 }}
      initial={{ opacity: 0 }} */}
      <Container as={motion.div} />
      <Link to="/Home">
        <App_Logo
          src={Logo}
          alt="logo"
          as={motion.img}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
        />
      </Link>
    </ThemeProvider>
  );
}

export default App;
