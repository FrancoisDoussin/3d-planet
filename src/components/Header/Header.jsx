import { TitleContainer, Title, Subtitle, ArrowDown } from './style';
import { FaArrowAltCircleDown } from 'react-icons/fa';

const Header = ({ scrollDown }) => (
  <>
    <TitleContainer>
      <Title>François Doussin</Title>
      <Subtitle>Développer - Photographer</Subtitle>
    </TitleContainer>
    <ArrowDown onClick={scrollDown}>
      <FaArrowAltCircleDown />
    </ArrowDown>
  </>
);

export default Header;
