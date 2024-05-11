import React from "react";
import styled from "styled-components";
import Hero from "./sections/Hero";
import Video from "./sections/Video";
import Studio from "./sections/Studio";
import Panel from "./sections/Panel";
import Footer from './components/Footer.jsx'

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
      <Footer />
    </HomeStyle>
  );
}

export default Home;
