import React from 'react';
import styled from "styled-components";
import hero from './../assets/images/hero.jpg'

const VideoStyle = styled.div`


`

function Video(props) {
    return (
    <div className='heroVid' style={{ backgroundImage: `url(${hero})` }}>
    </div>        
    );
}

export default Video;