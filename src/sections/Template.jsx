import React from 'react';
import styled from "styled-components";

const TemplateStyle = styled.div`
    padding: 80px 20px;
    color: var(--mainColor);
    display: flex;
    flex-wrap: wrap;
    overflow: auto;

    h1 {
        width: 70%;
    }

    p {
        width: 70%;
        float: right; 
        margin-left: 56%;
        margin-top:-4%;
        font-size: 24px;
    }

`;

function Template(props) {
    return (
        <TemplateStyle>
            <h1>Elevate Your Space with </h1>
            <h1>Expert Design</h1>
            <p>We specialize in transforming spaces and inspiring lives. With a passion for design and a commitment to excellence, we craft homes that reflect the unique personalities and lifestyles of our clients.</p>    
        </TemplateStyle>
    );
}

export default Hero;
