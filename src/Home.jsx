import React from "react";
import styled from "styled-components";
import Hero from "./sections/Hero";
import Video from "./sections/Video";
import Studio from "./sections/Studio";
import Panel from "./sections/Panel";

const HomeStyle = styled.div`
  height: 100vh;
  background-color: var(--backColor);
`;

function Home() {
  return (
    <HomeStyle>
      <Hero />
      <Video />
      <Studio />
      <Panel />
    </HomeStyle>
  );
}

export default Home;
