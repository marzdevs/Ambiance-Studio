import React from 'react';
import styled from "styled-components";
import roomView from './../assets/images/interior-2.jpg';

const StudioStyle = styled.div`
    position: relative;
    width: 100%;
    margin-top: 80px; 
    margin-bottom: 80px; 
    
    .studioContent {
        display: grid;
        grid-template-columns: 1.2fr 1fr; /* Side-by-side on desktop */
        gap: 60px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 40px;
        align-items: start;
    }

    .textContainer {
        display: flex;
        flex-direction: column;
        gap: 30px; /* Perfectly gaps paragraphs and buttons */
    }

    /* --- NEW HEADER ROW LOGIC --- */
    /* This completely protects your text by keeping the headers in their own structural box */
    .title-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 20px; 
    }

    h1, h2 {
        color: var(--mainColor);
        margin: 0;
        font-size: clamp(50px, 7.5vw, 110px); /* Smooth responsive sizing */
        line-height: 0.9;
        font-family: 'Playfair Display', serif;
    }

    h1 {
        align-self: flex-start; /* Aligns "Ambiance" to the left */
    }

    h2 {
        align-self: flex-end; /* Staggers "Studio" beautifully to the right */
        position: relative;
        padding-bottom: 10px;
    }

    h2::after {
        content: '';
        position: absolute;
        width: 80%;
        height: 4px;
        background-color: var(--whiteColor);
        bottom: 0;
        right: 0;
    }

    /* --- PARAGRAPHS & CONTENT --- */
    p {
        font-family: 'Inter', sans-serif;
        color: var(--mainColor);
        font-size: 17px;
        line-height: 1.75;
        margin: 0;
        max-width: 520px;
    }

    .firstP {
        opacity: 0.9;
    }

    .secondP {
        background-color: #151617;
        padding: 24px;
        border-radius: 6px;
        border-left: 3px solid var(--mainColor);
    }

    .roomView {
        width: 100%;
        
        img {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 4px;
        }
    }

    button {
        align-self: flex-start; 
        padding: 16px 50px;
        font-size: 18px;
        font-weight: 600;
        background-color: var(--mainColor);
        color: var(--backColor);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: transform 0.2s ease, opacity 0.2s ease;

        &:hover {
            transform: translateY(-2px);
            opacity: 0.9;
        }
    }

    /* --- RESPONSIVE MOBILE BREAKPOINT --- */
    @media (max-width: 992px) {
        margin-top: 40px;

        .studioContent {
            grid-template-columns: 1fr; /* Stacks image top, text bottom */
            gap: 40px;
        }

        .textContainer {
            order: 2; 
        }

        .roomView {
            order: 1;
        }

        h1, h2 {
            font-size: clamp(45px, 10vw, 75px); /* Slightly tighter headers on mobile views */
        }
        
        h2::after {
            width: 50%; /* Shortens the underline accent cleanly on screens */
        }

        p {
            max-width: 100%;
        }
    }
`;

function Studio(props) {
    return (
        <StudioStyle>
            <div className="studioContent">
                <div className="textContainer">
                    {/* The wrapper safely stacks headings without absolute positioning collisions */}
                    <div className="title-wrapper">
                        <h1>Ambiance</h1>
                        <h2>Studio</h2>
                    </div>
                    
                    <p className="firstP">From the initial consultation to the final touches, our expert team ensures every detail is meticulously curated to perfection.</p>
                    <button>Learn More</button>
                    <p className="secondP">Explore our portfolio and discover how we can elevate your space, creating experiences that go beyond mere aesthetics. Ready to turn your vision into reality? Book a consultation today and let us bring your dream home to life.</p>
                </div>
                <div className="roomView">
                    <img src={roomView} alt="Room View" />
                </div>
            </div>
        </StudioStyle>
    );
}

export default Studio;