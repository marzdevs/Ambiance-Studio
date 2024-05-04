import React from 'react';
import styled from "styled-components";
import hero from './../assets/images/hero.jpg'

const VideoStyle = styled.div`
margin: 0; /* Remove default margin */
padding: 0; /* Remove default padding */
display: flex;
justify-content: center; /* Center the image horizontally */


.imag {
    width: 100%; /* Ensure the image doesn't exceed the width of its container */
    height: auto; /* Maintain aspect ratio */
    margin-top: -40px;
}

`

function Video(props) {
    return (
    // <div className='heroVid' style={{ backgroundImage: `url(${hero})` }}>
    // </div>   
    <VideoStyle>
    <img src={hero} className="imag" alt="Hero Image" />
    </VideoStyle>
    );
}

export default Video;