import React from 'react';
import styled from "styled-components";

const HeroStyle = styled.div`
    padding: 120px 40px 40px 40px; /* Balanced top and bottom padding inside the hero */
    color: var(--mainColor);
    max-width: 1200px;
    margin: 0 auto 60px auto; /* Added a 60px bottom margin to push everything below it down */
    
    display: grid;
    grid-template-columns: 1.4fr 1fr; 
    gap: 40px;
    
    /* CHANGE THIS: Centers the paragraph vertically against the two-line header block */
    align-items: center; 

    .hero-titles {
        display: flex;
        flex-direction: column;
    }

    h1 {
        margin: 0;
        font-family: 'Playfair Display', serif;
        font-size: clamp(40px, 6vw, 80px); 
        line-height: 1.1;
        font-weight: 400;
    }

    /* CHANGER THIS: Premium typography adjustments for clean reading */
    p {
        margin: 0;
        font-family: 'Inter', sans-serif;
        font-size: 16px; /* Slightly smaller size feels more luxury/editorial */
        line-height: 1.8; /* Expands line spacing to make it clean and easy on the eyes */
        letter-spacing: 0.3px;
        opacity: 0.8; /* Softens the text slightly to prioritize the main header */
        max-width: 440px; 
    }

    /* --- RESPONSIVE MOBILE BREAKPOINT --- */
    @media (max-width: 992px) {
        grid-template-columns: 1fr; 
        gap: 24px;
        padding: 100px 24px 40px 24px;
        margin-bottom: 40px;

        p {
            max-width: 100%; 
            font-size: 16px;
        }
    }
`;

function Hero(props) {
    return (
        <HeroStyle>
            <div className="hero-titles">
                <h1>Elevate Your Space with</h1>
                <h1>Expert Design</h1>
            </div>
            <p>
                We specialize in transforming spaces and inspiring lives. With a passion for design and a commitment to excellence, we craft homes that reflect the unique personalities and lifestyles of our clients.
            </p>    
        </HeroStyle>
    );
}

export default Hero;