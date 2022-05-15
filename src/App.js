import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { GlobalStyle } from "./styles/globalStyle";

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
