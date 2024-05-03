import React from "react";
import styled from "styled-components";
import Header from "./components/Header";

const Homestyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--backColor);
`;

function Home() {
  return (
    <Homestyle>
      <h1>Hello world</h1>
    </Homestyle>
  );
}

export default Home;
