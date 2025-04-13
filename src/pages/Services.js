import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const ServicesContainer = styled.div`
  padding-top: 0;
  background-color: #f9f5f0;
`;

const ServicesBanner = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                    url('https://images.pexels.com/photos/7551664/pexels-photo-7551664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 60px;
  position: relative;
  overflow: hidden;
`;

const BannerTag = styled.div`
  background-color: rgba(230, 131, 92, 0.9);
  padding: 6px 16px;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  transform: translateY(-50px);
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards 0.3s;
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const BannerTitle = styled.h1`
  font-size: 3.2rem;
  text-align: center;
  margin-bottom: 20px;
  max-width: 800px;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  transform: translateY(-30px);
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards 0.5s;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const BannerSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 600px;
  line-height: 1.7;
  margin-bottom: 30px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
  transform: translateY(-20px);
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards 0.7s;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4%;
`;

const IntroSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const IntroTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 25px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 2px;
    background-color: #e6835c;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const IntroDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ServiceCard}:hover & {
    transform: scale(1.05);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0c065;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ServiceContent = styled.div`
  padding: 25px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 15px;
  
  &:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 2px;
    background-color: #e6835c;
    bottom: 0;
    left: 0;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #666;
  margin-bottom: 20px;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.95rem;
  color: #555;
  
  &:before {
    content: '✓';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background-color: #f9efd8;
    border-radius: 50%;
    color: #e6835c;
    margin-right: 10px;
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

const LearnMoreButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent;
  color: #e6835c;
  border: 2px solid #e6835c;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: #e6835c;
    color: white;
  }
`;

const ProcessSection = styled.div`
  margin-bottom: 60px;
`;

const ProcessTitle = styled.h2`
  font-size: 2.3rem;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 2px;
    background-color: #e6835c;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessStep = styled.div`
  text-align: center;
  padding: 25px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  
  &:not(:last-child):after {
    content: '→';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.8rem;
    color: #e6835c;
    
    @media (max-width: 768px) {
      content: '↓';
      right: 50%;
      top: auto;
      bottom: -25px;
      transform: translateX(50%);
    }
  }
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f9efd8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
  color: #e6835c;
  margin: 0 auto 15px;
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 12px;
  color: #333;
`;

const StepDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
`;

const TestimonialsSection = styled.div`
  background-color: #f9efd8;
  padding: 60px 0;
  margin-bottom: 60px;
  border-radius: 16px;
`;

const TestimonialsContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 5%;
`;

const TestimonialsTitle = styled.h2`
  font-size: 2.3rem;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 2px;
    background-color: #e6835c;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TestimonialsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  
  &:before {
    content: '"';
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: 3.5rem;
    color: #f0e5d3;
    font-family: Georgia, serif;
    line-height: 1;
  }
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
  font-style: italic;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: #333;
`;

const AuthorRelation = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

const CTASection = styled.div`
  background-color: #e6835c;
  padding: 60px 0;
  border-radius: 16px;
  text-align: center;
  color: white;
`;

const CTAContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 5%;
`;

const CTATitle = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: white;
  color: #e6835c;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: #f9f5f0;
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 25px;
  }
