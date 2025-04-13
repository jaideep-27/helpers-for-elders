import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Import premium fonts */
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  /* Reset CSS */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Colors for Indian theme:
     Primary: #e6835c (terracotta orange)
     Secondary: #f0c065 (turmeric yellow)
     Accent: #246a73 (peacock blue)
     Background: #f9f5f0 (ivory)
     Text: #333333 (dark charcoal)
  */

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 15px;
    }
    
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  body {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f9f5f0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    transition: background-color 0.3s ease;
    padding-top: env(safe-area-inset-top); /* Add padding for safe area on iOS */
  }

  /* Ensure that fixed elements don't overlap content */
  main {
    position: relative;
    z-index: 1;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #333;
  }
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
  }
  
  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
  }
  
  p {
    margin-bottom: 1rem;
    font-weight: 400;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  button, input, textarea, select {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
  }
  
  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
  }
  
  /* Utility classes */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
      padding: 0 1.5rem;
    }
  }
  
  .section {
    padding: 6rem 0;
    
    @media (max-width: 768px) {
      padding: 4rem 0;
    }
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-primary {
    color: #e6835c;
  }
  
  .mt-1 { margin-top: 0.5rem; }
  .mt-2 { margin-top: 1rem; }
  .mt-3 { margin-top: 1.5rem; }
  .mt-4 { margin-top: 2rem; }
  
  .mb-1 { margin-bottom: 0.5rem; }
  .mb-2 { margin-bottom: 1rem; }
  .mb-3 { margin-bottom: 1.5rem; }
  .mb-4 { margin-bottom: 2rem; }
  
  /* Animation classes */
  .fade-in {
    animation: fadeIn 0.8s ease-in;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  /* Selection styling */
  ::selection {
    background-color: #e6835c;
    color: white;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
); 