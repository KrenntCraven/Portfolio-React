import Home_Background from "../../assets/svg/Home_Background.svg";
import styled from "styled-components";
// ====== Components ======
import { Navbar } from "../Navbar/Index";

const Container = styled.div`
  background: url(${Home_Background});
`;

export const Home = () => {
  return (
    <>
      <Container>
        <Navbar />
      </Container>
    </>
  );
};
