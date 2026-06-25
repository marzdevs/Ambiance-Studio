import React from 'react';
import styled from "styled-components";
import mask1 from './../assets/images/mask1.jpg'
import mask2 from './../assets/images/mask2.jpg'
import mask3 from './../assets/images/mask3.jpg'

const PanelStyle = styled.div`
    /* balanced viewport footprint—keeps it a hero without the massive gaps */
    min-height: 85vh;
    width: 100%;
    
    /* handle vertical and horizontal centering */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    /* clean, compact padding to match the studio section layout */
    margin: 0;
    padding: 40px 40px;
    box-sizing: border-box;
    color: var(--whiteColor);
    
    /* force browser to render layer cleanly without scrolling lag */
    will-change: transform;

    /* grid alignment container for columns */
    .panel-content-row {
        display: flex;
        flex-wrap: nowrap; 
        justify-content: space-between;
        gap: 20px;
        width: 100%;
        max-width: 1200px;
    }

    .image-container {
        flex: 1; 
        margin-bottom: 5%;
        text-align: center;
    }

    .image-container img {
        max-width: 100%;
        height: auto;
    }

    h1 {
      font-family: 'Playfair Display', 'Didot', 'Georgia', serif; 
      font-size: 32px;
      font-weight: 400; 
      letter-spacing: 1px; 
      margin-bottom: 24px;
      color: var(--mainColor);
    }

    p {
      font-family: 'Inter', 'Helvetica Neue', 'Arial', sans-serif; 
      font-size: 15px; 
      line-height: 1.75; 
      letter-spacing: 0.3px;
      color: #e0e0e0; 
      
      margin: 0 auto; 
      width: 85%; 
      text-align: left;
    }

    /* --- RESPONSIVE MOBILE FIX --- */
    @media (max-width: 1024px) {
        min-height: auto;
        padding: 40px 24px;
        
        .panel-content-row {
            flex-wrap: wrap;
        }
        
        .image-container {
            flex-basis: 100%;
            margin-bottom: 60px; 
        }

        h1 {
            font-size: 28px;
            margin-bottom: 16px;
        }

        p {
            width: 100%;
            padding: 0 15px;
            box-sizing: border-box;
            font-size: 16px; 
        }
    }
`;

function Panel(props) {
    return (
        <PanelStyle>
            <div className="panel-content-row">
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
            </div>
        </PanelStyle>
    );
}

export default Panel;