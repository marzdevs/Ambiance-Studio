import React, { useState } from 'react';
import styled from "styled-components";

const HeaderStyle = styled.nav`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Keeps the navbar pinned to the top as you scroll */
  top: 0;
  left: 0;
  right: 0;
  background-color: #151617; /* Match your site background */
  border-bottom: 1px solid #F1EDE4;
  z-index: 1000; /* Keeps it above all other layers */

  a {
    color: var(--mainColor);
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  .LeftLink {
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    font-size: 20px;
  }

  /* --- DESKTOP LINKS CONTAINER --- */
  .nav-links {
    display: flex;
    gap: 32px;
    align-items: center;
  }

  /* --- HAMBURGER BUTTON STYLING --- */
  .hamburger {
    display: none; /* Hidden on desktop */
    flex-direction: column;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    z-index: 1001; /* Stays above the overlay */

    span {
      display: block;
      width: 28px;
      height: 2px;
      background-color: var(--mainColor);
      transition: all 0.3s ease;
    }

    /* Animated transformations when menu opens */
    &.open span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    &.open span:nth-child(2) {
      opacity: 0;
    }
    &.open span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  /* --- RESPONSIVE MOBILE BREAKPOINT --- */
  @media (max-width: 768px) {
    padding: 20px 24px;

    .hamburger {
      display: flex; /* Show hamburger button on mobile */
    }

    .nav-links {
      position: fixed;
      top: 0;
      right: 0;
      width: 70%; /* Takes up partial screen width */
      height: 100vh;
      background-color: #1a1b1c; /* Slightly offset dark background */
      flex-direction: column;
      justify-content: center;
      gap: 40px;
      padding-left: 10%;
      align-items: flex-start;
      
      /* Slide-out animation engine */
      transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
      transition: transform 0.3s ease-in-out;
      box-shadow: -5px 0 15px rgba(0,0,0,0.5);
    }

    a {
      font-size: 22px; /* Larger links are much easier to tap on phones */
    }
  }
`;

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        /* We pass the open state directly to styled-components using the isOpen prop */
        <HeaderStyle isOpen={isOpen}>
            <a className="LeftLink" href='/'>Ambiance Studio</a> 
            
            {/* Hamburger trigger button */}
            <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Links get wrapped together so they can slide as a unit on mobile */}
            <div className="nav-links">
                <a href='/' onClick={() => setIsOpen(false)}>Work</a> 
                <a href='/' onClick={() => setIsOpen(false)}>About</a> 
                <a href='/' onClick={() => setIsOpen(false)}>Contact</a> 
            </div>
        </HeaderStyle>
    );
}

export default Header;