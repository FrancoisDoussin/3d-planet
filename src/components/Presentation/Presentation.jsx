import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaMailBulk } from "react-icons/fa";

import { Container, Icons, Image } from './style';

import picture from '../../assets/picture.jpeg';

const Presentation = () => (
  <Container>
    <Image src={picture} alt="François Doussin"/>
    <Icons>
      <a href="https://www.linkedin.com/in/francois-doussin">
        <FaLinkedin />
      </a>
      <a href="https://github.com/FrancoisDoussin">
        <FaGithub />
      </a>
      <a href="https://twitter.com/FrancoisDoussin">
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com/francoisdoussin/">
        <FaInstagram />
      </a>
      <a href="mailto:contact@francoisdoussin.com">
        <FaMailBulk />
      </a>
    </Icons>
  </Container>
);

export default Presentation;
