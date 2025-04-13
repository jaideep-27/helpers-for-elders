import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

// Styled Components
const ContactContainer = styled.div`
  padding-top: 80px;
  background-color: #f9f5f0;
`;

const ContactBanner = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                    url('https://images.pexels.com/photos/7551926/pexels-photo-7551926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
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
  padding: 0 4% 80px;
`;

const ContactSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
`;

const InfoTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 15px;
  
  &:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 3px;
    background-color: #e6835c;
    bottom: 0;
    left: 0;
  }
`;

const InfoItem = styled.div`
  display: flex;
  margin-bottom: 25px;
  align-items: flex-start;
`;

const InfoIcon = styled.div`
  width: 45px;
  height: 45px;
  background-color: #f9efd8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e6835c;
  font-size: 1.2rem;
  margin-right: 20px;
  flex-shrink: 0;
`;

const InfoContent = styled.div``;

const InfoLabel = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #333;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const BusinessHours = styled.div`
  margin-top: 40px;
`;

const HoursTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
  
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

const HoursList = styled.ul`
  list-style: none;
  padding: 0;
`;

const HoursItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px dashed #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const Day = styled.span`
  font-weight: 600;
  color: #444;
`;

const Time = styled.span`
  color: #666;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: ${props => props.color || '#e6835c'};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    filter: brightness(110%);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ContactForm = styled.form`
  background-color: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 15px;
  
  &:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 3px;
    background-color: #e6835c;
    bottom: 0;
    left: 0;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #444;
  font-size: 0.95rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #e6835c;
    box-shadow: 0 0 0 2px rgba(230, 131, 92, 0.1);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23444' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 12px;
  
  &:focus {
    outline: none;
    border-color: #e6835c;
    box-shadow: 0 0 0 2px rgba(230, 131, 92, 0.1);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #e6835c;
    box-shadow: 0 0 0 2px rgba(230, 131, 92, 0.1);
  }
