import {
  Container,
  Icons,
  Image,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  MailBulk
} from './style';

import picture from '../../assets/picture.jpeg';

const Presentation = () => (
  <Container>
    <Image src={picture} alt="François Doussin"/>
    <Icons>
      <a href="https://www.linkedin.com/in/francois-doussin">
        <Linkedin/>
      </a>
      <a href="https://github.com/FrancoisDoussin">
        <Github />
      </a>
      <a href="https://twitter.com/FrancoisDoussin">
        <Twitter />
      </a>
      <a href="https://www.instagram.com/francoisdoussin/">
        <Instagram />
      </a>
      <a href="mailto:contact@francoisdoussin.com">
        <MailBulk />
      </a>
    </Icons>
  </Container>
);

export default Presentation;
