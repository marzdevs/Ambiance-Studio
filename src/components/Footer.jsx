import React from 'react';
import styled from "styled-components";
import footer from './../assets/images/footer.jpg'

const PanelStyle = styled.div`

`
function Footer(props) {
    return (
        <FooterStyle>
            <h1> hello </h1>
            <img src={footer} alt="footer" />

        </FooterStyle>
    );
}

export default Footer;