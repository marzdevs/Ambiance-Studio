import React from 'react';
import styled from "styled-components";

const HeaderStyle = styled.div`
  width: 100%;
  padding: 10px;
  position: absolute;
  align-items: center;
  top: 0;
  gap: 32px;
  display:flex;
  justify-content: space-between;
  border-bottom: 1px solid #F1EDE4;


`;
function Header(props) {
    return (
        <HeaderStyle>
            <a className="LeftLink" href='/'>Ambiance Studio</a> 
            <a href='/'>Work</a> 
            <a href='/'>About</a> 
            <a href='/'>Contact</a> 

        </HeaderStyle>
    );
}

export default Header;