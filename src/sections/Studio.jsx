import React from 'react';
import styled from "styled-components";
import roomView from './../assets/images/interior-2.jpg';

const StudioStyle = styled.div`
position: relative;

.studioContent {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.roomView {
    flex: 1;
    margin-top: 20%;
    margin-left: -22%;
}

img {
    max-width: 100%;
    display: block;
}

.textContainer {
    flex: 1;
    position: relative;
}

h1, h2, p {
    color: var(--mainColor);
    margin: 0;
}

h1 {
    font-size: 128px;
    position: absolute;
    top: 0%;
    left: 23%;
    transform: translateY(-280%);
    z-index: 1;
}

h2 {
    font-size: 128px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-6%, -140%);
    margin-top: 20px;
}

h2::after {
    content: '';
    position: absolute;
    width: 75%;
    height: 5px;
    background-color: var(--whiteColor);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
}

p {
    position: absolute;
    font-size: 24px;
    left: 23%;
    margin-top: 80px;
    width: 35%;

}

button {
    padding: 20px 50px;
    font-size: 25px;
    background-color: var(--mainColor);
    color: var(--backColor);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    position: absolute;
    top: calc(350px + 40px);
    left: 23%;

}

`;

function Studio(props) {
    return (
        <StudioStyle>
            <div className="studioContent">
                <div className="textContainer">
                    <h1>Ambiance</h1>
                    <h2>Studio</h2>
                    <p>From the initial consultation to the final touches, our expert team ensures every detail is meticulously curated to perfection. Explore our portfolio and discover how we can elevate your space.</p>
                    <button>Learn More</button>

                </div>
                <div className="roomView">
                    <img src={roomView} alt="Room View" />
                </div>
            </div>
        </StudioStyle>
    );
}

export default Studio;
