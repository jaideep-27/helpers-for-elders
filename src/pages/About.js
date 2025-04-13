import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const AboutContainer = styled.div`
  padding-top: 0;
  background-color: #f9f5f0;
`;

const AboutBanner = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                    url('https://images.pexels.com/photos/7551628/pexels-photo-7551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
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
  padding: 8px 20px;
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
  font-size: 3.5rem;
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
  padding: 0 5%;
`;

const MissionSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MissionContent = styled.div`
  flex: 1;
  padding-right: 60px;
  
  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 40px;
  }
`;

const MissionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 25px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 2px;
    background-color: #e6835c;
    bottom: -10px;
    left: 0;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MissionDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
`;

const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ValueItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  &:before {
    content: '•';
    color: #e6835c;
    font-size: 2rem;
    margin-right: 15px;
    line-height: 0;
  }
`;

const ValueTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 8px;
  color: #333;
`;

const ValueDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const MissionImage = styled.div`
  flex: 1;
  min-height: 400px;
  background-image: url('https://images.pexels.com/photos/7551653/pexels-photo-7551653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 80px;
  padding: 60px 40px;
  background-color: #f9f3ea;
  border-radius: 15px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #e6835c;
  margin-bottom: 10px;
`;

const StatTitle = styled.div`
  font-size: 1.1rem;
  color: #555;
  font-weight: 500;
`;

const TeamSection = styled.div`
  margin-bottom: 80px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const TeamMember = styled(motion.div)`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const MemberImage = styled.div`
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  }
`;

const MemberInfo = styled.div`
  padding: 25px;
  text-align: center;
`;

const MemberName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 5px;
  color: #333;
`;

const MemberTitle = styled.p`
  font-size: 1rem;
  color: #888;
  margin-bottom: 15px;
`;

const MemberBio = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f9f3ea;
  color: #e6835c;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e6835c;
    color: white;
  }
`;

const JourneySection = styled.div`
  margin-bottom: 80px;
`;

const Timeline = styled.div`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #e6835c;
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
`;

const TimelineDate = styled.div`
  width: 120px;
  padding: 10px;
  background-color: #e6835c;
  color: white;
  border-radius: 5px;
  text-align: center;
  font-weight: 600;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    position: absolute;
    left: 0;
    margin-left: -30px;
    margin-top: 20px;
    font-size: 0.8rem;
    padding: 5px;
    width: 80px;
  }
`;

const TimelineContent = styled.div`
  width: calc(50% - 90px);
  background-color: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  
  @media (max-width: 768px) {
    width: calc(100% - 80px);
    margin-left: 80px;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 20px;
    width: 20px;
    height: 20px;
    background-color: #e6835c;
    border-radius: 50%;
    
    ${TimelineItem}:nth-child(odd) & {
      right: -60px;
      
      @media (max-width: 768px) {
        left: -70px;
        right: auto;
      }
    }
    
    ${TimelineItem}:nth-child(even) & {
      left: -60px;
      
      @media (max-width: 768px) {
        left: -70px;
      }
    }
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #333;
`;

const TimelineDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
`;

const PartnerSection = styled.div`
  margin-bottom: 80px;
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 40px;
  align-items: center;
  justify-items: center;
`;

const PartnerLogo = styled.img`
  max-width: 100%;
  height: auto;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
  
  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
`;

const CTASection = styled.div`
  background-color: #e6835c;
  padding: 80px 0;
  border-radius: 20px;
  text-align: center;
  color: white;
`;

const CTAContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 5%;
`;

const CTATitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 15px 35px;
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
    background-color: #f9f3ea;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 30px;
  }
