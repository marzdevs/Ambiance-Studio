import React from 'react';
import styled from "styled-components";
import roomView from './../assets/images/interior-2.jpg';

const StudioStyle = styled.div`
    position: relative;
    
    .studioContent {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        margin-left: 150px;
    }

    .roomView {
        flex: 1;
        margin-top: 20%;
        margin-right: 15%;
    }

    img {
        max-width: 100%;
        display: block;
    }

    .textContainer {
        flex: 1;
        position: relative;
        margin-left: 40px; /* Add left margin */
    }

    h1, h2, p {
        color: var(--mainColor);
        margin: 0;
    }

    h1 {
        font-size: 128px;
        position: absolute;
        top: 0%;
        left: 26%;
        transform: translateY(-250%);
        z-index: 1;
    }

    h2 {
        font-size: 128px;
        position: absolute;
        top: 0;
        left: 75%;
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

    .firstP {
        position: absolute;
        font-size: 24px;
        left: 24%;
        margin-top: 5%;
        width: 65%;
    }

    .secondP {
        position: absolute;
        font-size: 24px;
        background-color: #151617;
        color: var(--mainColor);
        padding: 20px;
        width: 110%;
        margin-top: 66%;
        left: 21%;
    }

    button {
        padding: 20px 75px;
        font-size: 25px;
        background-color: var(--mainColor);
        color: var(--backColor);
        border: none;
        border-radius: 10px;
        cursor: pointer;
        position: absolute;
        top: calc(280px + 40px);
        left: 24%;
    }
`;

function Studio(props) {
    return (
        <StudioStyle>
            <div className="studioContent">
                <div className="textContainer">
                    <h1>Ambiance</h1>
                    <h2>Studio</h2>
                    <p className="firstP">From the initial consultation to the final touches, our expert team ensures every detail is meticulously curated to perfection. Explore our portfolio and discover how we can elevate your space.</p>
                    <button>Learn More</button>
                    <p className="secondP">From the initial consultation to the final touches, our expert team ensures every detail is meticulously curated to perfection. Explore our portfolio and discover how we can elevate your space, creating experiences that go beyond mere aesthetics. Ready to turn your vision into reality? Book a consultation today and let us bring your dream home to life.</p>
                </div>
                <div className="roomView">
                    <img src={roomView} alt="Room View" />
                </div>
            </div>
        </StudioStyle>
    );
}

export default Studio;
