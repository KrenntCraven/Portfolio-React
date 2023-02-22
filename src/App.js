import Logo from "../src/assets/svg/Logo.svg";
import "./index.css";
import { verticalCentered } from "./Global";
import styled, { ThemeProvider } from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  height: 100vh;
  width: 100vw;

  .App-logo {
    ${verticalCentered}
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
        <img src={Logo} className="App-logo" alt="logo" />
      </Container>
    </ThemeProvider>
  );
}

export default App;