`;

function About() {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Mary Johnson",
      title: "Founder & CEO",
      bio: "With over 25 years of experience in healthcare and elder care, Mary founded Helpers for Elders with a vision to transform how we care for seniors.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
      id: 2,
      name: "Robert Williams",
      title: "Care Operations Director",
      bio: "Robert ensures our care services meet the highest standards of quality and compassion. He oversees caregiver training and care plan development.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
      id: 3,
      name: "Susan Miller",
      title: "Client Relations Manager",
      bio: "Susan is dedicated to ensuring our clients and their families have the best possible experience with our services through continuous communication.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
      id: 4,
      name: "David Chen",
      title: "Specialized Care Coordinator",
      bio: "With extensive experience in dementia care, David leads our specialized care programs for seniors with cognitive and complex health challenges.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1890&q=80"
    }
  ];
  
  // Company journey milestones
  const companyJourney = [
    {
      year: "2005",
      title: "Our Humble Beginning",
      description: "Helpers for Elders was founded by Mary Johnson after caring for her own grandmother and recognizing the need for compassionate, personalized elder care services."
    },
    {
      year: "2010",
      title: "Expanding Our Services",
      description: "We expanded our service offerings to include specialized care for seniors with dementia, Alzheimer's, and other complex health conditions."
    },
    {
      year: "2015",
      title: "Regional Growth",
      description: "After building a strong reputation for excellence, we expanded our operations to cover the entire metropolitan area with a growing team of dedicated caregivers."
    },
    {
      year: "2020",
      title: "Innovation in Elder Care",
      description: "We introduced new technology solutions to enhance care coordination, family communication, and caregiver support while maintaining our personal touch."
    },
    {
      year: "Today",
      title: "Committed to Excellence",
      description: "Today, we continue to innovate and improve our services while staying true to our core values of compassion, respect, and excellence in elder care."
    }
  ];
  
  // Partner logos
  const partners = [
    { id: 1, name: "City Senior Services", logo: "https://placehold.co/180x90/e6e6e6/e6835c?text=Partner+1" },
    { id: 2, name: "Memorial Hospital", logo: "https://placehold.co/180x90/e6e6e6/e6835c?text=Partner+2" },
    { id: 3, name: "Elder Care Association", logo: "https://placehold.co/180x90/e6e6e6/e6835c?text=Partner+3" },
    { id: 4, name: "Community Health Network", logo: "https://placehold.co/180x90/e6e6e6/e6835c?text=Partner+4" },
    { id: 5, name: "Senior Living Alliance", logo: "https://placehold.co/180x90/e6e6e6/e6835c?text=Partner+5" },
    { id: 6, name: "Caregiver Support Foundation", logo: "https://placehold.co/180x90/e6e6e6/e6835c?text=Partner+6" }
  ];

  return (
    <AboutContainer>
      <AboutBanner>
        <BannerTag>About Us</BannerTag>
        <BannerTitle>Our Story & Mission</BannerTitle>
        <BannerSubtitle>
          Learn about our journey to provide exceptional care and support for seniors and their families.
        </BannerSubtitle>
      </AboutBanner>
      
      <ContentWrapper>
        <MissionSection>
          <MissionContent>
            <MissionTitle>Our Mission & Values</MissionTitle>
            <MissionDescription>
              At Helpers for Elders, our mission is to enhance the quality of life for seniors by providing 
              compassionate, personalized care that respects their dignity, independence, and unique needs. 
              We believe every senior deserves to age with grace and comfort in the place they call home.
            </MissionDescription>
            <ValuesList>
              <ValueItem>
                <div>
                  <ValueTitle>Compassion</ValueTitle>
                  <ValueDescription>We provide care with kindness, empathy, and sensitivity to each client's unique situation.</ValueDescription>
                </div>
              </ValueItem>
              <ValueItem>
                <div>
                  <ValueTitle>Respect</ValueTitle>
                  <ValueDescription>We honor the dignity, preferences, and life experiences of every senior we serve.</ValueDescription>
                </div>
              </ValueItem>
              <ValueItem>
                <div>
                  <ValueTitle>Excellence</ValueTitle>
                  <ValueDescription>We strive for the highest standards in every aspect of our care services and operations.</ValueDescription>
                </div>
              </ValueItem>
              <ValueItem>
                <div>
                  <ValueTitle>Integrity</ValueTitle>
                  <ValueDescription>We build trust through honest communication and ethical conduct in all relationships.</ValueDescription>
                </div>
              </ValueItem>
            </ValuesList>
          </MissionContent>
          <MissionImage />
        </MissionSection>
        
        <StatsSection>
          <StatItem>
            <StatNumber>15+</StatNumber>
            <StatTitle>Years of Experience</StatTitle>
          </StatItem>
          <StatItem>
            <StatNumber>200+</StatNumber>
            <StatTitle>Trained Caregivers</StatTitle>
          </StatItem>
          <StatItem>
            <StatNumber>5000+</StatNumber>
            <StatTitle>Families Served</StatTitle>
          </StatItem>
          <StatItem>
            <StatNumber>98%</StatNumber>
            <StatTitle>Client Satisfaction</StatTitle>
          </StatItem>
        </StatsSection>
        
        <TeamSection>
          <SectionTitle>Our Leadership Team</SectionTitle>
          <TeamGrid>
            {teamMembers.map((member) => (
              <TeamMember 
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: member.id * 0.1 }}
                viewport={{ once: true }}
              >
                <MemberImage style={{ backgroundImage: `url(${member.image})` }} />
                <MemberInfo>
                  <MemberName>{member.name}</MemberName>
                  <MemberTitle>{member.title}</MemberTitle>
                  <MemberBio>{member.bio}</MemberBio>
                  <SocialLinks>
                    <SocialLink href="#" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </SocialLink>
                    <SocialLink href="#" aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </SocialLink>
                    <SocialLink href="#" aria-label="Email">
                      <i className="fas fa-envelope"></i>
                    </SocialLink>
                  </SocialLinks>
                </MemberInfo>
              </TeamMember>
            ))}
          </TeamGrid>
        </TeamSection>
        
        <JourneySection>
          <SectionTitle>Our Journey</SectionTitle>
          <Timeline>
            {companyJourney.map((milestone, index) => (
              <TimelineItem key={index}>
                <TimelineDate>{milestone.year}</TimelineDate>
                <TimelineContent>
                  <TimelineTitle>{milestone.title}</TimelineTitle>
                  <TimelineDescription>{milestone.description}</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </JourneySection>
        
        <PartnerSection>
          <SectionTitle>Our Trusted Partners</SectionTitle>
          <PartnersGrid>
            {partners.map((partner) => (
              <PartnerLogo 
                key={partner.id} 
                src={partner.logo} 
                alt={partner.name} 
              />
            ))}
          </PartnersGrid>
        </PartnerSection>
        
        <CTASection>
          <CTAContent>
            <CTATitle>Join Our Team</CTATitle>
            <CTAText>
              Are you passionate about making a difference in seniors' lives? We're always looking for compassionate, dedicated caregivers to join our team.
            </CTAText>
            <CTAButton href="/careers">View Opportunities</CTAButton>
          </CTAContent>
        </CTASection>
      </ContentWrapper>
    </AboutContainer>
  );
}

export default About;