`;

const SubmitButton = styled.button`
  background-color: #e6835c;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  
  &:hover {
    background-color: #d57148;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(230, 131, 92, 0.3);
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-weight: 500;
  
  &:before {
    content: '✓';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: #2e7d32;
    border-radius: 50%;
    color: white;
    margin-right: 10px;
    font-size: 0.9rem;
  }
`;

const MapSection = styled.div`
  margin-bottom: 60px;
`;

const MapTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 3px;
    background-color: #e6835c;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const MapContainer = styled.div`
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

const FAQSection = styled.div`
  margin-bottom: 40px;
`;

const FAQTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 3px;
    background-color: #e6835c;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const FAQItem = styled.div`
  margin-bottom: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
`;

const FAQQuestion = styled.div`
  padding: 20px;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #333;
  
  &:hover {
    background-color: #f9efd8;
  }
`;

const FAQIcon = styled.span`
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

const FAQAnswer = styled(motion.div)`
  padding: 0;
  background-color: white;
  overflow: hidden;
`;

const FAQContent = styled.div`
  padding: 20px;
  padding-top: 0;
  color: #666;
  line-height: 1.6;
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here
    console.log(formData);
    setSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  // FAQ data
  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We currently provide elder care services throughout the Delhi NCR region, including Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad. If you're outside these areas, please contact us to discuss potential service options."
    },
    {
      question: "How are your caregivers selected and trained?",
      answer: "All our caregivers undergo a rigorous selection process including background checks, reference verification, and in-person interviews. They receive specialized training in elder care, dementia support, fall prevention, and emergency response. Many have professional certifications and years of experience in senior care."
    },
    {
      question: "Can we change caregivers if needed?",
      answer: "Absolutely. We understand the importance of a good match between caregivers and clients. If you're not completely satisfied with your assigned caregiver, we'll work with you to find a better match. Our priority is your loved one's comfort and satisfaction."
    },
    {
      question: "How quickly can care services begin?",
      answer: "In most cases, we can begin care services within 24-48 hours of your initial contact. For specialized care needs, we may require a bit more time to ensure the perfect caregiver match and develop a comprehensive care plan. Urgent situations are prioritized."
    },
    {
      question: "What if we need to adjust care hours or services?",
      answer: "We offer flexible scheduling and service adjustments. As your loved one's needs change, we can increase or decrease care hours or modify the types of services provided. Simply contact your care coordinator to discuss any changes needed."
    }
  ];

  return (
    <ContactContainer>
      <ContactBanner>
        <BannerTag>Get In Touch</BannerTag>
        <BannerTitle>Contact Us</BannerTitle>
        <BannerSubtitle>
          We're here to answer your questions and help you find the right care solution for your loved one.
        </BannerSubtitle>
      </ContactBanner>
      
      <ContentWrapper>
        <ContactSection>
          <ContactInfo>
            <InfoTitle>Our Contact Information</InfoTitle>
            
            <InfoItem>
              <InfoIcon>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Our Location</InfoLabel>
                <InfoText>
                  423 Elder Care Plaza, Sector 16<br />
                  Gurgaon, Haryana 122001<br />
                  India
                </InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FontAwesomeIcon icon={faPhone} />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Phone Number</InfoLabel>
                <InfoText>+91 98765 43210</InfoText>
                <InfoText>+91 98765 43211 (Support)</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FontAwesomeIcon icon={faEnvelope} />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Email Address</InfoLabel>
                <InfoText>info@helpersforelders.com</InfoText>
                <InfoText>support@helpersforelders.com</InfoText>
              </InfoContent>
            </InfoItem>
            
            <BusinessHours>
              <HoursTitle>Business Hours</HoursTitle>
              <HoursList>
                <HoursItem>
                  <Day>Monday - Friday</Day>
                  <Time>8:00 AM - 8:00 PM</Time>
                </HoursItem>
                <HoursItem>
                  <Day>Saturday</Day>
                  <Time>9:00 AM - 6:00 PM</Time>
                </HoursItem>
                <HoursItem>
                  <Day>Sunday</Day>
                  <Time>10:00 AM - 4:00 PM</Time>
                </HoursItem>
              </HoursList>
            </BusinessHours>
            
            <SocialLinks>
              <SocialLink href="#" color="#3b5998">
                <FontAwesomeIcon icon={faFacebookF} />
              </SocialLink>
              <SocialLink href="#" color="#1da1f2">
                <FontAwesomeIcon icon={faTwitter} />
              </SocialLink>
              <SocialLink href="#" color="#e4405f">
                <FontAwesomeIcon icon={faInstagram} />
              </SocialLink>
              <SocialLink href="#" color="#0077b5">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit}>
            <FormTitle>Send Us a Message</FormTitle>
            
            {submitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Thank you for your message! We'll respond within 24 hours.
              </SuccessMessage>
            )}
            
            <FormRow>
              <FormGroup>
                <FormLabel htmlFor="name">Your Name</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <FormInput
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="service">Service of Interest</FormLabel>
                <FormSelect
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="personal-care">Personal Care</option>
                  <option value="companionship">Companionship</option>
                  <option value="household-help">Household Help</option>
                  <option value="specialized-care">Specialized Care</option>
                  <option value="transportation">Transportation</option>
                  <option value="overnight-care">Overnight Care</option>
                </FormSelect>
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <FormLabel htmlFor="message">Your Message</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
        </ContactSection>
        
        <MapSection>
          <MapTitle>Our Location</MapTitle>
          <MapContainer>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192747!2d77.06889754725793!3d28.52758200625861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1651828352278!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapContainer>
        </MapSection>
        
        <FAQSection>
          <FAQTitle>Frequently Asked Questions</FAQTitle>
          
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon isOpen={openFAQ === index}>
                  <FontAwesomeIcon icon={faChevronDown} />
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer
                initial={false}
                animate={{ height: openFAQ === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openFAQ === index && (
                  <FAQContent>{faq.answer}</FAQContent>
                )}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQSection>
      </ContentWrapper>
    </ContactContainer>
  );
}

export default Contact; 