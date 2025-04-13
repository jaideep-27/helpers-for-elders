import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 5%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1050;
  transition: all 0.4s ease;
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.3)'};
  box-shadow: ${props => props.scrolled ? '0 1px 8px rgba(0, 0, 0, 0.08)' : 'none'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'blur(3px)'};
`;

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.div`
  width: 28px;
  height: 28px;
  background-color: ${props => props.scrolled ? '#e6835c' : 'white'};
  border-radius: 50%;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  
  &:before {
    content: "♥";
    font-size: 14px;
    color: ${props => props.scrolled ? 'white' : '#e6835c'};
    transition: all 0.4s ease;
  }
`;

const Logo = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${props => props.scrolled ? '#333' : '#fff'};
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: all 0.4s ease;
  text-shadow: ${props => props.scrolled ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.3)'};
  
  span {
    color: #e6835c;
    transition: all 0.4s ease;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.scrolled ? '#333' : '#fff'};
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;
  transition: all 0.4s ease;
  text-shadow: ${props => props.scrolled ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.3)'};
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #e6835c;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #e6835c;
    
    &:after {
      width: 100%;
    }
  }
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ContactButton = styled(Link)`
  display: ${props => props.showMobile ? 'none' : 'flex'};
  background-color: #e6835c;
  color: #fff;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(230, 131, 92, 0.3);
  
  &:hover {
    background-color: #d47a54;
    transform: translateY(-2px);
    box-shadow: 0 3px 6px rgba(230, 131, 92, 0.4);
  }
  
  @media (max-width: 992px) {
    display: ${props => props.showMobile ? 'flex' : 'none'};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.scrolled ? '#333' : '#fff'};
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1200;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  &:hover {
    color: #e6835c;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 1100;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const MobileLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 600;
  transition: all 0.3s ease;
  font-family: 'Playfair Display', serif;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    background-color: #e6835c;
    bottom: -5px;
    left: 0;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #e6835c;
    
    &:after {
      width: 100%;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: #e6835c;
    transform: rotate(90deg);
  }
`;

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <Nav scrolled={scrolled}>
      <LogoContainer>
        <LogoIcon scrolled={scrolled} />
        <Logo to="/" scrolled={scrolled}>
          Helpers <span>for</span> Elders
        </Logo>
      </LogoContainer>
      
      <NavLinks>
        <NavLink to="/" scrolled={scrolled}>Home</NavLink>
        <NavLink to="/services" scrolled={scrolled}>Services</NavLink>
        <NavLink to="/about" scrolled={scrolled}>About Us</NavLink>
        <NavLink to="/contact" scrolled={scrolled}>Contact</NavLink>
      </NavLinks>
      
      <NavButtons>
        <ContactButton to="/contact">Get Care</ContactButton>
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)} scrolled={scrolled}>
          ☰
        </MobileMenuButton>
      </NavButtons>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton onClick={() => setMobileMenuOpen(false)}>✕</CloseButton>
            <MobileLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileLink>
            <MobileLink to="/services" onClick={() => setMobileMenuOpen(false)}>Services</MobileLink>
            <MobileLink to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</MobileLink>
            <MobileLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileLink>
            <ContactButton to="/contact" showMobile={true} onClick={() => setMobileMenuOpen(false)}>
              Get Started Now
            </ContactButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
}

export default Navbar; 