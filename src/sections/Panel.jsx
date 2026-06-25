import React from 'react';
import styled from "styled-components";
import mask1 from './../assets/images/mask1.jpg'
import mask2 from './../assets/images/mask2.jpg'
import mask3 from './../assets/images/mask3.jpg'

const PanelStyle = styled.div`
    margin-top: 28%;
    padding: 20px;
    color: var(--whiteColor);
    display: flex;
    /* CHANGE THIS: Keeps them in a single row until the mobile breakpoint hits */
    flex-wrap: nowrap; 
    justify-content: space-between;
    gap: 20px; /* Explicit gap between the columns */

    .image-container {
        /* Changed to a flexible percentage width */
        flex: 1; 
        margin-bottom: 5%;
        text-align: center;
    }

    .image-container img {
        max-width: 100%;
        height: auto;
    }

    p {
        font-size: 20px;
        margin-top: 10px;
        /* REDUCED: 18% left margin is too wide and squishes the text box */
        margin-left: 5%; 
        margin-right: 5%;
        text-align: left;
        /* REMOVED hardcoded 392px width so it scales dynamically */
        max-width: 100%; 
    }

h1 {
      font-family: 'Playfair Display', 'Didot', 'Georgia', serif; /* Elegant, high-end serif */
      font-size: 32px;
      font-weight: 400; /* Lighter weight looks more premium */
      letter-spacing: 1px; /* Subtle breathing room between letters */
      margin-bottom: 24px;
      color: var(--mainColor);
    }

    p {
      font-family: 'Inter', 'Helvetica Neue', 'Arial', sans-serif; /* Clean, highly readable sans-serif */
      font-size: 15px; /* Slightly smaller body text feels more editorial */
      line-height: 1.75; /* This is the magic key—adds beautiful vertical breathing room */
      letter-spacing: 0.3px;
      color: #e0e0e0; /* A soft, slightly muted white reduces eye strain */
      
      /* Center the text block itself, but keep the text left-aligned */
      margin: 0 auto; 
      width: 85%; /* Keeps line lengths optimal for reading */
      text-align: left;
    }

    /* --- RESPONSIVE MOBILE FIX --- */
    @media (max-width: 1024px) {
        margin-top: 10%; 
        flex-wrap: wrap;
        
        .image-container {
            flex-basis: 100%;
            margin-bottom: 60px; 
        }

        /* Adjust typography slightly for small screens */
        h1 {
            font-size: 28px;
            margin-bottom: 16px;
        }

        p {
            width: 100%;
            padding: 0 15px;
            box-sizing: border-box;
            font-size: 16px; /* Slightly larger for easier reading on phones */
        }
    }
`;

function Panel(props) {
    return (
        <PanelStyle>
            <div className="image-container">
                <h1>The Living Room</h1>
                <img src={mask1} alt="Living Room Design" />
                <p>Crafting intentional spaces that balance form, warmth, and function. We curate every element—from custom seating to ambient lighting profiles—to ensure your primary gathering space feels effortlessly elevated yet deeply personal.</p>
            </div>
            <div className="image-container">
                <h1>Materiality</h1>
                <img src={mask2} alt="Sofa and textures" />
                <p>A celebration of rich textures, organic silhouettes, and fine craftsmanship. By contrasting raw architectural elements with soft, premium textiles, we create layered environments that engage the senses.</p>
            </div>
            <div className="image-container">
                <h1>The Dining Space</h1>
                <img src={mask3} alt="Dining table layout" />
                <p>Designed for connection and lingering conversations. Our approach integrates bespoke furniture selections with thoughtful spatial layouts, turning everyday dining into an immersive culinary experience.</p>
            </div>
        </PanelStyle>
    );
}

export default Panel;