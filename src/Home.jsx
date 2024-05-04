import React from "react";
import styled from "styled-components";
import Hero from "./sections/Hero";
import Video from "./sections/Video";
// import Studio from "./sections/Studio";

const HomeStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--backColor);
`;

function Home() {
  return (
    <HomeStyle>
      <Hero />
      <Video />
      {/* <Studio /> */}
    </HomeStyle>
  );
}

export default Home;
