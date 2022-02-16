import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaMailBulk } from "react-icons/fa";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  max-width:100%;
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: auto;
  width: 80vw;
  border-radius: 2em;
  object-fit: cover;
  object-position: top;
  @media (min-width: 768px) {
    height: 40vw;
    width: auto;
  }
`;

export const Icons = styled.div`
  width: 80vw;
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 10px;
  gap: 30px;
  @media (min-width: 768px) {
    width: 60vw;
  }
`;

const IconStyle = `
  height: 4rem;
  width: 4rem;
  color: white;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 10px 10px white;
  }
  @media (min-width: 768px) {
    height: 6rem;
    width: 6rem;
  }
`;

export const Linkedin = styled(FaLinkedin)`
  ${IconStyle};
  background-color: #0e76a8;
  `;
  
export const Github = styled(FaGithub)`
  ${IconStyle}
  background-color: #171515;
`;
  
export const Twitter = styled(FaTwitter)`
  ${IconStyle}
  background-color: #00acee;
`;
  
export const Instagram = styled(FaInstagram)`
  ${IconStyle}
  background-color: #C13584;
`;
  
export const MailBulk = styled(FaMailBulk)`
  ${IconStyle}
  background-color: #328cff;
`;
