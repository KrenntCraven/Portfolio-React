import Logo from "../src/assets/svg/Logo.svg";
import "./index.css";
import styled, { ThemeProvider } from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  background-size: cover;
`;
const Header = styled.header`
  .App-logo {
    display: block;
    width: auto;
    margin: auto;
  }
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        //White
        primaryColor: "rgb(249, 249, 249)",
      }}
    >
      <Container>
        <Header>
          <img src={Logo} className="App-logo" alt="logo" />
        </Header>
      </Container>
    </ThemeProvider>
  );
}

export default App;
