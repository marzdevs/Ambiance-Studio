import React from 'react';
import styled from "styled-components";

const HeroStyle = styled.div`
    padding: 80px 20px;
    color: var(--mainColor);
    display: flex;
    flex-wrap: wrap;
    overflow: auto;

    h1 {
        width: 70%;
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
