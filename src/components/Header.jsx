import React from 'react';
import styled from "styled-components";

const HeaderStyle = styled.div`
  padding: 10px;
  align-items: center;
  top: 0px;
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