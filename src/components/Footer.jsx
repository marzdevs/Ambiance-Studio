import React from 'react';
import styled from "styled-components";
import footer from './../assets/images/footer.jpg'

const FooterStyle = styled.div`
margin: 0; /* Remove default margin */
padding: 0; /* Remove default padding */
display: flex;
justify-content: center; /* Center the image horizontally */


.footer {
    width: 100%; /* Ensure the image doesn't exceed the width of its container */
    height: auto; /* Maintain aspect ratio */
    margin-top: -40px;
}

`
function Footer(props) {
    return (
        <FooterStyle>
            <img className="footer" src={footer} alt="footer" />

        </FooterStyle>
    );
}

export default Footer;