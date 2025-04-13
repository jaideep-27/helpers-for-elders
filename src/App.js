import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// Styled Components
const AppContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
  color: #333;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  background-color: #f9f5f0;
`;

const MainContent = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  background-color: #246a73;
  color: white;
  padding: 4rem 5% 2rem;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(240, 192, 101, 0.3), transparent);
  }
`;

const FooterPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNTkuMzEsMjcuNzJhMS45NCwxLjk0LDAsMCwwLS42OC0uMzcsMi4wNywyLjA3LDAsMCwwLS43My0uMDYsMi4xMywyLjEzLDAsMCwwLS43Mi4yLDEuODcsMS44NywwLDAsMC0uNTguNDRMMzAsMzQsMy40LDI3LjkzYTEuODcsMS44NywwLDAsMC0uNTgtLjQ0LDIuMTMsMi4xMywwLDAsMC0uNzItLjIsMi4wNywyLjA3LDAsMCwwLS43My4wNiwxLjk0LDEuOTQsMCwwLDAtLjY4LjM3QTEuNzUsMS43NSwwLDAsMCwwLDI5LjIxYTEuODMsMS44MywwLDAsMCwwLC43NSwyLDIsMCwwLDAsLjMuNywxLjk0LDEuOTQsMCwwLDAsLjU3LjU0TDMwLDM4bDI5LjEzLTYuODRhMS45NCwxLjk0LDAsMCwwLC41Ny0uNTQsMiwyLDAsMCwwLC4zLS43LDEuODMsMS44MywwLDAsMCwwLS43NUExLjc1LDEuNzUsMCwwLDAsNTkuMzEsMjcuNzJaIiBmaWxsPSIjZjBjMDY1IiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=');
  opacity: 0.1;
  z-index: 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  position: relative;
  z-index: 1;
`;

const FooterSection = styled.div``;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const FooterLogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background-color: #e6835c;
  border-radius: 50%;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:before {
    content: "♥";
    font-size: 16px;
    color: white;
  }
`;

const FooterLogoText = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 700;
  
  span {
    color: #f0c065;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  color: #fff;
  
  &:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 2px;
    background-color: #f0c065;
    bottom: -8px;
    left: 0;
  }
`;

const FooterText = styled.p`
  font-size: 0.95rem;
  line-height: 1.8;
  color: #e0e0e0;
  margin-bottom: 1.5rem;
  max-width: 300px;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: #e0e0e0;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
    position: relative;
    padding-left: 15px;
    font-size: 0.95rem;
    
    &:before {
      content: '›';
      position: absolute;
      left: 0;
      color: #f0c065;
      transition: transform 0.3s ease;
    }
    
    &:hover {
      color: #f0c065;
      transform: translateX(5px);
      
      &:before {
        transform: translateX(3px);
      }
    }
  }
`;

const FooterContact = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  color: #e0e0e0;
`;

const FooterContactIcon = styled.div`
  width: 20px;
  margin-right: 12px;
  color: #f0c065;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
`;

const FooterContactText = styled.span`
  font-size: 0.9rem;
  line-height: 1.6;
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #fff;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e6835c;
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2.5rem;
  margin-top: 2.5rem;
  border-top: 1px solid rgba(255,255,255,0.08);
  color: #aaa;
  font-size: 0.85rem;
  position: relative;
  z-index: 1;
`;

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 45px;
  height: 45px;
  background-color: #e6835c;
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  opacity: ${props => props.visible ? '1' : '0'};
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(20px)'};
  transition: all 0.3s ease;
  z-index: 900;
  
  &:hover {
    background-color: #d4714e;
    transform: translateY(-3px);
  }
`;

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <AppContainer>
        <Navbar />
        
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>
        
        <Footer>
          <FooterPattern />
          <FooterContent>
            <FooterSection>
              <FooterLogo>
                <FooterLogoIcon />
                <FooterLogoText>
                  Helpers <span>for</span> Elders
                </FooterLogoText>
              </FooterLogo>
              <FooterText>
                Providing compassionate and professional care services for seniors in the comfort of their own homes since 2010.
              </FooterText>
              <FooterSocial>
                <SocialIcon href="#" aria-label="Facebook">f</SocialIcon>
                <SocialIcon href="#" aria-label="Twitter">t</SocialIcon>
                <SocialIcon href="#" aria-label="Instagram">i</SocialIcon>
                <SocialIcon href="#" aria-label="LinkedIn">in</SocialIcon>
              </FooterSocial>
            </FooterSection>
            
            <FooterSection>
              <FooterTitle>Quick Links</FooterTitle>
              <FooterLinks>
                <FooterLink><a href="/">Home</a></FooterLink>
                <FooterLink><a href="/services">Services</a></FooterLink>
                <FooterLink><a href="/about">About Us</a></FooterLink>
                <FooterLink><a href="/contact">Contact</a></FooterLink>
                <FooterLink><a href="/about#testimonials">Testimonials</a></FooterLink>
                <FooterLink><a href="/faq">FAQ</a></FooterLink>
              </FooterLinks>
            </FooterSection>
            
            <FooterSection>
              <FooterTitle>Contact Us</FooterTitle>
              <FooterContact>
                <FooterContactIcon>📍</FooterContactIcon>
                <FooterContactText>123 Care Avenue, Suite 500, Hopeville, NY 10001</FooterContactText>
              </FooterContact>
              <FooterContact>
                <FooterContactIcon>📞</FooterContactIcon>
                <FooterContactText>(555) 123-4567</FooterContactText>
              </FooterContact>
              <FooterContact>
                <FooterContactIcon>✉️</FooterContactIcon>
                <FooterContactText>care@helpersforelders.com</FooterContactText>
              </FooterContact>
              <FooterContact>
                <FooterContactIcon>⏰</FooterContactIcon>
                <FooterContactText>Mon-Fri: 8am-8pm | Sat: 9am-5pm</FooterContactText>
              </FooterContact>
            </FooterSection>
          </FooterContent>
          
          <FooterBottom>
            <p>&copy; {currentYear} Helpers for Elders. All rights reserved.</p>
          </FooterBottom>
        </Footer>
        
        <ScrollToTop 
          visible={showScrollTop} 
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </ScrollToTop>
      </AppContainer>
    </Router>
  );
}

export default App; 