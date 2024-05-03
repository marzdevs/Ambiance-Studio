import React from 'react';
import styled from "styled-components";
const HeroStyle = styled.div`
    width: 100vw;
    padding: 120px 20px;
    float: left;
    color: var(--mainColor);
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    

    h1 {
        width: calc(70% - 20px);
        margin-right: 30px;
    }

    p {
        width: 30%;
        margin-right: 30px; 
        margin-top: 3%;
    }

`;

function Hero(props) {
    return (
        <HeroStyle>
            <h1>Elevate Your Space with <br /> Expert Design</h1>
            <p>We specialize in transforming spaces and inspiring lives. With a passion for design and a commitment to excellence, we craft homes that reflect the unique personalities and lifestyles of our clients.</p>

        </HeroStyle>
    );
}

export default Hero;
