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
    flex-wrap: wrap;
    justify-content: space-between;

    .image-container {
        flex-basis: calc(33.33% - 20px); /* Adjust width based on your design */
        margin-bottom: 20%;
        text-align: center;
    }

    .image-container img {
        max-width: 100%;
        height: auto;
    }

    p {
        font-size: 20px;
        margin-top: 10px;
        margin-left: 18%;
        text-align: left;
        width: 392px;

    }
    h1 {
        font-size: 34px;
        margin-bottom: 5%;
        color: var(--mainColor);
    }
`;

function Panel(props) {
    return (
        <PanelStyle>
            <div className="image-container">
                <h1> Lorem Ipsum</h1>
                <img src={mask1} alt="Image 1" />
                <p>Lorem ipsum dolor sit amet consectetur. Nulla nulla tellus aliquam sit adipiscing non lacus a commodo. Tortor leo purus mi ipsum neque egestas. Fringilla molestie tincidunt mi integer condimentum. A magna et ullamcorper tristique tristique vitae.</p>
            </div>
            <div className="image-container">
            <h1> Lorem Ipsum</h1>
                <img src={mask2} alt="Image 2" />
                <p>Lorem ipsum dolor sit amet consectetur. Nulla nulla tellus aliquam sit adipiscing non lacus a commodo. Tortor leo purus mi ipsum neque egestas. Fringilla molestie tincidunt mi integer condimentum. A magna et ullamcorper tristique tristique vitae.</p>
            </div>
            <div className="image-container">
            <h1> Lorem Ipsum</h1>
                <img src={mask3} alt="Image 3" />
                <p>Lorem ipsum dolor sit amet consectetur. Nulla nulla tellus aliquam sit adipiscing non lacus a commodo. Tortor leo purus mi ipsum neque egestas. Fringilla molestie tincidunt mi integer condimentum. A magna et ullamcorper tristique tristique vitae.</p>
            </div>
        </PanelStyle>
    );
}

export default Panel;