import React from 'react';
import styled from "styled-components";
import roomView from './../assets/images/interior-2.jpg';

const StudioStyle = styled.div`
    margin: 10px;
    img {
        float:right;
        max-width: 100%;
    }
`
function Studio(props) {
    return (
        <StudioStyle>
            <h1>Ambiance </h1>
            <h2>Studio</h2>
            <img src={roomView} />
            <p>From the initial consultation to the final touches, our expert team ensures every detail is meticulously curated to perfection. Explore our portfolio and discover how we can elevate your space.</p>
        </StudioStyle>
    );
}

export default Studio;