`;

// Indian-specific stock photos that work
const indianCareImages = [
  "https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7551889/pexels-photo-7551889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7551926/pexels-photo-7551926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7503271/pexels-photo-7503271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6964804/pexels-photo-6964804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

function Services() {
  // Services data
  const services = [
    {
      id: 1,
      title: "Personal Care",
      description: "Compassionate assistance with daily activities to maintain dignity and independence.",
      image: indianCareImages[0],
      features: [
        "Assistance with bathing and personal hygiene",
        "Dressing and grooming support",
        "Mobility assistance and fall prevention",
        "Medication reminders and monitoring",
        "Toileting and incontinence care"
      ]
    },
    {
      id: 2,
      title: "Companionship",
      description: "Meaningful social interaction and emotional support for a fulfilling lifestyle.",
      image: indianCareImages[1],
      features: [
        "Friendly conversation and emotional support",
        "Recreational activities and hobbies",
        "Accompaniment to social events",
        "Reading aloud and playing games",
        "Memory exercises and cognitive stimulation"
      ]
    },
    {
      id: 3,
      title: "Household Help",
      description: "Light housekeeping and meal preparation to maintain a comfortable living environment.",
      image: indianCareImages[2],
      features: [
        "Light housekeeping and laundry",
        "Nutritious meal planning and preparation",
        "Grocery shopping and errands",
        "Medication pickup and organization",
        "Pet care assistance"
      ]
    },
    {
      id: 4,
      title: "Specialized Care",
      description: "Expert care for seniors with specific health conditions including dementia and Alzheimer's.",
      image: indianCareImages[3],
      features: [
        "Dementia and Alzheimer's care",
        "Post-hospital recovery support",
        "Chronic condition management",
        "Hospice care assistance",
        "Respite care for family caregivers"
      ]
    },
    {
      id: 5,
      title: "Transportation",
      description: "Safe and reliable transportation for appointments, shopping, and social activities.",
      image: indianCareImages[4],
      features: [
        "Medical appointment transportation",
        "Shopping and errand assistance",
        "Social and religious event accompaniment",
        "Family gathering transportation",
        "Wheelchair-accessible transport options"
      ]
    },
    {
      id: 6,
      title: "Overnight Care",
      description: "Peace of mind with attentive overnight supervision and assistance.",
      image: indianCareImages[5],
      features: [
        "Nighttime assistance and supervision",
        "Medication administration as needed",
        "Help with nighttime toileting",
        "Early morning care routine assistance",
        "Emergency response and monitoring"
      ]
    }
  ];
  
  // Process steps data
  const processSteps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "We begin with a thorough assessment of your loved one's needs, preferences, and any health concerns."
    },
    {
      number: 2,
      title: "Customized Care Plan",
      description: "Our care experts develop a personalized plan tailored specifically to your loved one's unique situation."
    },
    {
      number: 3,
      title: "Caregiver Matching",
      description: "We carefully select caregivers whose skills, experience, and personality match your family's needs."
    },
    {
      number: 4,
      title: "Ongoing Support",
      description: "We provide regular check-ins, care plan updates, and responsive support as needs evolve."
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      text: "The caregivers from Helpers for Elders have been a blessing for our family. Mom looks forward to their visits and they've helped her maintain her independence while giving us peace of mind.",
      name: "Priya Sharma",
      relation: "Daughter of client",
      image: "https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      text: "After Dad's stroke, we were overwhelmed with his care needs. The team created a comprehensive plan that addressed everything. Their specialized care has been crucial to his recovery.",
      name: "Raj Singh",
      relation: "Son of client",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      text: "I was hesitant about having someone in my home, but my caregiver has become like family. She helps me with daily tasks while respecting my routines and preferences.",
      name: "Lakshmi Rao",
      relation: "Client",
      image: "https://images.pexels.com/photos/8850737/pexels-photo-8850737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <ServicesContainer>
      <ServicesBanner>
        <BannerTag>Our Services</BannerTag>
        <BannerTitle>Compassionate Elder Care</BannerTitle>
        <BannerSubtitle>
          Personalized care solutions that enhance quality of life and preserve dignity for your loved ones.
        </BannerSubtitle>
      </ServicesBanner>
      
      <ContentWrapper>
        <IntroSection>
          <IntroTitle>How We Can Help</IntroTitle>
          <IntroDescription>
            At Helpers for Elders, we understand that each senior has unique needs and preferences. 
            Our comprehensive range of services is designed to provide personalized support, 
            whether it's a few hours of companionship or round-the-clock care. Our compassionate 
            caregivers are thoroughly screened, trained, and matched to ensure the perfect fit for your loved one.
          </IntroDescription>
        </IntroSection>
        
        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceImageContainer>
                {service.image ? (
                  <ServiceImage src={service.image} alt={service.title} />
                ) : (
                  <ImagePlaceholder>{service.title[0]}</ImagePlaceholder>
                )}
              </ServiceImageContainer>
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, index) => (
                    <ServiceFeature key={index}>{feature}</ServiceFeature>
                  ))}
                </ServiceFeatures>
                <LearnMoreButton href="/contact">Learn More</LearnMoreButton>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
        
        <ProcessSection>
          <ProcessTitle>Our Care Process</ProcessTitle>
          <ProcessSteps>
            {processSteps.map((step) => (
              <ProcessStep key={step.number}>
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </ProcessStep>
            ))}
          </ProcessSteps>
        </ProcessSection>
      </ContentWrapper>
      
      <TestimonialsSection>
        <TestimonialsContent>
          <TestimonialsTitle>What Families Say</TestimonialsTitle>
          <TestimonialsList>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index}>
                <TestimonialText>{testimonial.text}</TestimonialText>
                <TestimonialAuthor>
                  <AuthorImage src={testimonial.image} alt={testimonial.name} />
                  <AuthorInfo>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorRelation>{testimonial.relation}</AuthorRelation>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialsList>
        </TestimonialsContent>
      </TestimonialsSection>
      
      <ContentWrapper>
        <CTASection>
          <CTAContent>
            <CTATitle>Ready to Get Started?</CTATitle>
            <CTAText>
              Contact us today for a free consultation to discuss how we can help your loved one live a more comfortable, dignified, and enriched life.
            </CTAText>
            <CTAButton href="/contact">Contact Us</CTAButton>
          </CTAContent>
        </CTASection>
      </ContentWrapper>
    </ServicesContainer>
  );
}

export default Services;