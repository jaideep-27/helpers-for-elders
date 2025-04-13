import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Hero section with proper elder care image
const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('https://images.pexels.com/photos/7551606/pexels-photo-7551606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  padding-top: 100px;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%);
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  width: 100%;
  padding: 0 5%;
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
  
  @media (max-width: 992px) {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 50px 10% 0;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 7vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 2rem;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  line-height: 1.1;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  max-width: 600px;
  margin-bottom: 3rem;
  color: #ffffff;
  line-height: 1.6;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
  
  @media (max-width: 992px) {
    margin: 0 auto 3rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: #e6835c;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid #e6835c;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:after {
    content: "→";
    margin-left: 8px;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background-color: transparent;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    
    &:after {
      transform: translateX(5px);
    }
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: white;
    color: #333;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const HeroStats = styled(motion.div)`
  display: flex;
  gap: 3rem;
  margin-top: 4rem;
  
  @media (max-width: 992px) {
    justify-content: center;
    gap: 5rem;
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 992px) {
    align-items: center;
  }
`;

const StatNumber = styled.span`
  font-size: 3rem;
  font-weight: 700;
  color: #f0c065;
  font-family: 'Playfair Display', serif;
  line-height: 1;
`;

const StatText = styled.span`
  font-size: 1rem;
  color: white;
  margin-top: 0.5rem;
`;

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const SectionDivider = styled.div`
  height: 100px;
  background: linear-gradient(to bottom right, #f9f5f0 0%, #f9f5f0 50%, #f9efd8 50%, #f9efd8 100%);
`;

const FeaturesSection = styled.section`
  padding: 6rem 2rem;
  background-color: #f9efd8;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
  position: relative;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  color: #555;
  line-height: 1.6;
`;

const Underline = styled.div`
  width: 80px;
  height: 4px;
  background-color: #e6835c;
  margin: 0.5rem auto 2rem;
`;

const FeatureCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureImage = styled.div`
  height: 220px;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
`;

const FeatureContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const FeatureLink = styled(Link)`
  display: inline-block;
  color: #e6835c;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  padding-bottom: 5px;
  align-self: flex-start;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #e6835c;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const TestimonialSection = styled.section`
  padding: 6rem 2rem;
  background-color: #f9f5f0;
  position: relative;
  overflow: hidden;
`;

const TestimonialBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.04;
  background-image: url('https://images.pexels.com/photos/7282776/pexels-photo-7282776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const Testimonials = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Testimonial = styled(motion.div)`
  background-color: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
  margin-bottom: 2.5rem;
  position: relative;
  
  &:before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 25px;
    font-size: 5rem;
    color: #f0e5d3;
    font-family: serif;
    z-index: -1;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  font-style: italic;
  color: #555;
  margin-bottom: 2rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  margin-right: 1.5rem;
  border: 3px solid #f0e5d3;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  font-size: 1.2rem;
  margin: 0;
  color: #333;
`;

const AuthorRole = styled.p`
  font-size: 0.9rem;
  color: #e6835c;
  font-weight: 600;
`;

const CallToAction = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('https://images.pexels.com/photos/7551627/pexels-photo-7551627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  text-align: center;
  color: white;
  position: relative;
`;

const CTATitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
`;

// Elder care specific stock photos
const elderCareImages = [
  "https://images.pexels.com/photos/7551670/pexels-photo-7551670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Personal care
  "https://images.pexels.com/photos/7551651/pexels-photo-7551651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Companionship
  "https://images.pexels.com/photos/7551644/pexels-photo-7551644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  // Health monitoring
];

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Caring Support for Your Senior Loved Ones
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We provide professional and heartfelt care services tailored to the unique needs of seniors in the comfort of their homes.
          </HeroSubtitle>
          <ButtonGroup>
            <PrimaryButton to="/services">Our Services</PrimaryButton>
            <SecondaryButton to="/contact">Contact Us</SecondaryButton>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>
      
      <SectionDivider />
      
      <FeaturesSection>
        <SectionTitle>How We Can Help</SectionTitle>
        <Underline />
        <SectionSubtitle>
          Our comprehensive range of services designed to enhance quality of life and provide peace of mind for families.
        </SectionSubtitle>
        <FeatureCards>
          <FeatureCard>
            <FeatureImage image={elderCareImages[0]} />
            <FeatureContent>
              <FeatureTitle>Personal Care</FeatureTitle>
              <FeatureDescription>
                Assistance with daily activities such as bathing, dressing, mobility support, medication reminders, and meal preparation.
              </FeatureDescription>
              <FeatureLink to="/services">Learn More →</FeatureLink>
            </FeatureContent>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureImage image={elderCareImages[1]} />
            <FeatureContent>
              <FeatureTitle>Companionship</FeatureTitle>
              <FeatureDescription>
                Meaningful conversation, emotional support, recreational activities, and social engagement to enhance quality of life.
              </FeatureDescription>
              <FeatureLink to="/services">Learn More →</FeatureLink>
            </FeatureContent>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureImage image={elderCareImages[2]} />
            <FeatureContent>
              <FeatureTitle>Health Monitoring</FeatureTitle>
              <FeatureDescription>
                Regular health check-ups, medication management, coordination with healthcare providers, and family updates.
              </FeatureDescription>
              <FeatureLink to="/services">Learn More →</FeatureLink>
            </FeatureContent>
          </FeatureCard>
        </FeatureCards>
      </FeaturesSection>
      
      <TestimonialSection>
        <TestimonialBackground />
        <SectionTitle>What Families Say</SectionTitle>
        <Underline />
        <Testimonials>
          <Testimonial>
            <TestimonialText>
              "The caregivers from Helpers for Elders have become like family to my mother. Their compassion, professionalism, and dedication have made such a difference in her life. I can finally have peace of mind knowing she's in good hands."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorImage image="https://images.pexels.com/photos/7551728/pexels-photo-7551728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <AuthorInfo>
                <AuthorName>Priya Sharma</AuthorName>
                <AuthorRole>Daughter of Client</AuthorRole>
              </AuthorInfo>
            </TestimonialAuthor>
          </Testimonial>
          
          <Testimonial>
            <TestimonialText>
              "Finding trustworthy care for my father was a challenge until we discovered Helpers for Elders. The team is professional yet warm, and they truly understand his unique needs. It's not just care; it's companionship that's improved his quality of life."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorImage image="https://images.pexels.com/photos/8942910/pexels-photo-8942910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <AuthorInfo>
                <AuthorName>Raj Singh</AuthorName>
                <AuthorRole>Son of Client</AuthorRole>
              </AuthorInfo>
            </TestimonialAuthor>
          </Testimonial>
        </Testimonials>
      </TestimonialSection>
      
      <CallToAction>
        <CTATitle>Ready to Get Started?</CTATitle>
        <CTADescription>
          Contact us today to schedule a free consultation and learn how we can tailor our services to meet your loved one's specific needs.
        </CTADescription>
        <PrimaryButton to="/contact">Get in Touch</PrimaryButton>
      </CallToAction>
    </>
  );
};

export default Home; 