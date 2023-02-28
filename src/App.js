import Logo from "../src/assets/svg/Logo.svg";
import "./index.css";
import Background_Home from "../src/assets/svg/Background_Home.svg";
import { verticalCentered } from "./Global";
import styled, { ThemeProvider } from "styled-components";
import { Routes, Link } from "react-router-dom";

const Container = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  background: url(${Background_Home});
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;

  .App-logo {
    ${verticalCentered}
    width: 18.625vw;
    height: 22.83vw;
  }
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
      <Container>
        <Link to="/Home">
          <img src={Logo} className="App-logo" alt="logo" />
        </Link>
      </Container>
    </ThemeProvider>
  );
}

export default App;
